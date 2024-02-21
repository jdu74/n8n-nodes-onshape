
import {
	IExecuteFunctions,
	IWebhookFunctions,
	IHookFunctions,
	ILoadOptionsFunctions
}
	from "n8n-workflow";

export const iNodeRequest: any = {
	path: '',
	query: {},
	body: {},
	endpoint: '',
	method: ''
};

export function parseParameters(
	this: IExecuteFunctions | IWebhookFunctions | IHookFunctions | ILoadOptionsFunctions,
	i: number) {

	const result: any = {
		path: '',
		query: {},
		body: {},
		method: ''
	};

	const iNodeParameters = this.getNode();
	var parameters: any = Object.entries(iNodeParameters.parameters).map((element: any) => {
		return [element[0], this.getNodeParameter(element[0], i)];
	}).reduce((obj, [k, v]) => ({ ...obj, [k]: v }), {});

	[result.method, result.path] = parameters.operation.split(' ');

	result.headers = parameters.jsonContentType ? { 'content-type': parameters.jsonContentType } : { 'content-type': 'application/json' }

	if (parameters.additionalFields && parameters.additionalFields?.metadataValues) {
		parameters = { ...parameters, ...parameters.additionalFields.metadataValues }
	}

	Object.entries(parameters).forEach((element: any) => {
		const [name, type, loc] = split(element[0]);
		const value: any = element[1];
		switch (type) {
			case 'object': {
				add(loc, processValue(value), result);
				break;
			}
			case 'json': {
				add(loc, string2Object(value), result);
				break;
			}
			default: {
				add(loc, processValue({ [name]: value }), result);
			}
		}
	});
	return result;
}

function split(element: any) {
	const params: any = element.replace(/ /g, '').split(/(?:,|-|\(|\))+/);
	const l = params.length;
	if (l < 4) return [];
	const i1 = element.lastIndexOf('-');
	if (i1) {
		const name = element.substring(0, i1);
		return [name, ...params.slice(l - 3, l - 1)];
	}
	return [];
}

function processValue(nodeParameters: any): any {
	var body: any = {};

	Object.entries(nodeParameters).forEach((element: any) => {
		const name: string = element[0];
		const value: any = element[1];
		switch (type(name, value)) {
			case 'object': {
				const subProperties = hasProperties(name, value);
				const res = subProperties ? processValue(subProperties) : processValue(value)
				Object.assign(body, res);
				break;
			}
			case 'array': {
				const els: any = [];
				value.forEach((params: any) => {
					(typeof params === 'object') ? els.push(processValue(params)) : els.push(params)
				})
				Object.assign(body, { [name]: value });
				break;
			}
			default: {
				Object.assign(body, { [name]: value });
			}
		}
	});
	return body;
}


function add(loc: any, request: any, result: any): any {
	if (loc && request && Object.values(request)[0]) {
		switch (loc) {
			case 'body': {
				result[loc] = request;
				break;
			}
			case 'path': {
				const newPath = parse(result['path'], request);
				result['path'] = newPath;
				break;
			}
			case 'query': {
				Object.assign(result['query'], request)
				break;
			}
		}
	}
	return result;
}

function string2Object(s: any) {
	return (typeof s === 'string')
		? JSON.parse(s
			.replace(/\n/g, '')
			.replace(/\r/g, '')
			.replace(/\t/g, '')
			.replace(' ', '')
			.trim())
		: s
}

function type(name: string, value: any): any {
	if (typeof value === 'object') return Array.isArray(value) ? 'array' : 'object'
	return typeof value;
}

function hasProperties(name: string, value: any) {
	const subKey: string = Object.keys(value)[0]
	const subValue: any = Object.values(value)[0]
	if (name + 'Properties' === subKey) {
		const subSubKey = Object.keys(subValue[0])[0];
		const subSubValue = Object.values(subValue);
		if (subSubKey === name) return { [name]: subValue.map((el: any) => el[name]) };
	}
	return undefined
}

function parse(src: string, values: any): string {
	Object.entries(values).forEach(([key, value]: [any, any]) => {
		src = src.replace(new RegExp('{' + key + '}', 'g'), value);
	});
	return src;
}


import {
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
	INodeExecutionData,
	INodePropertyOptions,
	IWebhookFunctions,
} from 'n8n-workflow';


import {
	IDataObject,
	NodeApiError,
} from 'n8n-workflow';

import * as CryptoJS from 'crypto-js';
import { URL } from 'url';

export const iNodeRequest: any = {
	path: '',
	query: {},
	body: {},
	endpoint: '',
	method: ''
};

export const loadOptions = {
	async getPartFormatNameFields(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		const returnData: INodePropertyOptions[] = [];
		const collections = await apiRequest.call(this, 'GET', '/translations/translationformats');
		for (const collection of collections.filter((c: any) => c.validDestinationFormat)) {
			returnData.push({
				name: collection.name,
				value: collection.name,
			});
		}
		return returnData;
	},
	async getAssemblyFormatNameFields(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		const returnData: INodePropertyOptions[] = [];
		const collections = await apiRequest.call(this, 'GET', '/translations/translationformats');
		for (const collection of collections.filter((c: any) => c.validDestinationFormat && c.couldBeAssembly)) {
			returnData.push({
				name: collection.name,
				value: collection.name,
			});
		}
		return returnData;
	}
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const resource = this.getNodeParameter('resource', 0) as string;
	const items = this.getInputData();
	const returnData: IDataObject[] = [];
	const length = items.length as number;
	for (let i = 0; i < length; i++) {
		try {
			const iNodeRequest = parseParameters.call(this, i);
			Object.assign(iNodeRequest.headers, { Accept: 'application/json,text/html,application/xhtml+xml,application/xml,text/*;q=0.9, image/*;q=0.8, */*;q=0.7' })
			const response = await apiRequest.call(
				this,
				iNodeRequest.method,
				iNodeRequest.path,
				iNodeRequest.body,
				iNodeRequest.query,
				iNodeRequest.headers,
				{
					resolveWithFullResponse: true,
					encoding: null
				}
			);
			const mimeType = response.headers['content-type'];
			const responseBody = response.body
			switch (mimeType) {
				case null:
				case undefined:
					returnData.push({} as IDataObject);
					break
				case 'application/json;charset=utf-8':
					const responseData: any = JSON.parse(new TextDecoder().decode(responseBody));
					if (Array.isArray(responseData)) {
						returnData.push.apply(returnData, responseData as IDataObject[]);
					} else {
						returnData.push(responseData as IDataObject);
					}
					break
				default:
					//mimeType === 'application/octet-stream'
					const binary = {
						json: {},
						binary: {
							data: await this.helpers.prepareBinaryData(Buffer.from(responseBody), resource + mimeType.match(/\/[^;]+/).join('').replace('\/', '.'), mimeType)
						}
					};
					returnData.push(binary);
			}
		} catch (error: any) {
			if (this.continueOnFail()) {
				returnData.push({ error: error.message });
				continue;
			}
			throw error;
		}
	}
	return [this.helpers.returnJsonArray(returnData)]
}

export async function apiRequest(
	this: IExecuteFunctions | IHookFunctions | ILoadOptionsFunctions,
	method: string,
	resource: string,
	body: any = {},
	query: IDataObject = {},
	headers: any = {},
	option: IDataObject = {}): Promise<any> {

	option = {
		...option,
		json: option.json || true
	}

	const endpoint = 'https://cad.onshape.com/api/v6';
	const options: any = {
		method,
		qs: query,
		body,
		headers,
		uri: `${endpoint}${resource}`,
		...option
	};

	if (!Object.keys(body).length)
		delete options.body
	if (!Object.keys(query).length)
		delete options.qs;

	try {
		const authenticationMethod = this.getNodeParameter('authentication', 0) as string;
		if (authenticationMethod === 'apiKeys') {
			const credentials = await this.getCredentials('onshapeApiKeysApi') as IDataObject;
			options.headers = buildHeaders(options.method, options.uri, options.headers, options.qs, credentials.clientId, credentials.clientSecret);
			return await this.helpers.request!(options);
		} else {
			delete options.auth;
			//@ts-ignore
			return await this.helpers.requestOAuth2!.call(this, 'onshapeOAuth2Api', options, true);
		}
	} catch (error: any) {
		throw new NodeApiError(this.getNode(), error);
	}
}

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
			case 'object':
				const subProperties = hasProperties(name, value);
				const res = subProperties ? processValue(subProperties) : processValue(value)
				Object.assign(body, res);
				break;
			case 'array':
				const els: any = [];
				value.forEach((params: any) => {
					(typeof params === 'object') ? els.push(processValue(params)) : els.push(params)
				})
				Object.assign(body, { [name]: value });
				break;
			default:
				Object.assign(body, { [name]: value });
		}
	});
	return body;
}
function add(loc: any, request: any, result: any): any {
	//	if (loc && request && Object.values(request)[0]) {
	if (loc && request) {
		switch (loc) {
			case 'body':
				if (Array.isArray(request))
					result[loc] = request
				else if (!Array.isArray(result))
					Object.assign(result[loc], request)
				break;
			case 'path':
				const newPath = parse(result['path'], request);
				result[loc] = newPath;
				break;
			case 'query':
				Object.assign(result[loc], request)
				break;
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

// creates random 25-character string
function buildNonce() {
	const chars = [
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
		'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
		'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0',
		'1', '2', '3', '4', '5', '6', '7', '8', '9'
	];
	let nonce = '';
	for (let i = 0; i < 25; i++) {
		nonce += chars[Math.floor(Math.random() * chars.length)];
	}
	return nonce;
}

export function buildHeaders(method: any, url: any, headers: any, query: any = {}, accessKey: any, secretKey: any) {
	const urlObj: URL = new URL(url);
	const path = urlObj.pathname;
	const queryString = encodeURI(Object.entries(query).map(([k, v]) => k + '=' + v).join('&'))
	const authDate = (new Date()).toUTCString();
	const onNonce = buildNonce();

	if (!headers.hasOwnProperty('content-type'))
		Object.assign(headers, { 'content-type': 'application/json' });

	const hmacString = (method + '\n' + onNonce + '\n' + authDate + '\n' +
		headers['content-type'] + '\n' + path + '\n' + queryString + '\n').toLowerCase();
	const signature = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(hmacString, secretKey));

	const asign = 'On ' + accessKey + ':HmacSHA256:' + signature;

	Object.assign(headers, { 'On-Nonce': onNonce });
	Object.assign(headers, { 'Date': authDate });
	Object.assign(headers, { 'Authorization': asign });
	if (!headers.hasOwnProperty('Accept'))
		Object.assign(headers, { 'Accept': 'application/vnd.onshape.v1+json;charset=UTF-8;qs=0.1' });

	return headers;
};



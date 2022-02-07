import {
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
	IWebhookFunctions,
} from 'n8n-core';

import {
	OptionsWithUri,
} from 'request';

import {
	IDataObject,
	IPollFunctions,
	NodeApiError,
} from 'n8n-workflow';

import { buildHeaders } from './onshape';

export async function apiRequest(
	this: IExecuteFunctions | IWebhookFunctions | IHookFunctions | ILoadOptionsFunctions | IPollFunctions,
	method: string,
	resource: string,
	body: any = {},
	query: IDataObject = {},
	headers: any = {},
	uri?: string,
	option: IDataObject = {}): Promise<any> {

	option = {
		...option,
		json : option.json || true
	}

	const endpoint = 'https://cad.onshape.com/api';
	const options: OptionsWithUri = {
		method,
		qs: query,
		body,
		headers,
		uri: uri || `${endpoint}${resource}`,
		...option,
	};

	if (!Object.keys(body).length)
		delete options.body
	if (!Object.keys(query).length)
		delete options.qs;

	try {
		const authenticationMethod = this.getNodeParameter('authentication', 0) as string;
		if (authenticationMethod === 'apiKeys') {
			const credentials = await this.getCredentials('onshapeApiKeys') as IDataObject;
			options.headers = buildHeaders(options.method, options.uri, options.headers, options.qs, credentials.clientId, credentials.clientSecret);

			return await this.helpers.request!(options);
		} else {
			delete options.auth;
			//@ts-ignore
			return await this.helpers.requestOAuth2!.call(this, 'onshapeOAuth2', options, true);
		}
	} catch (error: any) {
		throw new NodeApiError(this.getNode(), error);
	}
}

import {
	OptionsWithUri
} from 'request';

import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	IDataObject,
	IHookFunctions,
	ILoadOptionsFunctions,
	IWebhookFunctions,
	NodeApiError,
	NodeOperationError,
} from 'n8n-workflow';

import { buildHeaders } from './onshape';

export async function apiRequest(
	this: IExecuteFunctions | IWebhookFunctions | IHookFunctions | ILoadOptionsFunctions,
	method: string,
	resource: string,
	body: any = {},
	query: IDataObject = {},
	headers: any = {},
	uri?: string,
	option: IDataObject = {}): Promise<any> {

	const endpoint = 'https://cad.onshape.com';

	const options: OptionsWithUri = {
		method,
		qs: query,
		body,
		headers,
		uri: uri || `${endpoint}${resource}`,
		json: true,
	};

	if (!Object.keys(body).length)
		delete options.body
	if (!Object.keys(query).length)
		delete options.qs;

	try {
		const authenticationMethod = this.getNodeParameter('authentication', 0) as string;
		if (authenticationMethod === 'apiKeys') {
			const credentials = await this.getCredentials('APIKeys') as IDataObject;
			options.headers = buildHeaders(options.method, options.uri, options.headers, options.qs, credentials.clientId, credentials.clientSecret);
			return await this.helpers.request!(options);
		} else {
			delete options.auth;
			//@ts-ignore
			return await this.helpers.requestOAuth2!.call(this, 'OAuth2', options, true);
		}
	} catch (error: any) {
		throw new NodeApiError(this.getNode(), error);
	}

}

import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as Webhook from './Webhook';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - Webhook',
	name: 'onshapewebhook',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Create and manage webhooks. - 1.157.8642-f6ac639739bc',
	version: 2,
	defaults: {
		name: 'Onshape - Webhook'
	},
	inputs: ['main'],
	outputs: ['main'],
	credentials: 
	[
		{
			name: 'onshapeApiKeysApi',
			required: true,
		},
		{
			name: 'onshapeOAuth2Api',
			required: true,
		},
	],
	properties: [
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'options',
			options: [
				{
					name: 'ApiKeys',
					value: 'apiKeys',
				},
				{
					name: 'OAuth2',
					value: 'oAuth2',
				},
			],
			default: 'apiKeys',
		},
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'hidden',
			default: 'Webhook',
			options: [
				{
					name: 'Webhook',
					description: 'Create and manage webhooks.',
					value: 'Webhook',
				},
			],
		},
	],
};

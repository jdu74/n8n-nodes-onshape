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
	description: 'Create and manage webhooks. - 1.141.3124-86273aed0a97',
	version: 1,
	defaults: {
		name: 'Onshape - Webhook'
	},
	inputs: ['main'],
	outputs: ['main'],
	credentials: 
	[
		{
			name: 'onshapeApiKeys',
			required: true,
			displayOptions: {
				show: {
					authentication: [
						'apiKeys',
					],
				},
			},
		},
		{
			name: 'onshapeOAuth2',
			required: true,
			displayOptions: {
				show: {
					authentication: [
						'oAuth2',
					],
				},
			},
		},
	],
	properties: [
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'options',
			options: [
				{
					name: 'onshapeApiKeys',
					value: 'apiKeys',
				},
				{
					name: 'onshapeOAuth2',
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
		...Webhook.descriptions
	],
};

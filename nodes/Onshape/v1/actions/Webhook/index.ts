import * as getWebhooks from './getWebhooks';
import * as createWebhook from './createWebhook';
import * as getWebhook from './getWebhook';
import * as updateWebhook from './updateWebhook';
import * as unregisterWebhook from './unregisterWebhook';
import * as pingWebhook from './pingWebhook';

import { INodeProperties } from 'n8n-workflow';

export {
	getWebhooks,
	createWebhook,
	getWebhook,
	updateWebhook,
	unregisterWebhook,
	pingWebhook,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Webhook',
				],
			},
		},
		options: [
			{
				name: 'getWebhooks',
				value: 'GET /webhooks',
				description: 'get /webhooks',
			},
			{
				name: 'createWebhook',
				value: 'POST /webhooks',
				description: 'Create a webhook, which functions like an event listener - post /webhooks',
			},
			{
				name: 'getWebhook',
				value: 'GET /webhooks/{webhookid}',
				description: 'get /webhooks/{webhookid}',
			},
			{
				name: 'updateWebhook',
				value: 'POST /webhooks/{webhookid}',
				description: 'post /webhooks/{webhookid}',
			},
			{
				name: 'unregisterWebhook',
				value: 'DELETE /webhooks/{webhookid}',
				description: 'delete /webhooks/{webhookid}',
			},
			{
				name: 'pingWebhook',
				value: 'POST /webhooks/{webhookid}/ping',
				description: 'post /webhooks/{webhookid}/ping',
			},
		],
		default: 'GET /webhooks',
		description: 'The operation to perform',
	},
	...getWebhooks.description,
	...createWebhook.description,
	...getWebhook.description,
	...updateWebhook.description,
	...unregisterWebhook.description,
	...pingWebhook.description,
];

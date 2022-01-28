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
				value: 'GET /api/webhooks',
				description: 'get /api/webhooks',
			},
			{
				name: 'createWebhook',
				value: 'POST /api/webhooks',
				description: 'Create a webhook, which functions like an event listener - post /api/webhooks',
			},
			{
				name: 'getWebhook',
				value: 'GET /api/webhooks/{webhookid}',
				description: 'get /api/webhooks/{webhookid}',
			},
			{
				name: 'updateWebhook',
				value: 'POST /api/webhooks/{webhookid}',
				description: 'post /api/webhooks/{webhookid}',
			},
			{
				name: 'unregisterWebhook',
				value: 'DELETE /api/webhooks/{webhookid}',
				description: 'delete /api/webhooks/{webhookid}',
			},
			{
				name: 'pingWebhook',
				value: 'POST /api/webhooks/{webhookid}/ping',
				description: 'post /api/webhooks/{webhookid}/ping',
			},
		],
		default: 'GET /api/webhooks',
		description: 'The operation to perform',
	},
	...getWebhooks.description,
	...createWebhook.description,
	...getWebhook.description,
	...updateWebhook.description,
	...unregisterWebhook.description,
	...pingWebhook.description,
];

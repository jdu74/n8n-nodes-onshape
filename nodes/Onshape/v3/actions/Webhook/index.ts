import * as CreateWebhook from './createWebhook';
import * as GetWebhook from './getWebhook';
import * as GetWebhooks from './getWebhooks';
import * as PingWebhook from './pingWebhook';
import * as UnregisterWebhook from './unregisterWebhook';
import * as UpdateWebhook from './updateWebhook';

import { INodeProperties } from 'n8n-workflow';

export {
	CreateWebhook,
	GetWebhook,
	GetWebhooks,
	PingWebhook,
	UnregisterWebhook,
	UpdateWebhook,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'Webhook',
				],
			},
		},
		default: 'GET /webhooks',
		options: [
			{
				name: 'createWebhook',
				value: 'POST /webhooks',
				description: 'Create a new webhook. - post /webhooks',
				action: 'Create Webhook',
			},
			{
				name: 'getWebhook',
				value: 'GET /webhooks/{webhookid}',
				description: 'Get webhook info by webhook ID. - get /webhooks/{webhookid}',
				action: 'Get Webhook',
			},
			{
				name: 'getWebhooks',
				value: 'GET /webhooks',
				description: 'Get a list of all webhooks registered by a user or company. - get /webhooks',
				action: 'Get Webhooks',
			},
			{
				name: 'pingWebhook',
				value: 'POST /webhooks/{webhookid}/ping',
				description: 'Ping a webhook. - post /webhooks/{webhookid}/ping',
				action: 'Ping Webhook',
			},
			{
				name: 'unregisterWebhook',
				value: 'DELETE /webhooks/{webhookid}',
				description: 'Unregister a webhook. - delete /webhooks/{webhookid}',
				action: 'Unregister Webhook',
			},
			{
				name: 'updateWebhook',
				value: 'POST /webhooks/{webhookid}',
				description: 'Update a webhook. - post /webhooks/{webhookid}',
				action: 'Update Webhook',
			},
		],
	},
	...CreateWebhook.description,
	...GetWebhook.description,
	...GetWebhooks.description,
	...PingWebhook.description,
	...UnregisterWebhook.description,
	...UpdateWebhook.description,
];

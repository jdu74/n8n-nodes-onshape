import * as GetWebhooks from './getWebhooks';
import * as CreateWebhook from './createWebhook';
import * as GetWebhook from './getWebhook';
import * as UpdateWebhook from './updateWebhook';
import * as UnregisterWebhook from './unregisterWebhook';
import * as PingWebhook from './pingWebhook';

import { INodeProperties } from 'n8n-workflow';

export {
	GetWebhooks,
	CreateWebhook,
	GetWebhook,
	UpdateWebhook,
	UnregisterWebhook,
	PingWebhook,
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
				description: 'Get a list of all webhooks registered by a user or company. - get /webhooks',
			},
			{
				name: 'createWebhook',
				value: 'POST /webhooks',
				description: 'Create a new webhook. - post /webhooks',
			},
			{
				name: 'getWebhook',
				value: 'GET /webhooks/{webhookid}',
				description: 'Get webhook info by webhook ID. - get /webhooks/{webhookid}',
			},
			{
				name: 'updateWebhook',
				value: 'POST /webhooks/{webhookid}',
				description: 'Update a webhook - post /webhooks/{webhookid}',
			},
			{
				name: 'unregisterWebhook',
				value: 'DELETE /webhooks/{webhookid}',
				description: 'Unregister a webhook. - delete /webhooks/{webhookid}',
			},
			{
				name: 'pingWebhook',
				value: 'POST /webhooks/{webhookid}/ping',
				description: 'Ping a webhook. - post /webhooks/{webhookid}/ping',
			},
		],
		default: 'GET /webhooks',
		description: 'The operation to perform',
	},
	...GetWebhooks.description,
	...CreateWebhook.description,
	...GetWebhook.description,
	...UpdateWebhook.description,
	...UnregisterWebhook.description,
	...PingWebhook.description,
];

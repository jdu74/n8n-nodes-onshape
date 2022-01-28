import { INodeProperties } from "n8n-workflow";

export const getWebhookDescription: INodeProperties[] = [
	{
		name: 'webhookid-string(path)',
		displayName: 'webhookid',
		description: 'webhookid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Webhook',
				],
				operation: [
					'GET /api/webhooks/{webhookid}',
				],
			},
		},
	},
];

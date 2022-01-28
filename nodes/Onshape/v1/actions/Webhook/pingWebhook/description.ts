import { INodeProperties } from "n8n-workflow";

export const pingWebhookDescription: INodeProperties[] = [
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
					'POST /api/webhooks/{webhookid}/ping',
				],
			},
		},
	},
];

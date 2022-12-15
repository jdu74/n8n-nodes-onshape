import { INodeProperties } from "n8n-workflow";

export const pingWebhookDescription: INodeProperties[] = [
	{
		displayName: 'webhookid',
		name: 'webhookid-string(path)',
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
					'POST /webhooks/{webhookid}/ping',
				],
			},
		},
	},
];

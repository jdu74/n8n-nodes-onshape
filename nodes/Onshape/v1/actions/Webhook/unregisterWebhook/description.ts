import { INodeProperties } from "n8n-workflow";

export const unregisterWebhookDescription: INodeProperties[] = [
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
					'DELETE /api/webhooks/{webhookid}',
				],
			},
		},
	},
];

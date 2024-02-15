import { INodeProperties } from "n8n-workflow";

export const UnregisterWebhookDescription: INodeProperties[] = [
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
					'DELETE /webhooks/{webhookid}',
				],
			},
		},
	},
	{
		displayName: 'additionalFields',
		name: 'additionalFields',
		description: 'additionalFields - fixedCollection',
		type: 'fixedCollection',
		default: '',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: [
					'Webhook',
				],
				operation: [
					'DELETE /webhooks/{webhookid}',
				],
			},
		},
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: 'blockNotification',
						name: 'blockNotification-boolean(query)',
						description: 'blockNotification - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

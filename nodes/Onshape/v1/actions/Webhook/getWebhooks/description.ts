import { INodeProperties } from "n8n-workflow";

export const getWebhooksDescription: INodeProperties[] = [
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
					'GET /api/webhooks',
				],
			},
		},
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				name: 'metadataValues',
				displayName: 'Metadata',
				default: '',
				values: [
					{
						name: 'company-string(query)',
						displayName: 'company',
						description: 'company - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'user-string(query)',
						displayName: 'user',
						description: 'user - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'offset-integer(query)',
						displayName: 'offset',
						description: 'offset - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						name: 'limit-integer(query)',
						displayName: 'limit',
						description: 'limit - integer (query)',
						type: 'number',
						default: 20,
					},
				],
			},
		],
	},
];

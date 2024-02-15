import { INodeProperties } from "n8n-workflow";

export const GetWebhooksDescription: INodeProperties[] = [
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
					'GET /webhooks',
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
						displayName: 'company',
						name: 'company-string(query)',
						description: 'company - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'user',
						name: 'user-string(query)',
						description: 'user - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'offset',
						name: 'offset-integer(query)',
						description: 'offset - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						displayName: 'limit',
						name: 'limit-integer(query)',
						description: 'limit - integer (query)',
						type: 'number',
						default: 20,
					},
				],
			},
		],
	},
];

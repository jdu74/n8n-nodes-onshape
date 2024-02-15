import { INodeProperties } from "n8n-workflow";

export const CancelPurchaseNewDescription: INodeProperties[] = [
	{
		displayName: 'aid',
		name: 'aid-string(path)',
		description: 'aid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Account',
				],
				operation: [
					'DELETE /accounts/{aid}/purchases/{pid}',
				],
			},
		},
	},
	{
		displayName: 'pid',
		name: 'pid-string(path)',
		description: 'pid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Account',
				],
				operation: [
					'DELETE /accounts/{aid}/purchases/{pid}',
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
					'Account',
				],
				operation: [
					'DELETE /accounts/{aid}/purchases/{pid}',
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
						displayName: 'cancelImmediately',
						name: 'cancelImmediately-boolean(query)',
						description: 'cancelImmediately - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

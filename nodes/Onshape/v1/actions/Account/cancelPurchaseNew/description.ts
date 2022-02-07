import { INodeProperties } from "n8n-workflow";

export const cancelPurchaseNewDescription: INodeProperties[] = [
	{
		name: 'aid-string(path)',
		displayName: 'aid',
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
		name: 'pid-string(path)',
		displayName: 'pid',
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
				name: 'metadataValues',
				displayName: 'Metadata',
				default: '',
				values: [
					{
						name: 'cancelImmediately-boolean(query)',
						displayName: 'cancelImmediately',
						description: 'cancelImmediately - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

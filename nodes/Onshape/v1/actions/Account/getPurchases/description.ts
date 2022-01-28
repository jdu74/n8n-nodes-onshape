import { INodeProperties } from "n8n-workflow";

export const getPurchasesDescription: INodeProperties[] = [
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
					'GET /api/accounts/purchases',
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
						name: 'all-boolean(query)',
						displayName: 'all',
						description: 'all - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'ownPurchaseOnly-boolean(query)',
						displayName: 'ownPurchaseOnly',
						description: 'ownPurchaseOnly - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

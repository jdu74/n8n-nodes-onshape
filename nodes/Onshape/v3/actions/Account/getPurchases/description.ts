import { INodeProperties } from "n8n-workflow";

export const GetPurchasesDescription: INodeProperties[] = [
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
					'GET /accounts/purchases',
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
						displayName: 'all',
						name: 'all-boolean(query)',
						description: 'all - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'ownPurchaseOnly',
						name: 'ownPurchaseOnly-boolean(query)',
						description: 'ownPurchaseOnly - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeGoDEnabledAppPurchases',
						name: 'includeGoDEnabledAppPurchases-boolean(query)',
						description: 'includeGoDEnabledAppPurchases - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

import { INodeProperties } from "n8n-workflow";

export const getPlanPurchasesDescription: INodeProperties[] = [
	{
		name: 'planId-string(path)',
		displayName: 'planId',
		description: 'planId - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Account',
				],
				operation: [
					'GET /accounts/plans/{planId}/purchases',
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
					'GET /accounts/plans/{planId}/purchases',
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

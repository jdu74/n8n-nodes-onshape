import { INodeProperties } from "n8n-workflow";

export const findCompanyDescription: INodeProperties[] = [
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
					'Company',
				],
				operation: [
					'GET /companies',
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
						name: 'uid-string(query)',
						displayName: 'uid',
						description: 'uid - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'activeOnly-boolean(query)',
						displayName: 'activeOnly',
						description: 'activeOnly - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						name: 'includeAll-boolean(query)',
						displayName: 'includeAll',
						description: 'includeAll - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

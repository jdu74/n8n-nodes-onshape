import { INodeProperties } from "n8n-workflow";

export const FindCompanyDescription: INodeProperties[] = [
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
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: 'uid',
						name: 'uid-string(query)',
						description: 'uid - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'activeOnly',
						name: 'activeOnly-boolean(query)',
						description: 'activeOnly - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						displayName: 'includeAll',
						name: 'includeAll-boolean(query)',
						description: 'includeAll - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

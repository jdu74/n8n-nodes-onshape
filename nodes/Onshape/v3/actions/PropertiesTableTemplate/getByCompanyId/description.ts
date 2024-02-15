import { INodeProperties } from "n8n-workflow";

export const GetByCompanyIdDescription: INodeProperties[] = [
	{
		displayName: 'cid',
		name: 'cid-string(path)',
		description: 'cid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'PropertiesTableTemplate',
				],
				operation: [
					'GET /tabletemplates/companies/{cid}',
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
					'PropertiesTableTemplate',
				],
				operation: [
					'GET /tabletemplates/companies/{cid}',
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
						displayName: 'templateType',
						name: 'templateType-string(query)',
						description: 'templateType - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'onlyActive',
						name: 'onlyActive-boolean(query)',
						description: 'onlyActive - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeDefaults',
						name: 'includeDefaults-boolean(query)',
						description: 'includeDefaults - boolean (query)',
						type: 'boolean',
						default: true,
					},
				],
			},
		],
	},
];

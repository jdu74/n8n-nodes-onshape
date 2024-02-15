import { INodeProperties } from "n8n-workflow";

export const GetByDocumentIdDescription: INodeProperties[] = [
	{
		displayName: 'did',
		name: 'did-string(path)',
		description: 'did - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'PropertiesTableTemplate',
				],
				operation: [
					'GET /tabletemplates/d/{did}',
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
					'GET /tabletemplates/d/{did}',
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
						default: true,
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

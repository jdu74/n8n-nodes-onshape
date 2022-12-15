import { INodeProperties } from "n8n-workflow";

export const getNamedViewsDescription: INodeProperties[] = [
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
					'Assembly',
				],
				operation: [
					'GET /assemblies/d/{did}/e/{eid}/namedViews',
				],
			},
		},
	},
	{
		displayName: 'eid',
		name: 'eid-string(path)',
		description: 'eid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Assembly',
				],
				operation: [
					'GET /assemblies/d/{did}/e/{eid}/namedViews',
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
					'Assembly',
				],
				operation: [
					'GET /assemblies/d/{did}/e/{eid}/namedViews',
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
						displayName: 'linkDocumentId',
						name: 'linkDocumentId-string(query)',
						description: 'linkDocumentId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'skipPerspective',
						name: 'skipPerspective-boolean(query)',
						description: 'skipPerspective - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						displayName: 'includeSectionCutViews',
						name: 'includeSectionCutViews-boolean(query)',
						description: 'includeSectionCutViews - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

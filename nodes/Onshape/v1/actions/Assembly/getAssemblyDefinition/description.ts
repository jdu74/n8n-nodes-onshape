import { INodeProperties } from "n8n-workflow";

export const getAssemblyDefinitionDescription: INodeProperties[] = [
	{
		name: 'did-string(path)',
		displayName: 'did',
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
					'GET /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}',
				],
			},
		},
	},
	{
		name: 'wvm-string(path)',
		displayName: 'wvm',
		description: 'wvm - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Assembly',
				],
				operation: [
					'GET /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}',
				],
			},
		},
	},
	{
		name: 'wvmid-string(path)',
		displayName: 'wvmid',
		description: 'wvmid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Assembly',
				],
				operation: [
					'GET /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}',
				],
			},
		},
	},
	{
		name: 'eid-string(path)',
		displayName: 'eid',
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
					'GET /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}',
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
					'GET /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}',
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
						name: 'linkDocumentId-string(query)',
						displayName: 'linkDocumentId',
						description: 'linkDocumentId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'configuration-string(query)',
						displayName: 'configuration',
						description: 'configuration - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'explodedViewId-string(query)',
						displayName: 'explodedViewId',
						description: 'explodedViewId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'includeMateFeatures-boolean(query)',
						displayName: 'includeMateFeatures',
						description: 'includeMateFeatures - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeNonSolids-boolean(query)',
						displayName: 'includeNonSolids',
						description: 'includeNonSolids - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeMateConnectors-boolean(query)',
						displayName: 'includeMateConnectors',
						description: 'includeMateConnectors - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

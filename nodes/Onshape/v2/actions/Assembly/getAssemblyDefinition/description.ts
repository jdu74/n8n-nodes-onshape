import { INodeProperties } from "n8n-workflow";

export const getAssemblyDefinitionDescription: INodeProperties[] = [
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}',
				],
			},
		},
	},
	{
		displayName: 'wvm',
		name: 'wvm-string(path)',
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}',
				],
			},
		},
	},
	{
		displayName: 'wvmid',
		name: 'wvmid-string(path)',
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}',
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}',
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}',
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
						displayName: 'configuration',
						name: 'configuration-string(query)',
						description: 'configuration - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'explodedViewId',
						name: 'explodedViewId-string(query)',
						description: 'explodedViewId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'includeMateFeatures',
						name: 'includeMateFeatures-boolean(query)',
						description: 'includeMateFeatures - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeNonSolids',
						name: 'includeNonSolids-boolean(query)',
						description: 'includeNonSolids - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeMateConnectors',
						name: 'includeMateConnectors-boolean(query)',
						description: 'includeMateConnectors - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'excludeSuppressed',
						name: 'excludeSuppressed-boolean(query)',
						description: 'excludeSuppressed - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

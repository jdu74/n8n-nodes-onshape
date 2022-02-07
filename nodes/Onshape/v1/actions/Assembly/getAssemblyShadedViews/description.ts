import { INodeProperties } from "n8n-workflow";

export const getAssemblyShadedViewsDescription: INodeProperties[] = [
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
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
						name: 'viewMatrix-string(query)',
						displayName: 'viewMatrix',
						description: 'viewMatrix - string (query)',
						type: 'string',
						default: 'front',
					},
					{
						name: 'outputHeight-integer(query)',
						displayName: 'outputHeight',
						description: 'outputHeight - integer (query)',
						type: 'number',
						default: 500,
					},
					{
						name: 'outputWidth-integer(query)',
						displayName: 'outputWidth',
						description: 'outputWidth - integer (query)',
						type: 'number',
						default: 500,
					},
					{
						name: 'pixelSize-number(query)',
						displayName: 'pixelSize',
						description: 'pixelSize - number (query)',
						type: 'number',
						default: 0.003,
					},
					{
						name: 'edges-string(query)',
						displayName: 'edges',
						description: 'edges - string (query)',
						type: 'string',
						default: 'show',
					},
					{
						name: 'showAllParts-boolean(query)',
						displayName: 'showAllParts',
						description: 'showAllParts - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeSurfaces-boolean(query)',
						displayName: 'includeSurfaces',
						description: 'includeSurfaces - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						name: 'useAntiAliasing-boolean(query)',
						displayName: 'useAntiAliasing',
						description: 'useAntiAliasing - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeWires-boolean(query)',
						displayName: 'includeWires',
						description: 'includeWires - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'displayStateId-string(query)',
						displayName: 'displayStateId',
						description: 'displayStateId - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
];

import { INodeProperties } from "n8n-workflow";

export const GetAssemblyShadedViewsDescription: INodeProperties[] = [
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
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
						displayName: 'viewMatrix',
						name: 'viewMatrix-string(query)',
						description: 'viewMatrix - string (query)',
						type: 'string',
						default: 'front',
					},
					{
						displayName: 'outputHeight',
						name: 'outputHeight-integer(query)',
						description: 'outputHeight - integer (query)',
						type: 'number',
						default: 500,
					},
					{
						displayName: 'outputWidth',
						name: 'outputWidth-integer(query)',
						description: 'outputWidth - integer (query)',
						type: 'number',
						default: 500,
					},
					{
						displayName: 'pixelSize',
						name: 'pixelSize-number(query)',
						description: 'pixelSize - number (query)',
						type: 'number',
						default: 0.003,
					},
					{
						displayName: 'edges',
						name: 'edges-string(query)',
						description: 'edges - string (query)',
						type: 'string',
						default: 'show',
					},
					{
						displayName: 'showAllParts',
						name: 'showAllParts-boolean(query)',
						description: 'showAllParts - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeSurfaces',
						name: 'includeSurfaces-boolean(query)',
						description: 'includeSurfaces - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						displayName: 'useAntiAliasing',
						name: 'useAntiAliasing-boolean(query)',
						description: 'useAntiAliasing - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeWires',
						name: 'includeWires-boolean(query)',
						description: 'includeWires - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'displayStateId',
						name: 'displayStateId-string(query)',
						description: 'displayStateId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'namedPositionId',
						name: 'namedPositionId-string(query)',
						description: 'namedPositionId - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
];

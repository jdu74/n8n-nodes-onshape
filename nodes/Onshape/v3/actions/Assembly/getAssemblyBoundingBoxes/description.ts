import { INodeProperties } from "n8n-workflow";

export const GetAssemblyBoundingBoxesDescription: INodeProperties[] = [
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
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
						displayName: 'includeHidden',
						name: 'includeHidden-boolean(query)',
						description: 'includeHidden - boolean (query)',
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
					{
						displayName: 'includeSketches',
						name: 'includeSketches-boolean(query)',
						description: 'includeSketches - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

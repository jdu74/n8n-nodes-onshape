import { INodeProperties } from "n8n-workflow";

export const getAssemblyBoundingBoxesDescription: INodeProperties[] = [
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
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
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
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
						name: 'includeHidden-boolean(query)',
						displayName: 'includeHidden',
						description: 'includeHidden - boolean (query)',
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
					{
						name: 'includeSketches-boolean(query)',
						displayName: 'includeSketches',
						description: 'includeSketches - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

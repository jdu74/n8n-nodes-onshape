import { INodeProperties } from "n8n-workflow";

export const exportStlDescription: INodeProperties[] = [
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
					'Part',
				],
				operation: [
					'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
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
					'Part',
				],
				operation: [
					'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
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
					'Part',
				],
				operation: [
					'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
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
					'Part',
				],
				operation: [
					'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
				],
			},
		},
	},
	{
		name: 'partid-string(path)',
		displayName: 'partid',
		description: 'partid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Part',
				],
				operation: [
					'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
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
					'Part',
				],
				operation: [
					'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
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
						name: 'mode-string(query)',
						displayName: 'mode',
						description: 'mode - string (query)',
						type: 'string',
						default: 'text',
					},
					{
						name: 'grouping-boolean(query)',
						displayName: 'grouping',
						description: 'grouping - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						name: 'scale-number(query)',
						displayName: 'scale',
						description: 'scale - number (query)',
						type: 'number',
						default: 1,
					},
					{
						name: 'units-string(query)',
						displayName: 'units',
						description: 'units - string (query)',
						type: 'string',
						default: 'inch',
					},
					{
						name: 'angleTolerance-number(query)',
						displayName: 'angleTolerance',
						description: 'angleTolerance - number (query)',
						type: 'number',
						default: '',
					},
					{
						name: 'chordTolerance-number(query)',
						displayName: 'chordTolerance',
						description: 'chordTolerance - number (query)',
						type: 'number',
						default: '',
					},
					{
						name: 'maxFacetWidth-number(query)',
						displayName: 'maxFacetWidth',
						description: 'maxFacetWidth - number (query)',
						type: 'number',
						default: '',
					},
					{
						name: 'minFacetWidth-number(query)',
						displayName: 'minFacetWidth',
						description: 'minFacetWidth - number (query)',
						type: 'number',
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
						name: 'linkDocumentId-string(query)',
						displayName: 'linkDocumentId',
						description: 'linkDocumentId - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
];

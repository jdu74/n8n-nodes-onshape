import { INodeProperties } from "n8n-workflow";

export const exportStlDescription: INodeProperties[] = [
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
					'Part',
				],
				operation: [
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
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
					'Part',
				],
				operation: [
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
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
					'Part',
				],
				operation: [
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
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
					'Part',
				],
				operation: [
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
				],
			},
		},
	},
	{
		displayName: 'partid',
		name: 'partid-string(path)',
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
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
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
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
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
						displayName: 'mode',
						name: 'mode-string(query)',
						description: 'mode - string (query)',
						type: 'string',
						default: 'text',
					},
					{
						displayName: 'grouping',
						name: 'grouping-boolean(query)',
						description: 'grouping - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						displayName: 'scale',
						name: 'scale-number(query)',
						description: 'scale - number (query)',
						type: 'number',
						default: 1,
					},
					{
						displayName: 'units',
						name: 'units-string(query)',
						description: 'units - string (query)',
						type: 'string',
						default: 'inch',
					},
					{
						displayName: 'angleTolerance',
						name: 'angleTolerance-number(query)',
						description: 'angleTolerance - number (query)',
						type: 'number',
						default: '',
					},
					{
						displayName: 'chordTolerance',
						name: 'chordTolerance-number(query)',
						description: 'chordTolerance - number (query)',
						type: 'number',
						default: '',
					},
					{
						displayName: 'maxFacetWidth',
						name: 'maxFacetWidth-number(query)',
						description: 'maxFacetWidth - number (query)',
						type: 'number',
						default: '',
					},
					{
						displayName: 'minFacetWidth',
						name: 'minFacetWidth-number(query)',
						description: 'minFacetWidth - number (query)',
						type: 'number',
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
						displayName: 'linkDocumentId',
						name: 'linkDocumentId-string(query)',
						description: 'linkDocumentId - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
];

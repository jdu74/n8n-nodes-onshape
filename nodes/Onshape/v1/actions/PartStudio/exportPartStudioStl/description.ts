import { INodeProperties } from "n8n-workflow";

export const exportPartStudioStlDescription: INodeProperties[] = [
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
					'PartStudio',
				],
				operation: [
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/stl',
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
					'PartStudio',
				],
				operation: [
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/stl',
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
					'PartStudio',
				],
				operation: [
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/stl',
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
					'PartStudio',
				],
				operation: [
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/stl',
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
					'PartStudio',
				],
				operation: [
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/stl',
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
						name: 'partIds-string(query)',
						displayName: 'partIds',
						description: 'partIds - string (query)',
						type: 'string',
						default: '',
					},
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

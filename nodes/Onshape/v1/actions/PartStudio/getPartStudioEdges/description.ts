import { INodeProperties } from "n8n-workflow";

export const getPartStudioEdgesDescription: INodeProperties[] = [
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
					'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatededges',
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
					'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatededges',
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
					'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatededges',
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
					'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatededges',
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
					'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatededges',
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
						name: 'rollbackBarIndex-integer(query)',
						displayName: 'rollbackBarIndex',
						description: 'rollbackBarIndex - integer (query)',
						type: 'number',
						default: -1,
					},
					{
						name: 'elementMicroversionId-string(query)',
						displayName: 'elementMicroversionId',
						description: 'elementMicroversionId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'partId',
						name: 'partId-array(query)',
						description: 'partId - array (query)',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'partIdProperties',
								name: 'partIdProperties',
								values: [
									{
										name: 'partId',
										displayName: 'partId',
										description: 'partId - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
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
						name: 'precomputedLevelOfDetail-string(query)',
						displayName: 'precomputedLevelOfDetail',
						description: 'precomputedLevelOfDetail - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'edgeId',
						name: 'edgeId-array(query)',
						description: 'edgeId - array (query)',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'edgeIdProperties',
								name: 'edgeIdProperties',
								values: [
									{
										name: 'edgeId',
										displayName: 'edgeId',
										description: 'edgeId - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
				],
			},
		],
	},
];

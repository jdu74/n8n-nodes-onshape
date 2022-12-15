import { INodeProperties } from "n8n-workflow";

export const getEdgesDescription: INodeProperties[] = [
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
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatededges',
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
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatededges',
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
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatededges',
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
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatededges',
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
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatededges',
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
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatededges',
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
						displayName: 'rollbackBarIndex',
						name: 'rollbackBarIndex-integer(query)',
						description: 'rollbackBarIndex - integer (query)',
						type: 'number',
						default: -1,
					},
					{
						displayName: 'elementMicroversionId',
						name: 'elementMicroversionId-string(query)',
						description: 'elementMicroversionId - string (query)',
						type: 'string',
						default: '',
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
						displayName: 'precomputedLevelOfDetail',
						name: 'precomputedLevelOfDetail-string(query)',
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
										displayName: 'edgeId',
										name: 'edgeId',
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

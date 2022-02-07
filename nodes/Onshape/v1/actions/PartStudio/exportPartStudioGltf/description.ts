import { INodeProperties } from "n8n-workflow";

export const exportPartStudioGltfDescription: INodeProperties[] = [
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
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/gltf',
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
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/gltf',
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
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/gltf',
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
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/gltf',
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
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/gltf',
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
						name: 'outputSeparateFaceNodes-boolean(query)',
						displayName: 'outputSeparateFaceNodes',
						description: 'outputSeparateFaceNodes - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'faceId',
						name: 'faceId-array(query)',
						description: 'faceId - array (query)',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'faceIdProperties',
								name: 'faceIdProperties',
								values: [
									{
										name: 'faceId',
										displayName: 'faceId',
										description: 'faceId - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						name: 'outputFaceAppearances-boolean(query)',
						displayName: 'outputFaceAppearances',
						description: 'outputFaceAppearances - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'maxFacetWidth-number(query)',
						displayName: 'maxFacetWidth',
						description: 'maxFacetWidth - number (query)',
						type: 'number',
						default: '',
					},
				],
			},
		],
	},
];

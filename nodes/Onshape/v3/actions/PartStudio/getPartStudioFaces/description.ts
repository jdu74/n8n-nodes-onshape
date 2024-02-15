import { INodeProperties } from "n8n-workflow";

export const GetPartStudioFacesDescription: INodeProperties[] = [
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
					'PartStudio',
				],
				operation: [
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatedfaces',
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
					'PartStudio',
				],
				operation: [
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatedfaces',
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
					'PartStudio',
				],
				operation: [
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatedfaces',
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
					'PartStudio',
				],
				operation: [
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatedfaces',
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
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatedfaces',
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
										displayName: 'partId',
										name: 'partId',
										description: 'partId - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
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
										displayName: 'faceId',
										name: 'faceId',
										description: 'faceId - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						displayName: 'outputFaceAppearances',
						name: 'outputFaceAppearances-boolean(query)',
						description: 'outputFaceAppearances - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'maxFacetWidth',
						name: 'maxFacetWidth-number(query)',
						description: 'maxFacetWidth - number (query)',
						type: 'number',
						default: '',
					},
					{
						displayName: 'outputVertexNormals',
						name: 'outputVertexNormals-boolean(query)',
						description: 'outputVertexNormals - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'outputFacetNormals',
						name: 'outputFacetNormals-boolean(query)',
						description: 'outputFacetNormals - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						displayName: 'outputTextureCoordinates',
						name: 'outputTextureCoordinates-boolean(query)',
						description: 'outputTextureCoordinates - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'outputIndexTable',
						name: 'outputIndexTable-boolean(query)',
						description: 'outputIndexTable - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'outputErrorFaces',
						name: 'outputErrorFaces-boolean(query)',
						description: 'outputErrorFaces - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'combineCompositePartConstituents',
						name: 'combineCompositePartConstituents-boolean(query)',
						description: 'combineCompositePartConstituents - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

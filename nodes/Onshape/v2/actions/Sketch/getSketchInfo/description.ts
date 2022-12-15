import { INodeProperties } from "n8n-workflow";

export const getSketchInfoDescription: INodeProperties[] = [
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
					'Sketch',
				],
				operation: [
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches',
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
					'Sketch',
				],
				operation: [
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches',
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
					'Sketch',
				],
				operation: [
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches',
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
					'Sketch',
				],
				operation: [
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches',
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
					'Sketch',
				],
				operation: [
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches',
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
						displayName: 'configuration',
						name: 'configuration-string(query)',
						description: 'configuration - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'sketchId',
						name: 'sketchId-array(query)',
						description: 'sketchId - array (query)',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'sketchIdProperties',
								name: 'sketchIdProperties',
								values: [
									{
										displayName: 'sketchId',
										name: 'sketchId',
										description: 'sketchId - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						displayName: 'output3D',
						name: 'output3D-boolean(query)',
						description: 'output3D - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'curvePoints',
						name: 'curvePoints-boolean(query)',
						description: 'curvePoints - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeGeometry',
						name: 'includeGeometry-boolean(query)',
						description: 'includeGeometry - boolean (query)',
						type: 'boolean',
						default: true,
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

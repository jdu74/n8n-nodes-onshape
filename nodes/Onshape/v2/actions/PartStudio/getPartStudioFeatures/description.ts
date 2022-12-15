import { INodeProperties } from "n8n-workflow";

export const getPartStudioFeaturesDescription: INodeProperties[] = [
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
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
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
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
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
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
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
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
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
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
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
						displayName: 'includeGeometryIds',
						name: 'includeGeometryIds-boolean(query)',
						description: 'includeGeometryIds - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						displayName: 'featureId',
						name: 'featureId-array(query)',
						description: 'featureId - array (query)',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'featureIdProperties',
								name: 'featureIdProperties',
								values: [
									{
										displayName: 'featureId',
										name: 'featureId',
										description: 'featureId - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						displayName: 'linkDocumentId',
						name: 'linkDocumentId-string(query)',
						description: 'linkDocumentId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'noSketchGeometry',
						name: 'noSketchGeometry-boolean(query)',
						description: 'noSketchGeometry - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

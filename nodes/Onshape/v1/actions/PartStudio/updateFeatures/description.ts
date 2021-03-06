import { INodeProperties } from "n8n-workflow";

export const updateFeaturesDescription: INodeProperties[] = [
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
					'POST /partstudios/d/{did}/w/{wid}/e/{eid}/features/updates',
				],
			},
		},
	},
	{
		name: 'wid-string(path)',
		displayName: 'wid',
		description: 'wid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'PartStudio',
				],
				operation: [
					'POST /partstudios/d/{did}/w/{wid}/e/{eid}/features/updates',
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
					'POST /partstudios/d/{did}/w/{wid}/e/{eid}/features/updates',
				],
			},
		},
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		description: 'JSON Content-Type',
		type: 'options',
		default: 'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
		displayOptions: {
			show: {
				resource: [
					'PartStudio',
				],
				operation: [
					'POST /partstudios/d/{did}/w/{wid}/e/{eid}/features/updates',
				],
			},
		},
		options: [
			{
				name: 'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
				value: 'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
			},
		],
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PartStudio',
				],
				operation: [
					'POST /partstudios/d/{did}/w/{wid}/e/{eid}/features/updates',
				],
				jsonContentType: [
					'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
				],
			},
		},
	},
	{
		displayName: 'JSON Object',
		name: 'jsonObject1-object (body)',
		description: 'jsonObject - collection',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PartStudio',
				],
				operation: [
					'POST /partstudios/d/{did}/w/{wid}/e/{eid}/features/updates',
				],
				jsonParameters: [
					false,
				],
				jsonContentType: [
					'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
				],
			},
		},
		options: [
			{
				displayName: 'features',
				name: 'features',
				description: 'features - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'featuresProperties',
						name: 'featuresProperties',
						values: [
							{
								name: 'features',
								displayName: 'features',
								description: 'features - object',
								type: 'json',
								default: '',
							},
						],
					},
				],
			},
			{
				name: 'libraryVersion',
				displayName: 'libraryVersion',
				description: 'libraryVersion - integer',
				type: 'number',
				default: 0,
			},
			{
				name: 'microversionSkew',
				displayName: 'microversionSkew',
				description: 'microversionSkew - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'rejectMicroversionSkew',
				displayName: 'rejectMicroversionSkew',
				description: 'rejectMicroversionSkew - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'serializationVersion',
				displayName: 'serializationVersion',
				description: 'serializationVersion - string',
				type: 'string',
				default: '',
			},
			{
				name: 'sourceMicroversion',
				displayName: 'sourceMicroversion',
				description: 'sourceMicroversion - string',
				type: 'string',
				default: '',
			},
			{
				name: 'updateSuppressionAttributes',
				displayName: 'updateSuppressionAttributes',
				description: 'updateSuppressionAttributes - boolean',
				type: 'boolean',
				default: false,
			},
		],
	},
	{
		displayName: 'JSON Object',
		name: 'jsonObject2-json(body)',
		description: 'jsonObject - json',
		type: 'json',
		default: '',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PartStudio',
				],
				operation: [
					'POST /partstudios/d/{did}/w/{wid}/e/{eid}/features/updates',
				],
				jsonParameters: [
					true,
				],
				jsonContentType: [
					'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
				],
			},
		},
	},
];

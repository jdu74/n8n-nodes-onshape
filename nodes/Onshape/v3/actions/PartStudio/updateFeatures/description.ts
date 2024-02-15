import { INodeProperties } from "n8n-workflow";

export const UpdateFeaturesDescription: INodeProperties[] = [
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
					'POST /partstudios/d/{did}/w/{wid}/e/{eid}/features/updates',
				],
			},
		},
	},
	{
		displayName: 'wid',
		name: 'wid-string(path)',
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
		default: 'application/json;charset=UTF-8; qs=0.09',
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
				name: 'application/json;charset=UTF-8; qs=0.09',
				value: 'application/json;charset=UTF-8; qs=0.09',
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
					'application/json;charset=UTF-8; qs=0.09',
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
					'application/json;charset=UTF-8; qs=0.09',
				],
			},
		},
		options: [
			{
				displayName: 'btType',
				name: 'btType',
				description: 'btType - string',
				type: 'string',
				default: '',
			},
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
								displayName: 'features',
								name: 'features',
								description: 'features - object',
								type: 'json',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'libraryVersion',
				name: 'libraryVersion',
				description: 'libraryVersion - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'microversionSkew',
				name: 'microversionSkew',
				description: 'microversionSkew - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'rejectMicroversionSkew',
				name: 'rejectMicroversionSkew',
				description: 'rejectMicroversionSkew - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'serializationVersion',
				name: 'serializationVersion',
				description: 'serializationVersion - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'sourceMicroversion',
				name: 'sourceMicroversion',
				description: 'sourceMicroversion - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'updateSuppressionAttributes',
				name: 'updateSuppressionAttributes',
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
					'application/json;charset=UTF-8; qs=0.09',
				],
			},
		},
	},
];

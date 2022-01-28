import { INodeProperties } from "n8n-workflow";

export const updateConfigurationDescription: INodeProperties[] = [
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
					'Element',
				],
				operation: [
					'POST /api/elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
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
					'Element',
				],
				operation: [
					'POST /api/elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
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
					'Element',
				],
				operation: [
					'POST /api/elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
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
					'Element',
				],
				operation: [
					'POST /api/elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
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
					'Element',
				],
				operation: [
					'POST /api/elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
				],
			},
		},
		options: [
			{
				name: 'application/json;charset=UTF-8; qs=0.09',
				value: 'application/json;charset=UTF-8; qs=0.09',
			},
			{
				name: 'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
				value: 'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
			},
			{
				name: 'application/vnd.onshape.v1+json;charset=UTF-8;qs=0.1',
				value: 'application/vnd.onshape.v1+json;charset=UTF-8;qs=0.1',
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
					'Element',
				],
				operation: [
					'POST /api/elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
				],
				jsonParameters: [
					true,
				],
				jsonContentType: [
					'application/json;charset=UTF-8; qs=0.09',
					'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
					'application/vnd.onshape.v1+json;charset=UTF-8;qs=0.1',
				],
			},
		},
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
					'Element',
				],
				operation: [
					'POST /api/elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
				],
				jsonContentType: [
					'application/json;charset=UTF-8; qs=0.09',
					'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
					'application/vnd.onshape.v1+json;charset=UTF-8;qs=0.1',
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
					'Element',
				],
				operation: [
					'POST /api/elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
				],
				jsonParameters: [
					false,
				],
				jsonContentType: [
					'application/json;charset=UTF-8; qs=0.09',
					'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
					'application/vnd.onshape.v1+json;charset=UTF-8;qs=0.1',
				],
			},
		},
		options: [
			{
				displayName: 'configurationParameters',
				name: 'configurationParameters',
				description: 'configurationParameters - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'configurationParametersProperties',
						name: 'configurationParametersProperties',
						values: [
							{
								displayName: 'configurationParameters',
								name: 'configurationParameters',
								description: 'configurationParameters - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
									{
										displayName: 'generatedParameterId',
										name: 'generatedParameterId',
										description: 'generatedParameterId - object',
										type: 'collection',
										default: '',
										placeholder: 'Add Field',
										options: [
											{
												name: 'nodeId',
												displayName: 'nodeId',
												description: 'nodeId - string',
												type: 'string',
												default: '',
											},
										],
									},
									{
										name: 'valid',
										displayName: 'valid',
										description: 'valid - boolean',
										type: 'boolean',
										default: false,
									},
									{
										name: 'parameterType',
										displayName: 'parameterType',
										description: 'parameterType - string',
										type: 'string',
										default: '',
									},
									{
										name: 'parameterName',
										displayName: 'parameterName',
										description: 'parameterName - string',
										type: 'string',
										default: '',
									},
									{
										name: 'parameterId',
										displayName: 'parameterId',
										description: 'parameterId - string',
										type: 'string',
										default: '',
									},
									{
										name: 'importMicroversion',
										displayName: 'importMicroversion',
										description: 'importMicroversion - string',
										type: 'string',
										default: '',
									},
									{
										name: 'nodeId',
										displayName: 'nodeId',
										description: 'nodeId - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
				],
			},
			{
				displayName: 'currentConfiguration',
				name: 'currentConfiguration',
				description: 'currentConfiguration - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'currentConfigurationProperties',
						name: 'currentConfigurationProperties',
						values: [
							{
								displayName: 'currentConfiguration',
								name: 'currentConfiguration',
								description: 'currentConfiguration - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
									{
										name: 'parameterId',
										displayName: 'parameterId',
										description: 'parameterId - string',
										type: 'string',
										default: '',
									},
									{
										name: 'importMicroversion',
										displayName: 'importMicroversion',
										description: 'importMicroversion - string',
										type: 'string',
										default: '',
									},
									{
										name: 'nodeId',
										displayName: 'nodeId',
										description: 'nodeId - string',
										type: 'string',
										default: '',
									},
								],
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
				name: 'sourceMicroversion',
				displayName: 'sourceMicroversion',
				description: 'sourceMicroversion - string',
				type: 'string',
				default: '',
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
		],
	},
];

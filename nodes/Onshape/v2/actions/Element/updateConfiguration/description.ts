import { INodeProperties } from "n8n-workflow";

export const updateConfigurationDescription: INodeProperties[] = [
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
					'Element',
				],
				operation: [
					'POST /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
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
					'Element',
				],
				operation: [
					'POST /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
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
					'Element',
				],
				operation: [
					'POST /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
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
					'Element',
				],
				operation: [
					'POST /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
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
					'POST /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
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
					'Element',
				],
				operation: [
					'POST /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
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
					'Element',
				],
				operation: [
					'POST /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
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
												displayName: 'btType',
												name: 'btType',
												description: 'btType - string',
												type: 'string',
												default: '',
											},
											{
												displayName: 'nodeId',
												name: 'nodeId',
												description: 'nodeId - string',
												type: 'string',
												default: '',
											},
										],
									},
									{
										displayName: 'importMicroversion',
										name: 'importMicroversion',
										description: 'importMicroversion - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'nodeId',
										name: 'nodeId',
										description: 'nodeId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'parameterId',
										name: 'parameterId',
										description: 'parameterId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'parameterName',
										name: 'parameterName',
										description: 'parameterName - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'parameterType',
										name: 'parameterType',
										description: 'parameterType - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'valid',
										name: 'valid',
										description: 'valid - boolean',
										type: 'boolean',
										default: false,
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
										displayName: 'importMicroversion',
										name: 'importMicroversion',
										description: 'importMicroversion - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'nodeId',
										name: 'nodeId',
										description: 'nodeId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'parameterId',
										name: 'parameterId',
										description: 'parameterId - string',
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
					'POST /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
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

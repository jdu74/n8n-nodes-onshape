import { INodeProperties } from "n8n-workflow";

export const sessionDescription: INodeProperties[] = [
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		description: 'JSON Content-Type',
		type: 'options',
		default: 'application/json;charset=UTF-8; qs=0.09',
		displayOptions: {
			show: {
				resource: [
					'User',
				],
				operation: [
					'POST /users/session',
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
					'User',
				],
				operation: [
					'POST /users/session',
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
					'User',
				],
				operation: [
					'POST /users/session',
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
				displayName: 'deviceId',
				name: 'deviceId',
				description: 'deviceId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'email',
				name: 'email',
				description: 'email - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'enableTotp',
				name: 'enableTotp',
				description: 'enableTotp - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'isRecaptchaV3',
				name: 'isRecaptchaV3',
				description: 'isRecaptchaV3 - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'password',
				name: 'password',
				description: 'password - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'randomToken',
				name: 'randomToken',
				description: 'randomToken - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'recaptchaToken',
				name: 'recaptchaToken',
				description: 'recaptchaToken - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'rememberTotp',
				name: 'rememberTotp',
				description: 'rememberTotp - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'rendererPerformanceMeasurement',
				name: 'rendererPerformanceMeasurement',
				description: 'rendererPerformanceMeasurement - object',
				type: 'collection',
				default: '',
				placeholder: 'Add Field',
				options: [
					{
						displayName: 'linesPerSecond',
						name: 'linesPerSecond',
						description: 'linesPerSecond - number',
						type: 'number',
						default: '',
					},
					{
						displayName: 'renderer',
						name: 'renderer',
						description: 'renderer - string',
						type: 'string',
						default: '',
					},
					{
						displayName: 'trianglesPerSecond',
						name: 'trianglesPerSecond',
						description: 'trianglesPerSecond - number',
						type: 'number',
						default: '',
					},
					{
						displayName: 'vendor',
						name: 'vendor',
						description: 'vendor - string',
						type: 'string',
						default: '',
					},
				],
			},
			{
				displayName: 'totp',
				name: 'totp',
				description: 'totp - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'webClientCapabilities',
				name: 'webClientCapabilities',
				description: 'webClientCapabilities - object',
				type: 'collection',
				default: '',
				placeholder: 'Add Field',
				options: [
					{
						displayName: 'angleInstancedArrays',
						name: 'angleInstancedArrays',
						description: 'angleInstancedArrays - boolean',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'compressedTextureS3tc',
						name: 'compressedTextureS3tc',
						description: 'compressedTextureS3tc - boolean',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'depthTexture',
						name: 'depthTexture',
						description: 'depthTexture - boolean',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'devicePixelRatio',
						name: 'devicePixelRatio',
						description: 'devicePixelRatio - number',
						type: 'number',
						default: '',
					},
					{
						displayName: 'drawBuffers',
						name: 'drawBuffers',
						description: 'drawBuffers - boolean',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'extTextureFilterAnisotropic',
						name: 'extTextureFilterAnisotropic',
						description: 'extTextureFilterAnisotropic - boolean',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'has3dMouse',
						name: 'has3dMouse',
						description: 'has3dMouse - boolean',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'oesElementIndexUint',
						name: 'oesElementIndexUint',
						description: 'oesElementIndexUint - boolean',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'oesStandardDerivatives',
						name: 'oesStandardDerivatives',
						description: 'oesStandardDerivatives - boolean',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'oesTextureFloat',
						name: 'oesTextureFloat',
						description: 'oesTextureFloat - boolean',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'oesTextureFloatLinear',
						name: 'oesTextureFloatLinear',
						description: 'oesTextureFloatLinear - boolean',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'oesTextureHalfFloat',
						name: 'oesTextureHalfFloat',
						description: 'oesTextureHalfFloat - boolean',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'oesTextureHalfFloatLinear',
						name: 'oesTextureHalfFloatLinear',
						description: 'oesTextureHalfFloatLinear - boolean',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'oesVertexArrayObject',
						name: 'oesVertexArrayObject',
						description: 'oesVertexArrayObject - boolean',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'renderer',
						name: 'renderer',
						description: 'renderer - string',
						type: 'string',
						default: '',
					},
					{
						displayName: 'screenHeight',
						name: 'screenHeight',
						description: 'screenHeight - integer',
						type: 'number',
						default: 0,
					},
					{
						displayName: 'screenWidth',
						name: 'screenWidth',
						description: 'screenWidth - integer',
						type: 'number',
						default: 0,
					},
					{
						displayName: 'vendor',
						name: 'vendor',
						description: 'vendor - string',
						type: 'string',
						default: '',
					},
				],
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
					'User',
				],
				operation: [
					'POST /users/session',
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

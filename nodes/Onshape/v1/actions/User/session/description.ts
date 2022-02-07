import { INodeProperties } from "n8n-workflow";

export const sessionDescription: INodeProperties[] = [
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		description: 'JSON Content-Type',
		type: 'options',
		default: 'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
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
					'User',
				],
				operation: [
					'POST /users/session',
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
					'User',
				],
				operation: [
					'POST /users/session',
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
				name: 'deviceId',
				displayName: 'deviceId',
				description: 'deviceId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'email',
				displayName: 'email',
				description: 'email - string',
				type: 'string',
				default: '',
			},
			{
				name: 'enableTotp',
				displayName: 'enableTotp',
				description: 'enableTotp - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'password',
				displayName: 'password',
				description: 'password - string',
				type: 'string',
				default: '',
			},
			{
				name: 'randomToken',
				displayName: 'randomToken',
				description: 'randomToken - string',
				type: 'string',
				default: '',
			},
			{
				name: 'rememberTotp',
				displayName: 'rememberTotp',
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
						name: 'linesPerSecond',
						displayName: 'linesPerSecond',
						description: 'linesPerSecond - number',
						type: 'number',
						default: '',
					},
					{
						name: 'renderer',
						displayName: 'renderer',
						description: 'renderer - string',
						type: 'string',
						default: '',
					},
					{
						name: 'trianglesPerSecond',
						displayName: 'trianglesPerSecond',
						description: 'trianglesPerSecond - number',
						type: 'number',
						default: '',
					},
					{
						name: 'vendor',
						displayName: 'vendor',
						description: 'vendor - string',
						type: 'string',
						default: '',
					},
				],
			},
			{
				name: 'totp',
				displayName: 'totp',
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
						name: 'angleInstancedArrays',
						displayName: 'angleInstancedArrays',
						description: 'angleInstancedArrays - boolean',
						type: 'boolean',
						default: false,
					},
					{
						name: 'compressedTextureS3tc',
						displayName: 'compressedTextureS3tc',
						description: 'compressedTextureS3tc - boolean',
						type: 'boolean',
						default: false,
					},
					{
						name: 'depthTexture',
						displayName: 'depthTexture',
						description: 'depthTexture - boolean',
						type: 'boolean',
						default: false,
					},
					{
						name: 'devicePixelRatio',
						displayName: 'devicePixelRatio',
						description: 'devicePixelRatio - number',
						type: 'number',
						default: '',
					},
					{
						name: 'drawBuffers',
						displayName: 'drawBuffers',
						description: 'drawBuffers - boolean',
						type: 'boolean',
						default: false,
					},
					{
						name: 'extTextureFilterAnisotropic',
						displayName: 'extTextureFilterAnisotropic',
						description: 'extTextureFilterAnisotropic - boolean',
						type: 'boolean',
						default: false,
					},
					{
						name: 'has3dMouse',
						displayName: 'has3dMouse',
						description: 'has3dMouse - boolean',
						type: 'boolean',
						default: false,
					},
					{
						name: 'oesElementIndexUint',
						displayName: 'oesElementIndexUint',
						description: 'oesElementIndexUint - boolean',
						type: 'boolean',
						default: false,
					},
					{
						name: 'oesStandardDerivatives',
						displayName: 'oesStandardDerivatives',
						description: 'oesStandardDerivatives - boolean',
						type: 'boolean',
						default: false,
					},
					{
						name: 'oesTextureFloat',
						displayName: 'oesTextureFloat',
						description: 'oesTextureFloat - boolean',
						type: 'boolean',
						default: false,
					},
					{
						name: 'oesTextureFloatLinear',
						displayName: 'oesTextureFloatLinear',
						description: 'oesTextureFloatLinear - boolean',
						type: 'boolean',
						default: false,
					},
					{
						name: 'oesTextureHalfFloat',
						displayName: 'oesTextureHalfFloat',
						description: 'oesTextureHalfFloat - boolean',
						type: 'boolean',
						default: false,
					},
					{
						name: 'oesTextureHalfFloatLinear',
						displayName: 'oesTextureHalfFloatLinear',
						description: 'oesTextureHalfFloatLinear - boolean',
						type: 'boolean',
						default: false,
					},
					{
						name: 'oesVertexArrayObject',
						displayName: 'oesVertexArrayObject',
						description: 'oesVertexArrayObject - boolean',
						type: 'boolean',
						default: false,
					},
					{
						name: 'renderer',
						displayName: 'renderer',
						description: 'renderer - string',
						type: 'string',
						default: '',
					},
					{
						name: 'screenHeight',
						displayName: 'screenHeight',
						description: 'screenHeight - integer',
						type: 'number',
						default: 0,
					},
					{
						name: 'screenWidth',
						displayName: 'screenWidth',
						description: 'screenWidth - integer',
						type: 'number',
						default: 0,
					},
					{
						name: 'vendor',
						displayName: 'vendor',
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
					'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
				],
			},
		},
	},
];

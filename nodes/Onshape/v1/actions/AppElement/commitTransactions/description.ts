import { INodeProperties } from "n8n-workflow";

export const commitTransactionsDescription: INodeProperties[] = [
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
					'AppElement',
				],
				operation: [
					'POST /api/appelements/d/{did}/w/{wid}/transactions',
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
					'AppElement',
				],
				operation: [
					'POST /api/appelements/d/{did}/w/{wid}/transactions',
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
					'AppElement',
				],
				operation: [
					'POST /api/appelements/d/{did}/w/{wid}/transactions',
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
				],
			},
		],
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
					'AppElement',
				],
				operation: [
					'POST /api/appelements/d/{did}/w/{wid}/transactions',
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
					'AppElement',
				],
				operation: [
					'POST /api/appelements/d/{did}/w/{wid}/transactions',
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
					'AppElement',
				],
				operation: [
					'POST /api/appelements/d/{did}/w/{wid}/transactions',
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
					'AppElement',
				],
				operation: [
					'POST /api/appelements/d/{did}/w/{wid}/transactions',
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
				name: 'description',
				displayName: 'description',
				description: 'description - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'transactionIds',
				name: 'transactionIds',
				description: 'transactionIds - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'transactionIdsProperties',
						name: 'transactionIdsProperties',
						values: [
							{
								name: 'transactionIds',
								displayName: 'transactionIds',
								description: 'transactionIds - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				name: 'allowMerge',
				displayName: 'allowMerge',
				description: 'allowMerge - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'returnError',
				displayName: 'returnError',
				description: 'returnError - boolean',
				type: 'boolean',
				default: false,
			},
		],
	},
];
import { INodeProperties } from "n8n-workflow";

export const addAttachmentDescription: INodeProperties[] = [
	{
		name: 'cid-string(path)',
		displayName: 'cid',
		description: 'cid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Comment',
				],
				operation: [
					'POST /api/comments/{cid}/attachment',
				],
			},
		},
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		description: 'JSON Content-Type',
		type: 'options',
		default: 'multipart/form-data',
		displayOptions: {
			show: {
				resource: [
					'Comment',
				],
				operation: [
					'POST /api/comments/{cid}/attachment',
				],
			},
		},
		options: [
			{
				name: 'multipart/form-data',
				value: 'multipart/form-data',
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
					'Comment',
				],
				operation: [
					'POST /api/comments/{cid}/attachment',
				],
				jsonParameters: [
					true,
				],
				jsonContentType: [
					'multipart/form-data',
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
					'Comment',
				],
				operation: [
					'POST /api/comments/{cid}/attachment',
				],
				jsonContentType: [
					'multipart/form-data',
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
					'Comment',
				],
				operation: [
					'POST /api/comments/{cid}/attachment',
				],
				jsonParameters: [
					false,
				],
				jsonContentType: [
					'multipart/form-data',
				],
			},
		},
		options: [
			{
				name: 'contentDisposition',
				displayName: 'contentDisposition',
				description: 'contentDisposition - object',
				type: 'json',
				default: '',
			},
			{
				name: 'entity',
				displayName: 'entity',
				description: 'entity - object',
				type: 'json',
				default: '',
			},
			{
				name: 'headers',
				displayName: 'headers',
				description: 'headers - object',
				type: 'json',
				default: '',
			},
			{
				displayName: 'mediaType',
				name: 'mediaType',
				description: 'mediaType - object',
				type: 'collection',
				default: '',
				placeholder: 'Add Field',
				options: [
					{
						name: 'type',
						displayName: 'type',
						description: 'type - string',
						type: 'string',
						default: '',
					},
					{
						name: 'subtype',
						displayName: 'subtype',
						description: 'subtype - string',
						type: 'string',
						default: '',
					},
					{
						name: 'parameters',
						displayName: 'parameters',
						description: 'parameters - object',
						type: 'json',
						default: '',
					},
					{
						name: 'wildcardType',
						displayName: 'wildcardType',
						description: 'wildcardType - boolean',
						type: 'boolean',
						default: false,
					},
					{
						name: 'wildcardSubtype',
						displayName: 'wildcardSubtype',
						description: 'wildcardSubtype - boolean',
						type: 'boolean',
						default: false,
					},
				],
			},
			{
				name: 'messageBodyWorkers',
				displayName: 'messageBodyWorkers',
				description: 'messageBodyWorkers - object',
				type: 'json',
				default: '',
			},
			{
				name: 'parent',
				displayName: 'parent',
				description: 'parent - object',
				type: 'json',
				default: '',
			},
			{
				name: 'providers',
				displayName: 'providers',
				description: 'providers - object',
				type: 'json',
				default: '',
			},
			{
				displayName: 'bodyParts',
				name: 'bodyParts',
				description: 'bodyParts - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'bodyPartsProperties',
						name: 'bodyPartsProperties',
						values: [
							{
								name: 'bodyParts',
								displayName: 'bodyParts',
								description: 'bodyParts - object',
								type: 'json',
								default: '',
							},
						],
					},
				],
			},
			{
				name: 'fields',
				displayName: 'fields',
				description: 'fields - object',
				type: 'json',
				default: '',
			},
			{
				name: 'parameterizedHeaders',
				displayName: 'parameterizedHeaders',
				description: 'parameterizedHeaders - object',
				type: 'json',
				default: '',
			},
		],
	},
];

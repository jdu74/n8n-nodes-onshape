import { INodeProperties } from "n8n-workflow";

export const createElementDescription: INodeProperties[] = [
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/w/{wid}',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/w/{wid}',
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
					'POST /appelements/d/{did}/w/{wid}',
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
					'POST /appelements/d/{did}/w/{wid}',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/w/{wid}',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/w/{wid}',
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
				displayName: 'description',
				name: 'description',
				description: 'description - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'formatId',
				name: 'formatId',
				description: 'formatId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'jsonTree',
				name: 'jsonTree',
				description: 'jsonTree - object',
				type: 'json',
				default: '',
			},
			{
				displayName: 'location',
				name: 'location',
				description: 'location - object',
				type: 'collection',
				default: '',
				placeholder: 'Add Field',
				options: [
					{
						displayName: 'elementId',
						name: 'elementId',
						description: 'elementId - string',
						type: 'string',
						default: '',
					},
					{
						displayName: 'position',
						name: 'position',
						description: 'position - integer',
						type: 'number',
						default: 0,
					},
				],
			},
			{
				displayName: 'name',
				name: 'name',
				description: 'name - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'subelements',
				name: 'subelements',
				description: 'subelements - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'subelementsProperties',
						name: 'subelementsProperties',
						values: [
							{
								displayName: 'subelements',
								name: 'subelements',
								description: 'subelements - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
									{
										displayName: 'baseContent',
										name: 'baseContent',
										description: 'baseContent - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'delta',
										name: 'delta',
										description: 'delta - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'subelementId',
										name: 'subelementId',
										description: 'subelementId - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/w/{wid}',
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

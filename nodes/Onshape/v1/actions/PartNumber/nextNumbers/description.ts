import { INodeProperties } from "n8n-workflow";

export const nextNumbersDescription: INodeProperties[] = [
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
					'PartNumber',
				],
				operation: [
					'POST /partnumber/nextnumbers',
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
						name: 'cid-string(query)',
						displayName: 'cid',
						description: 'cid - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'did-string(query)',
						displayName: 'did',
						description: 'did - string (query)',
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
		default: 'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
		displayOptions: {
			show: {
				resource: [
					'PartNumber',
				],
				operation: [
					'POST /partnumber/nextnumbers',
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
					'PartNumber',
				],
				operation: [
					'POST /partnumber/nextnumbers',
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
					'PartNumber',
				],
				operation: [
					'POST /partnumber/nextnumbers',
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
				displayName: 'itemPartNumbers',
				name: 'itemPartNumbers',
				description: 'itemPartNumbers - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'itemPartNumbersProperties',
						name: 'itemPartNumbersProperties',
						values: [
							{
								displayName: 'itemPartNumbers',
								name: 'itemPartNumbers',
								description: 'itemPartNumbers - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
									{
										displayName: 'categories',
										name: 'categories',
										description: 'categories - array',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true,
										},
										default: '',
										options: [
											{
												displayName: 'categoriesProperties',
												name: 'categoriesProperties',
												values: [
													{
														displayName: 'categories',
														name: 'categories',
														description: 'categories - object',
														type: 'collection',
														default: '',
														placeholder: 'Add Field',
														options: [
															{
																name: 'id',
																displayName: 'id',
																description: 'id - string',
																type: 'string',
																default: '',
															},
															{
																name: 'name',
																displayName: 'name',
																description: 'name - string',
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
										name: 'configuration',
										displayName: 'configuration',
										description: 'configuration - string',
										type: 'string',
										default: '',
									},
									{
										name: 'documentId',
										displayName: 'documentId',
										description: 'documentId - string',
										type: 'string',
										default: '',
									},
									{
										name: 'elementId',
										displayName: 'elementId',
										description: 'elementId - string',
										type: 'string',
										default: '',
									},
									{
										name: 'elementType',
										displayName: 'elementType',
										description: 'elementType - integer',
										type: 'number',
										default: 0,
									},
									{
										name: 'id',
										displayName: 'id',
										description: 'id - string',
										type: 'string',
										default: '',
									},
									{
										name: 'mimeType',
										displayName: 'mimeType',
										description: 'mimeType - string',
										type: 'string',
										default: '',
									},
									{
										name: 'partId',
										displayName: 'partId',
										description: 'partId - string',
										type: 'string',
										default: '',
									},
									{
										name: 'partNumber',
										displayName: 'partNumber',
										description: 'partNumber - string',
										type: 'string',
										default: '',
									},
									{
										name: 'versionId',
										displayName: 'versionId',
										description: 'versionId - string',
										type: 'string',
										default: '',
									},
									{
										name: 'workspaceId',
										displayName: 'workspaceId',
										description: 'workspaceId - string',
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
				displayName: 'skipPartNumbers',
				name: 'skipPartNumbers',
				description: 'skipPartNumbers - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'skipPartNumbersProperties',
						name: 'skipPartNumbersProperties',
						values: [
							{
								name: 'skipPartNumbers',
								displayName: 'skipPartNumbers',
								description: 'skipPartNumbers - string',
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
					'PartNumber',
				],
				operation: [
					'POST /partnumber/nextnumbers',
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

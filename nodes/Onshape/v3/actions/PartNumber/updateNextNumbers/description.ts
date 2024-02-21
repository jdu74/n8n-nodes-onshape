import { INodeProperties } from "n8n-workflow";

export const UpdateNextNumbersDescription: INodeProperties[] = [
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
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: 'cid',
						name: 'cid-string(query)',
						description: 'cid - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'did',
						name: 'did-string(query)',
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
		type: 'hidden',
		default: 'application/json;charset=UTF-8; qs=0.09',
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
					'PartNumber',
				],
				operation: [
					'POST /partnumber/nextnumbers',
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
					'PartNumber',
				],
				operation: [
					'POST /partnumber/nextnumbers',
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
																displayName: 'id',
																name: 'id',
																description: 'id - string',
																type: 'string',
																default: '',
															},
															{
																displayName: 'name',
																name: 'name',
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
										displayName: 'configuration',
										name: 'configuration',
										description: 'configuration - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'documentId',
										name: 'documentId',
										description: 'documentId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'elementId',
										name: 'elementId',
										description: 'elementId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'elementType',
										name: 'elementType',
										description: 'elementType - integer',
										type: 'number',
										default: 0,
									},
									{
										displayName: 'id',
										name: 'id',
										description: 'id - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'mimeType',
										name: 'mimeType',
										description: 'mimeType - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'numberSchemeResourceTypeId',
										name: 'numberSchemeResourceTypeId',
										description: 'numberSchemeResourceTypeId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'partId',
										name: 'partId',
										description: 'partId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'partNumber',
										name: 'partNumber',
										description: 'partNumber - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'versionId',
										name: 'versionId',
										description: 'versionId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'workspaceId',
										name: 'workspaceId',
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
								displayName: 'skipPartNumbers',
								name: 'skipPartNumbers',
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
					'application/json;charset=UTF-8; qs=0.09',
				],
			},
		},
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
					'application/json;charset=UTF-8; qs=0.09',
				],
			},
		},
	},
];

import { INodeProperties } from "n8n-workflow";

export const updateReleasePackageDescription: INodeProperties[] = [
	{
		name: 'rpid-string(path)',
		displayName: 'rpid',
		description: 'rpid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'ReleasePackage',
				],
				operation: [
					'POST /releasepackages/{rpid}',
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
					'ReleasePackage',
				],
				operation: [
					'POST /releasepackages/{rpid}',
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
						name: 'action-string(query)',
						displayName: 'action',
						description: 'action - string (query)',
						type: 'string',
						default: 'UPDATE',
					},
					{
						name: 'wfaction-string(query)',
						displayName: 'wfaction',
						description: 'wfaction - string (query)',
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
					'ReleasePackage',
				],
				operation: [
					'POST /releasepackages/{rpid}',
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
					'ReleasePackage',
				],
				operation: [
					'POST /releasepackages/{rpid}',
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
					'ReleasePackage',
				],
				operation: [
					'POST /releasepackages/{rpid}',
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
				name: 'empty',
				displayName: 'empty',
				description: 'empty - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'itemIds',
				name: 'itemIds',
				description: 'itemIds - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'itemIdsProperties',
						name: 'itemIdsProperties',
						values: [
							{
								name: 'itemIds',
								displayName: 'itemIds',
								description: 'itemIds - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'items',
				name: 'items',
				description: 'items - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'itemsProperties',
						name: 'itemsProperties',
						values: [
							{
								displayName: 'items',
								name: 'items',
								description: 'items - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
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
										name: 'href',
										displayName: 'href',
										description: 'href - string',
										type: 'string',
										default: '',
									},
									{
										name: 'id',
										displayName: 'id',
										description: 'id - string',
										type: 'string',
										default: '',
									},
									{
										name: 'isIncluded',
										displayName: 'isIncluded',
										description: 'isIncluded - boolean',
										type: 'boolean',
										default: false,
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
										displayName: 'properties',
										name: 'properties',
										description: 'properties - array',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true,
										},
										default: '',
										options: [
											{
												displayName: 'propertiesProperties',
												name: 'propertiesProperties',
												values: [
													{
														displayName: 'properties',
														name: 'properties',
														description: 'properties - object',
														type: 'collection',
														default: '',
														placeholder: 'Add Field',
														options: [
															{
																name: 'propertyId',
																displayName: 'propertyId',
																description: 'propertyId - string',
																type: 'string',
																default: '',
															},
															{
																name: 'value',
																displayName: 'value',
																description: 'value - object',
																type: 'json',
																default: '',
															},
														],
													},
												],
											},
										],
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
				displayName: 'properties',
				name: 'properties',
				description: 'properties - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'propertiesProperties',
						name: 'propertiesProperties',
						values: [
							{
								displayName: 'properties',
								name: 'properties',
								description: 'properties - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
									{
										name: 'propertyId',
										displayName: 'propertyId',
										description: 'propertyId - string',
										type: 'string',
										default: '',
									},
									{
										name: 'value',
										displayName: 'value',
										description: 'value - object',
										type: 'json',
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
					'ReleasePackage',
				],
				operation: [
					'POST /releasepackages/{rpid}',
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

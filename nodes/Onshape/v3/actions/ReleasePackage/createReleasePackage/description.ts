import { INodeProperties } from "n8n-workflow";

export const CreateReleasePackageDescription: INodeProperties[] = [
	{
		displayName: 'wfid',
		name: 'wfid-string(path)',
		description: 'wfid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'ReleasePackage',
				],
				operation: [
					'POST /releasepackages/release/{wfid}',
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
					'POST /releasepackages/release/{wfid}',
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
						displayName: 'debugMode',
						name: 'debugMode-boolean(query)',
						description: 'debugMode - boolean (query)',
						type: 'boolean',
						default: false,
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
					'ReleasePackage',
				],
				operation: [
					'POST /releasepackages/release/{wfid}',
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
					'ReleasePackage',
				],
				operation: [
					'POST /releasepackages/release/{wfid}',
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
					'ReleasePackage',
				],
				operation: [
					'POST /releasepackages/release/{wfid}',
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
				displayName: 'changeOrderId',
				name: 'changeOrderId',
				description: 'changeOrderId - string',
				type: 'string',
				default: '',
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
										displayName: 'href',
										name: 'href',
										description: 'href - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'id',
										name: 'id',
										description: 'id - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'isIncluded',
										name: 'isIncluded',
										description: 'isIncluded - boolean',
										type: 'boolean',
										default: false,
									},
									{
										displayName: 'partId',
										name: 'partId',
										description: 'partId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'partIdentity',
										name: 'partIdentity',
										description: 'partIdentity - string',
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
																displayName: 'propertyId',
																name: 'propertyId',
																description: 'propertyId - string',
																type: 'string',
																default: '',
															},
															{
																displayName: 'value',
																name: 'value',
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
					'POST /releasepackages/release/{wfid}',
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

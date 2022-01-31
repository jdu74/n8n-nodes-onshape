import { INodeProperties } from "n8n-workflow";

export const updatePartMetadataDescription: INodeProperties[] = [
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
					'Part',
				],
				operation: [
					'POST /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
				],
			},
		},
	},
	{
		name: 'wvm-string(path)',
		displayName: 'wvm',
		description: 'wvm - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Part',
				],
				operation: [
					'POST /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
				],
			},
		},
	},
	{
		name: 'wvmid-string(path)',
		displayName: 'wvmid',
		description: 'wvmid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Part',
				],
				operation: [
					'POST /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
				],
			},
		},
	},
	{
		name: 'eid-string(path)',
		displayName: 'eid',
		description: 'eid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Part',
				],
				operation: [
					'POST /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
				],
			},
		},
	},
	{
		name: 'partid-string(path)',
		displayName: 'partid',
		description: 'partid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Part',
				],
				operation: [
					'POST /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
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
					'Part',
				],
				operation: [
					'POST /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
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
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'Part',
				],
				operation: [
					'POST /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
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
					'Part',
				],
				operation: [
					'POST /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
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
				displayName: 'appearance',
				name: 'appearance',
				description: 'appearance - object',
				type: 'collection',
				default: '',
				placeholder: 'Add Field',
				options: [
					{
						displayName: 'color',
						name: 'color',
						description: 'color - object',
						type: 'collection',
						default: '',
						placeholder: 'Add Field',
						options: [
							{
								name: 'red',
								displayName: 'red',
								description: 'red - integer',
								type: 'number',
								default: 0,
							},
							{
								name: 'green',
								displayName: 'green',
								description: 'green - integer',
								type: 'number',
								default: 0,
							},
							{
								name: 'blue',
								displayName: 'blue',
								description: 'blue - integer',
								type: 'number',
								default: 0,
							},
						],
					},
					{
						name: 'opacity',
						displayName: 'opacity',
						description: 'opacity - integer',
						type: 'number',
						default: 0,
					},
				],
			},
			{
				name: 'applyUpdateToAllConfigurations',
				displayName: 'applyUpdateToAllConfigurations',
				description: 'applyUpdateToAllConfigurations - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'configuration',
				displayName: 'configuration',
				description: 'configuration - string',
				type: 'string',
				default: '',
			},
			{
				name: 'description',
				displayName: 'description',
				description: 'description - string',
				type: 'string',
				default: '',
			},
			{
				name: 'revision',
				displayName: 'revision',
				description: 'revision - string',
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
				name: 'elementId',
				displayName: 'elementId',
				description: 'elementId - string',
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
				name: 'project',
				displayName: 'project',
				description: 'project - string',
				type: 'string',
				default: '',
			},
			{
				name: 'vendor',
				displayName: 'vendor',
				description: 'vendor - string',
				type: 'string',
				default: '',
			},
			{
				name: 'productLine',
				displayName: 'productLine',
				description: 'productLine - string',
				type: 'string',
				default: '',
			},
			{
				name: 'title1',
				displayName: 'title1',
				description: 'title1 - string',
				type: 'string',
				default: '',
			},
			{
				name: 'title2',
				displayName: 'title2',
				description: 'title2 - string',
				type: 'string',
				default: '',
			},
			{
				name: 'title3',
				displayName: 'title3',
				description: 'title3 - string',
				type: 'string',
				default: '',
			},
			{
				name: 'connectionId',
				displayName: 'connectionId',
				description: 'connectionId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'material',
				name: 'material',
				description: 'material - object',
				type: 'collection',
				default: '',
				placeholder: 'Add Field',
				options: [
					{
						displayName: 'libraryReference',
						name: 'libraryReference',
						description: 'libraryReference - object',
						type: 'collection',
						default: '',
						placeholder: 'Add Field',
						options: [
							{
								name: 'versionId',
								displayName: 'versionId',
								description: 'versionId - string',
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
								name: 'elementMicroversionId',
								displayName: 'elementMicroversionId',
								description: 'elementMicroversionId - string',
								type: 'string',
								default: '',
							},
						],
					},
					{
						name: 'displayName',
						displayName: 'displayName',
						description: 'displayName - string',
						type: 'string',
						default: '',
					},
					{
						name: 'libraryName',
						displayName: 'libraryName',
						description: 'libraryName - string',
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
												name: 'units',
												displayName: 'units',
												description: 'units - string',
												type: 'string',
												default: '',
											},
											{
												name: 'displayName',
												displayName: 'displayName',
												description: 'displayName - string',
												type: 'string',
												default: '',
											},
											{
												name: 'description',
												displayName: 'description',
												description: 'description - string',
												type: 'string',
												default: '',
											},
											{
												name: 'category',
												displayName: 'category',
												description: 'category - string',
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
											{
												name: 'value',
												displayName: 'value',
												description: 'value - string',
												type: 'string',
												default: '',
											},
											{
												name: 'type',
												displayName: 'type',
												description: 'type - string',
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
						name: 'id',
						displayName: 'id',
						description: 'id - string',
						type: 'string',
						default: '',
					},
				],
			},
			{
				displayName: 'partIdentity',
				name: 'partIdentity',
				description: 'partIdentity - object',
				type: 'collection',
				default: '',
				placeholder: 'Add Field',
				options: [
					{
						name: 'theId',
						displayName: 'theId',
						description: 'theId - string',
						type: 'string',
						default: '',
					},
					{
						name: 'btType',
						displayName: 'btType',
						description: 'btType - string',
						type: 'string',
						default: '',
					},
				],
			},
			{
				displayName: 'customProperties',
				name: 'customProperties',
				description: 'customProperties - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'customPropertiesProperties',
						name: 'customPropertiesProperties',
						values: [
							{
								displayName: 'customProperties',
								name: 'customProperties',
								description: 'customProperties - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
									{
										name: 'name',
										displayName: 'name',
										description: 'name - string',
										type: 'string',
										default: '',
									},
									{
										name: 'value',
										displayName: 'value',
										description: 'value - string',
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
				name: 'name',
				displayName: 'name',
				description: 'name - string',
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
					'Part',
				],
				operation: [
					'POST /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
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
];

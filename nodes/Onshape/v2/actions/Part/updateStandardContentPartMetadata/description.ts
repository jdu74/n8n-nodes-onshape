import { INodeProperties } from "n8n-workflow";

export const updateStandardContentPartMetadataDescription: INodeProperties[] = [
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
					'Part',
				],
				operation: [
					'POST /parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
				],
			},
		},
	},
	{
		displayName: 'vid',
		name: 'vid-string(path)',
		description: 'vid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Part',
				],
				operation: [
					'POST /parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
				],
			},
		},
	},
	{
		displayName: 'eid',
		name: 'eid-string(path)',
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
					'POST /parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
				],
			},
		},
	},
	{
		displayName: 'otype',
		name: 'otype-string(path)',
		description: 'otype - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Part',
				],
				operation: [
					'POST /parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
				],
			},
		},
	},
	{
		displayName: 'oid',
		name: 'oid-string(path)',
		description: 'oid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Part',
				],
				operation: [
					'POST /parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
				],
			},
		},
	},
	{
		displayName: 'partid',
		name: 'partid-string(path)',
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
					'POST /parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
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
					'Part',
				],
				operation: [
					'POST /parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
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
					{
						displayName: 'includePropertyDefaults',
						name: 'includePropertyDefaults-boolean(query)',
						description: 'includePropertyDefaults - boolean (query)',
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
					'Part',
				],
				operation: [
					'POST /parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
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
					'Part',
				],
				operation: [
					'POST /parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
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
					'Part',
				],
				operation: [
					'POST /parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
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
								displayName: 'blue',
								name: 'blue',
								description: 'blue - integer',
								type: 'number',
								default: 0,
							},
							{
								displayName: 'green',
								name: 'green',
								description: 'green - integer',
								type: 'number',
								default: 0,
							},
							{
								displayName: 'red',
								name: 'red',
								description: 'red - integer',
								type: 'number',
								default: 0,
							},
						],
					},
					{
						displayName: 'opacity',
						name: 'opacity',
						description: 'opacity - integer',
						type: 'number',
						default: 0,
					},
				],
			},
			{
				displayName: 'applyUpdateToAllConfigurations',
				name: 'applyUpdateToAllConfigurations',
				description: 'applyUpdateToAllConfigurations - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'configuration',
				name: 'configuration',
				description: 'configuration - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'connectionId',
				name: 'connectionId',
				description: 'connectionId - string',
				type: 'string',
				default: '',
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
										displayName: 'name',
										name: 'name',
										description: 'name - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'value',
										name: 'value',
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
				displayName: 'description',
				name: 'description',
				description: 'description - string',
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
				displayName: 'material',
				name: 'material',
				description: 'material - object',
				type: 'collection',
				default: '',
				placeholder: 'Add Field',
				options: [
					{
						displayName: 'displayName',
						name: 'displayName',
						description: 'displayName - string',
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
						displayName: 'libraryName',
						name: 'libraryName',
						description: 'libraryName - string',
						type: 'string',
						default: '',
					},
					{
						displayName: 'libraryReference',
						name: 'libraryReference',
						description: 'libraryReference - object',
						type: 'collection',
						default: '',
						placeholder: 'Add Field',
						options: [
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
								displayName: 'elementMicroversionId',
								name: 'elementMicroversionId',
								description: 'elementMicroversionId - string',
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
												displayName: 'category',
												name: 'category',
												description: 'category - string',
												type: 'string',
												default: '',
											},
											{
												displayName: 'description',
												name: 'description',
												description: 'description - string',
												type: 'string',
												default: '',
											},
											{
												displayName: 'displayName',
												name: 'displayName',
												description: 'displayName - string',
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
											{
												displayName: 'type',
												name: 'type',
												description: 'type - string',
												type: 'string',
												default: '',
											},
											{
												displayName: 'units',
												name: 'units',
												description: 'units - string',
												type: 'string',
												default: '',
											},
											{
												displayName: 'value',
												name: 'value',
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
				displayName: 'partId',
				name: 'partId',
				description: 'partId - string',
				type: 'string',
				default: '',
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
						displayName: 'btType',
						name: 'btType',
						description: 'btType - string',
						type: 'string',
						default: '',
					},
					{
						displayName: 'theId',
						name: 'theId',
						description: 'theId - string',
						type: 'string',
						default: '',
					},
				],
			},
			{
				displayName: 'partNumber',
				name: 'partNumber',
				description: 'partNumber - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'productLine',
				name: 'productLine',
				description: 'productLine - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'project',
				name: 'project',
				description: 'project - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'revision',
				name: 'revision',
				description: 'revision - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'title1',
				name: 'title1',
				description: 'title1 - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'title2',
				name: 'title2',
				description: 'title2 - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'title3',
				name: 'title3',
				description: 'title3 - string',
				type: 'string',
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
					'POST /parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
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

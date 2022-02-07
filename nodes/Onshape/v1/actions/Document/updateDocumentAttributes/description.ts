import { INodeProperties } from "n8n-workflow";

export const updateDocumentAttributesDescription: INodeProperties[] = [
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
					'Document',
				],
				operation: [
					'POST /documents/{did}',
				],
			},
		},
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
					'Document',
				],
				operation: [
					'POST /documents/{did}',
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
					'Document',
				],
				operation: [
					'POST /documents/{did}',
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
					'Document',
				],
				operation: [
					'POST /documents/{did}',
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
				displayName: 'betaCapabilityIds',
				name: 'betaCapabilityIds',
				description: 'betaCapabilityIds - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'betaCapabilityIdsProperties',
						name: 'betaCapabilityIdsProperties',
						values: [
							{
								name: 'betaCapabilityIds',
								displayName: 'betaCapabilityIds',
								description: 'betaCapabilityIds - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				name: 'description',
				displayName: 'description',
				description: 'description - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'elements',
				name: 'elements',
				description: 'elements - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'elementsProperties',
						name: 'elementsProperties',
						values: [
							{
								displayName: 'elements',
								name: 'elements',
								description: 'elements - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
									{
										displayName: 'elementParams',
										name: 'elementParams',
										description: 'elementParams - object',
										type: 'collection',
										default: '',
										placeholder: 'Add Field',
										options: [
											{
												name: 'description',
												displayName: 'description',
												description: 'description - string',
												type: 'string',
												default: '',
											},
											{
												name: 'formatId',
												displayName: 'formatId',
												description: 'formatId - string',
												type: 'string',
												default: '',
											},
											{
												name: 'jsonTree',
												displayName: 'jsonTree',
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
														name: 'elementId',
														displayName: 'elementId',
														description: 'elementId - string',
														type: 'string',
														default: '',
													},
													{
														name: 'groupId',
														displayName: 'groupId',
														description: 'groupId - string',
														type: 'string',
														default: '',
													},
													{
														name: 'position',
														displayName: 'position',
														description: 'position - integer',
														type: 'number',
														default: 0,
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
																		name: 'baseContent',
																		displayName: 'baseContent',
																		description: 'baseContent - string',
																		type: 'string',
																		default: '',
																	},
																	{
																		name: 'delta',
																		displayName: 'delta',
																		description: 'delta - string',
																		type: 'string',
																		default: '',
																	},
																	{
																		name: 'subelementId',
																		displayName: 'subelementId',
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
										name: 'elementType',
										displayName: 'elementType',
										description: 'elementType - integer',
										type: 'number',
										default: 0,
									},
								],
							},
						],
					},
				],
			},
			{
				name: 'generateUnknownMessages',
				displayName: 'generateUnknownMessages',
				description: 'generateUnknownMessages - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'isEmptyContent',
				displayName: 'isEmptyContent',
				description: 'isEmptyContent - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'isPublic',
				displayName: 'isPublic',
				description: 'isPublic - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'name',
				displayName: 'name',
				description: 'name - string',
				type: 'string',
				default: '',
			},
			{
				name: 'notRevisionManaged',
				displayName: 'notRevisionManaged',
				description: 'notRevisionManaged - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'ownerEmail',
				displayName: 'ownerEmail',
				description: 'ownerEmail - string',
				type: 'string',
				default: '',
			},
			{
				name: 'ownerId',
				displayName: 'ownerId',
				description: 'ownerId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'ownerType',
				displayName: 'ownerType',
				description: 'ownerType - integer',
				type: 'number',
				default: 0,
			},
			{
				name: 'parentId',
				displayName: 'parentId',
				description: 'parentId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'projectId',
				displayName: 'projectId',
				description: 'projectId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'tags',
				name: 'tags',
				description: 'tags - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'tagsProperties',
						name: 'tagsProperties',
						values: [
							{
								name: 'tags',
								displayName: 'tags',
								description: 'tags - string',
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
					'Document',
				],
				operation: [
					'POST /documents/{did}',
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

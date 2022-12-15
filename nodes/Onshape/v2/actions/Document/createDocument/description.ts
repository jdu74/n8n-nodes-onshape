import { INodeProperties } from "n8n-workflow";

export const createDocumentDescription: INodeProperties[] = [
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		description: 'JSON Content-Type',
		type: 'options',
		default: 'application/json;charset=UTF-8; qs=0.09',
		displayOptions: {
			show: {
				resource: [
					'Document',
				],
				operation: [
					'POST /documents',
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
					'Document',
				],
				operation: [
					'POST /documents',
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
					'Document',
				],
				operation: [
					'POST /documents',
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
								displayName: 'betaCapabilityIds',
								name: 'betaCapabilityIds',
								description: 'betaCapabilityIds - string',
								type: 'string',
								default: '',
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
										displayName: 'elementType',
										name: 'elementType',
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
				displayName: 'generateUnknownMessages',
				name: 'generateUnknownMessages',
				description: 'generateUnknownMessages - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'isEmptyContent',
				name: 'isEmptyContent',
				description: 'isEmptyContent - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'isPublic',
				name: 'isPublic',
				description: 'isPublic - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'name',
				name: 'name',
				description: 'name - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'notRevisionManaged',
				name: 'notRevisionManaged',
				description: 'notRevisionManaged - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'ownerEmail',
				name: 'ownerEmail',
				description: 'ownerEmail - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ownerId',
				name: 'ownerId',
				description: 'ownerId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ownerType',
				name: 'ownerType',
				description: 'ownerType - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'parentId',
				name: 'parentId',
				description: 'parentId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'projectId',
				name: 'projectId',
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
								displayName: 'tags',
								name: 'tags',
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
					'POST /documents',
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

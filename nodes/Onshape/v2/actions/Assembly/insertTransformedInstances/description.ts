import { INodeProperties } from "n8n-workflow";

export const insertTransformedInstancesDescription: INodeProperties[] = [
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/transformedinstances',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/transformedinstances',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/transformedinstances',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/transformedinstances',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/transformedinstances',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/transformedinstances',
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
				displayName: 'transformGroups',
				name: 'transformGroups',
				description: 'transformGroups - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'transformGroupsProperties',
						name: 'transformGroupsProperties',
						values: [
							{
								displayName: 'transformGroups',
								name: 'transformGroups',
								description: 'transformGroups - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
									{
										displayName: 'instances',
										name: 'instances',
										description: 'instances - array',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true,
										},
										default: '',
										options: [
											{
												displayName: 'instancesProperties',
												name: 'instancesProperties',
												values: [
													{
														displayName: 'instances',
														name: 'instances',
														description: 'instances - object',
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
																displayName: 'featureId',
																name: 'featureId',
																description: 'featureId - string',
																type: 'string',
																default: '',
															},
															{
																displayName: 'includePartTypes',
																name: 'includePartTypes',
																description: 'includePartTypes - array',
																type: 'fixedCollection',
																typeOptions: {
																	multipleValues: true,
																},
																default: '',
																options: [
																	{
																		displayName: 'includePartTypesProperties',
																		name: 'includePartTypesProperties',
																		values: [
																			{
																				displayName: 'includePartTypes',
																				name: 'includePartTypes',
																				description: 'includePartTypes - string',
																				type: 'string',
																				default: '',
																			},
																		],
																	},
																],
															},
															{
																displayName: 'isAssembly',
																name: 'isAssembly',
																description: 'isAssembly - boolean',
																type: 'boolean',
																default: false,
															},
															{
																displayName: 'isHidden',
																name: 'isHidden',
																description: 'isHidden - boolean',
																type: 'boolean',
																default: false,
															},
															{
																displayName: 'isSuppressed',
																name: 'isSuppressed',
																description: 'isSuppressed - boolean',
																type: 'boolean',
																default: false,
															},
															{
																displayName: 'isWholePartStudio',
																name: 'isWholePartStudio',
																description: 'isWholePartStudio - boolean',
																type: 'boolean',
																default: false,
															},
															{
																displayName: 'microversionId',
																name: 'microversionId',
																description: 'microversionId - string',
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
																displayName: 'revision',
																name: 'revision',
																description: 'revision - string',
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
												],
											},
										],
									},
									{
										displayName: 'transform',
										name: 'transform',
										description: 'transform - array',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true,
										},
										default: '',
										options: [
											{
												displayName: 'transformProperties',
												name: 'transformProperties',
												values: [
													{
														displayName: 'transform',
														name: 'transform',
														description: 'transform - number',
														type: 'number',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/transformedinstances',
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

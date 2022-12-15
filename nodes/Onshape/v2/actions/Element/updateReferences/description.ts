import { INodeProperties } from "n8n-workflow";

export const updateReferencesDescription: INodeProperties[] = [
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
					'Element',
				],
				operation: [
					'POST /elements/d/{did}/w/{wid}/e/{eid}/updatereferences',
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
					'Element',
				],
				operation: [
					'POST /elements/d/{did}/w/{wid}/e/{eid}/updatereferences',
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
					'Element',
				],
				operation: [
					'POST /elements/d/{did}/w/{wid}/e/{eid}/updatereferences',
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
					'Element',
				],
				operation: [
					'POST /elements/d/{did}/w/{wid}/e/{eid}/updatereferences',
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
					'Element',
				],
				operation: [
					'POST /elements/d/{did}/w/{wid}/e/{eid}/updatereferences',
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
					'Element',
				],
				operation: [
					'POST /elements/d/{did}/w/{wid}/e/{eid}/updatereferences',
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
				displayName: 'connectionId',
				name: 'connectionId',
				description: 'connectionId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'editDescription',
				name: 'editDescription',
				description: 'editDescription - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'referenceUpdates',
				name: 'referenceUpdates',
				description: 'referenceUpdates - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'referenceUpdatesProperties',
						name: 'referenceUpdatesProperties',
						values: [
							{
								displayName: 'referenceUpdates',
								name: 'referenceUpdates',
								description: 'referenceUpdates - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
									{
										displayName: 'fromReference',
										name: 'fromReference',
										description: 'fromReference - object',
										type: 'collection',
										default: '',
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'apiConfiguration',
												name: 'apiConfiguration',
												description: 'apiConfiguration - string',
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
												description: 'elementType - string',
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
											{
												displayName: 'workspaceId',
												name: 'workspaceId',
												description: 'workspaceId - string',
												type: 'string',
												default: '',
											},
										],
									},
									{
										displayName: 'idsToUpdate',
										name: 'idsToUpdate',
										description: 'idsToUpdate - array',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true,
										},
										default: '',
										options: [
											{
												displayName: 'idsToUpdateProperties',
												name: 'idsToUpdateProperties',
												values: [
													{
														displayName: 'idsToUpdate',
														name: 'idsToUpdate',
														description: 'idsToUpdate - string',
														type: 'string',
														default: '',
													},
												],
											},
										],
									},
									{
										displayName: 'toReference',
										name: 'toReference',
										description: 'toReference - object',
										type: 'collection',
										default: '',
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'apiConfiguration',
												name: 'apiConfiguration',
												description: 'apiConfiguration - string',
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
												description: 'elementType - string',
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
					'Element',
				],
				operation: [
					'POST /elements/d/{did}/w/{wid}/e/{eid}/updatereferences',
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

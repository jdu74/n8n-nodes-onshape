import { INodeProperties } from "n8n-workflow";

export const updateReferencesDescription: INodeProperties[] = [
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
					'Element',
				],
				operation: [
					'POST /elements/d/{did}/w/{wid}/e/{eid}/updatereferences',
				],
			},
		},
	},
	{
		name: 'wid-string(path)',
		displayName: 'wid',
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
		name: 'eid-string(path)',
		displayName: 'eid',
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
		default: 'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
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
					'Element',
				],
				operation: [
					'POST /elements/d/{did}/w/{wid}/e/{eid}/updatereferences',
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
					'Element',
				],
				operation: [
					'POST /elements/d/{did}/w/{wid}/e/{eid}/updatereferences',
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
				name: 'connectionId',
				displayName: 'connectionId',
				description: 'connectionId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'editDescription',
				displayName: 'editDescription',
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
												name: 'apiConfiguration',
												displayName: 'apiConfiguration',
												description: 'apiConfiguration - string',
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
												description: 'elementType - string',
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
												name: 'revision',
												displayName: 'revision',
												description: 'revision - string',
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
														name: 'idsToUpdate',
														displayName: 'idsToUpdate',
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
												name: 'apiConfiguration',
												displayName: 'apiConfiguration',
												description: 'apiConfiguration - string',
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
												description: 'elementType - string',
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
												name: 'revision',
												displayName: 'revision',
												description: 'revision - string',
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
					'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
				],
			},
		},
	},
];

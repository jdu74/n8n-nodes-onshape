import { INodeProperties } from "n8n-workflow";

export const shareDocumentDescription: INodeProperties[] = [
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
					'POST /api/documents/{did}/share',
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
					'Document',
				],
				operation: [
					'POST /api/documents/{did}/share',
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
					'Document',
				],
				operation: [
					'POST /api/documents/{did}/share',
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
					'Document',
				],
				operation: [
					'POST /api/documents/{did}/share',
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
				name: 'workspaceId',
				displayName: 'workspaceId',
				description: 'workspaceId - string',
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
				name: 'documentId',
				displayName: 'documentId',
				description: 'documentId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'folderId',
				displayName: 'folderId',
				description: 'folderId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'permissionSet',
				name: 'permissionSet',
				description: 'permissionSet - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'permissionSetProperties',
						name: 'permissionSetProperties',
						values: [
							{
								name: 'permissionSet',
								displayName: 'permissionSet',
								description: 'permissionSet - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				name: 'update',
				displayName: 'update',
				description: 'update - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'encodedConfiguration',
				displayName: 'encodedConfiguration',
				description: 'encodedConfiguration - string',
				type: 'string',
				default: '',
			},
			{
				name: 'message',
				displayName: 'message',
				description: 'message - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'entries',
				name: 'entries',
				description: 'entries - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'entriesProperties',
						name: 'entriesProperties',
						values: [
							{
								displayName: 'entries',
								name: 'entries',
								description: 'entries - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
									{
										name: 'userId',
										displayName: 'userId',
										description: 'userId - string',
										type: 'string',
										default: '',
									},
									{
										name: 'email',
										displayName: 'email',
										description: 'email - string',
										type: 'string',
										default: '',
									},
									{
										name: 'companyId',
										displayName: 'companyId',
										description: 'companyId - string',
										type: 'string',
										default: '',
									},
									{
										name: 'applicationId',
										displayName: 'applicationId',
										description: 'applicationId - string',
										type: 'string',
										default: '',
									},
									{
										name: 'teamId',
										displayName: 'teamId',
										description: 'teamId - string',
										type: 'string',
										default: '',
									},
									{
										name: 'entryType',
										displayName: 'entryType',
										description: 'entryType - integer',
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
				name: 'permission',
				displayName: 'permission',
				description: 'permission - integer',
				type: 'number',
				default: 0,
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
					'POST /api/documents/{did}/share',
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

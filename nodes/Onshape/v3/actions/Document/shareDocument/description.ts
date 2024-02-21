import { INodeProperties } from "n8n-workflow";

export const ShareDocumentDescription: INodeProperties[] = [
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
					'Document',
				],
				operation: [
					'POST /documents/{did}/share',
				],
			},
		},
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		description: 'JSON Content-Type',
		type: 'hidden',
		default: 'application/json;charset=UTF-8; qs=0.09',
		displayOptions: {
			show: {
				resource: [
					'Document',
				],
				operation: [
					'POST /documents/{did}/share',
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
					'POST /documents/{did}/share',
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
					'POST /documents/{did}/share',
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
				displayName: 'encodedConfiguration',
				name: 'encodedConfiguration',
				description: 'encodedConfiguration - string',
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
										displayName: 'applicationId',
										name: 'applicationId',
										description: 'applicationId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'companyId',
										name: 'companyId',
										description: 'companyId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'email',
										name: 'email',
										description: 'email - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'entryType',
										name: 'entryType',
										description: 'entryType - integer',
										type: 'number',
										default: 0,
									},
									{
										displayName: 'teamId',
										name: 'teamId',
										description: 'teamId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'userId',
										name: 'userId',
										description: 'userId - string',
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
				displayName: 'folderId',
				name: 'folderId',
				description: 'folderId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'message',
				name: 'message',
				description: 'message - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'permission',
				name: 'permission',
				description: 'permission - integer',
				type: 'number',
				default: 0,
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
								displayName: 'permissionSet',
								name: 'permissionSet',
								description: 'permissionSet - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'update',
				name: 'update',
				description: 'update - boolean',
				type: 'boolean',
				default: false,
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
					'POST /documents/{did}/share',
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
					'POST /documents/{did}/share',
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

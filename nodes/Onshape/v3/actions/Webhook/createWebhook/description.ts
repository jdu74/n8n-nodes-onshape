import { INodeProperties } from "n8n-workflow";

export const CreateWebhookDescription: INodeProperties[] = [
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		description: 'JSON Content-Type',
		type: 'hidden',
		default: 'application/json;charset=UTF-8; qs=0.09',
		displayOptions: {
			show: {
				resource: [
					'Webhook',
				],
				operation: [
					'POST /webhooks',
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
					'Webhook',
				],
				operation: [
					'POST /webhooks',
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
					'Webhook',
				],
				operation: [
					'POST /webhooks',
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
				displayName: 'clientId',
				name: 'clientId',
				description: 'clientId - string',
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
				displayName: 'data',
				name: 'data',
				description: 'data - string',
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
				displayName: 'events',
				name: 'events',
				description: 'events - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'eventsProperties',
						name: 'eventsProperties',
						values: [
							{
								displayName: 'events',
								name: 'events',
								description: 'events - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'externalSessionId',
				name: 'externalSessionId',
				description: 'externalSessionId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'filter',
				name: 'filter',
				description: 'filter - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'folderId',
				name: 'folderId',
				description: 'folderId - string',
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
				displayName: 'isTransient',
				name: 'isTransient',
				description: 'isTransient - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'linkDocumentId',
				name: 'linkDocumentId',
				description: 'linkDocumentId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'options',
				name: 'options',
				description: 'options - object',
				type: 'collection',
				default: '',
				placeholder: 'Add Field',
				options: [
					{
						displayName: 'collapseEvents',
						name: 'collapseEvents',
						description: 'collapseEvents - boolean',
						type: 'boolean',
						default: false,
					},
				],
			},
			{
				displayName: 'partId',
				name: 'partId',
				description: 'partId - string',
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
				displayName: 'url',
				name: 'url',
				description: 'url - string',
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
					'Webhook',
				],
				operation: [
					'POST /webhooks',
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
					'Webhook',
				],
				operation: [
					'POST /webhooks',
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

import { INodeProperties } from "n8n-workflow";

export const createWebhookDescription: INodeProperties[] = [
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		description: 'JSON Content-Type',
		type: 'options',
		default: 'application/json;charset=UTF-8; qs=0.09',
		displayOptions: {
			show: {
				resource: [
					'Webhook',
				],
				operation: [
					'POST /api/webhooks',
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
					'POST /api/webhooks',
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
					'POST /api/webhooks',
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
					'Webhook',
				],
				operation: [
					'POST /api/webhooks',
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
				name: 'filter',
				displayName: 'filter',
				description: 'filter - string',
				type: 'string',
				default: '',
			},
			{
				name: 'id',
				displayName: 'id',
				description: 'id - string',
				type: 'string',
				default: '',
			},
			{
				name: 'data',
				displayName: 'data',
				description: 'data - string',
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
				name: 'url',
				displayName: 'url',
				description: 'url - string',
				type: 'string',
				default: '',
			},
			{
				name: 'userId',
				displayName: 'userId',
				description: 'userId - string',
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
				displayName: 'options',
				name: 'options',
				description: 'options - object',
				type: 'collection',
				default: '',
				placeholder: 'Add Field',
				options: [
					{
						name: 'collapseEvents',
						displayName: 'collapseEvents',
						description: 'collapseEvents - boolean',
						type: 'boolean',
						default: false,
					},
				],
			},
			{
				name: 'companyId',
				displayName: 'companyId',
				description: 'companyId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'clientId',
				displayName: 'clientId',
				description: 'clientId - string',
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
				name: 'projectId',
				displayName: 'projectId',
				description: 'projectId - string',
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
				name: 'folderId',
				displayName: 'folderId',
				description: 'folderId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'linkDocumentId',
				displayName: 'linkDocumentId',
				description: 'linkDocumentId - string',
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
								name: 'events',
								displayName: 'events',
								description: 'events - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
		],
	},
];

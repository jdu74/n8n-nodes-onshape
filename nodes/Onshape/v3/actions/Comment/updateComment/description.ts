import { INodeProperties } from "n8n-workflow";

export const UpdateCommentDescription: INodeProperties[] = [
	{
		displayName: 'cid',
		name: 'cid-string(path)',
		description: 'cid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Comment',
				],
				operation: [
					'POST /comments/{cid}',
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
					'Comment',
				],
				operation: [
					'POST /comments/{cid}',
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
					'Comment',
				],
				operation: [
					'POST /comments/{cid}',
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
					'Comment',
				],
				operation: [
					'POST /comments/{cid}',
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
				displayName: 'assemblyFeature',
				name: 'assemblyFeature',
				description: 'assemblyFeature - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'assignee',
				name: 'assignee',
				description: 'assignee - string',
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
				displayName: 'elementFeature',
				name: 'elementFeature',
				description: 'elementFeature - string',
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
				displayName: 'elementOccurrence',
				name: 'elementOccurrence',
				description: 'elementOccurrence - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'elementQuery',
				name: 'elementQuery',
				description: 'elementQuery - string',
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
				displayName: 'message',
				name: 'message',
				description: 'message - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'objectId',
				name: 'objectId',
				description: 'objectId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'objectType',
				name: 'objectType',
				description: 'objectType - integer',
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
				displayName: 'versionId',
				name: 'versionId',
				description: 'versionId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'viewData',
				name: 'viewData',
				description: 'viewData - object',
				type: 'collection',
				default: '',
				placeholder: 'Add Field',
				options: [
					{
						displayName: 'angle',
						name: 'angle',
						description: 'angle - number',
						type: 'number',
						default: '',
					},
					{
						displayName: 'cameraViewport',
						name: 'cameraViewport',
						description: 'cameraViewport - array',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'cameraViewportProperties',
								name: 'cameraViewportProperties',
								values: [
									{
										displayName: 'cameraViewport',
										name: 'cameraViewport',
										description: 'cameraViewport - number',
										type: 'number',
										default: '',
									},
								],
							},
						],
					},
					{
						displayName: 'isPerspective',
						name: 'isPerspective',
						description: 'isPerspective - boolean',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'viewMatrix',
						name: 'viewMatrix',
						description: 'viewMatrix - array',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'viewMatrixProperties',
								name: 'viewMatrixProperties',
								values: [
									{
										displayName: 'viewMatrix',
										name: 'viewMatrix',
										description: 'viewMatrix - number',
										type: 'number',
										default: '',
									},
								],
							},
						],
					},
				],
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
					'Comment',
				],
				operation: [
					'POST /comments/{cid}',
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
					'Comment',
				],
				operation: [
					'POST /comments/{cid}',
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

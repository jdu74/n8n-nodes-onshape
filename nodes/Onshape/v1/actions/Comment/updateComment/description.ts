import { INodeProperties } from "n8n-workflow";

export const updateCommentDescription: INodeProperties[] = [
	{
		name: 'cid-string(path)',
		displayName: 'cid',
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
		type: 'options',
		default: 'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
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
					'Comment',
				],
				operation: [
					'POST /comments/{cid}',
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
					'Comment',
				],
				operation: [
					'POST /comments/{cid}',
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
				name: 'assemblyFeature',
				displayName: 'assemblyFeature',
				description: 'assemblyFeature - string',
				type: 'string',
				default: '',
			},
			{
				name: 'assignee',
				displayName: 'assignee',
				description: 'assignee - string',
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
				name: 'elementFeature',
				displayName: 'elementFeature',
				description: 'elementFeature - string',
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
				name: 'elementOccurrence',
				displayName: 'elementOccurrence',
				description: 'elementOccurrence - string',
				type: 'string',
				default: '',
			},
			{
				name: 'elementQuery',
				displayName: 'elementQuery',
				description: 'elementQuery - string',
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
				name: 'message',
				displayName: 'message',
				description: 'message - string',
				type: 'string',
				default: '',
			},
			{
				name: 'objectId',
				displayName: 'objectId',
				description: 'objectId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'objectType',
				displayName: 'objectType',
				description: 'objectType - integer',
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
				name: 'versionId',
				displayName: 'versionId',
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
						name: 'angle',
						displayName: 'angle',
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
										name: 'cameraViewport',
										displayName: 'cameraViewport',
										description: 'cameraViewport - number',
										type: 'number',
										default: '',
									},
								],
							},
						],
					},
					{
						name: 'isPerspective',
						displayName: 'isPerspective',
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
										name: 'viewMatrix',
										displayName: 'viewMatrix',
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
				name: 'workspaceId',
				displayName: 'workspaceId',
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
					'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
				],
			},
		},
	},
];

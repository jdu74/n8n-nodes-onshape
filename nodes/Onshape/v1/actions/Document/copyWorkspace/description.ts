import { INodeProperties } from "n8n-workflow";

export const copyWorkspaceDescription: INodeProperties[] = [
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
					'POST /documents/{did}/workspaces/{wid}/copy',
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
					'Document',
				],
				operation: [
					'POST /documents/{did}/workspaces/{wid}/copy',
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
					'Document',
				],
				operation: [
					'POST /documents/{did}/workspaces/{wid}/copy',
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
					'Document',
				],
				operation: [
					'POST /documents/{did}/workspaces/{wid}/copy',
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
					'Document',
				],
				operation: [
					'POST /documents/{did}/workspaces/{wid}/copy',
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
								name: 'betaCapabilityIds',
								displayName: 'betaCapabilityIds',
								description: 'betaCapabilityIds - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				name: 'isPublic',
				displayName: 'isPublic',
				description: 'isPublic - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'newName',
				displayName: 'newName',
				description: 'newName - string',
				type: 'string',
				default: '',
			},
			{
				name: 'ownerId',
				displayName: 'ownerId',
				description: 'ownerId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'ownerTypeIndex',
				displayName: 'ownerTypeIndex',
				description: 'ownerTypeIndex - integer',
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
				name: 'projectId',
				displayName: 'projectId',
				description: 'projectId - string',
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
					'POST /documents/{did}/workspaces/{wid}/copy',
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

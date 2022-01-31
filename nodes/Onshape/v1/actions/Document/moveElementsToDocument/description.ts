import { INodeProperties } from "n8n-workflow";

export const moveElementsToDocumentDescription: INodeProperties[] = [
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
					'POST /api/documents/d/{did}/w/{wid}/moveelement',
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
					'POST /api/documents/d/{did}/w/{wid}/moveelement',
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
					'POST /api/documents/d/{did}/w/{wid}/moveelement',
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
					'POST /api/documents/d/{did}/w/{wid}/moveelement',
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
					'POST /api/documents/d/{did}/w/{wid}/moveelement',
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
				name: 'needNewVersion',
				displayName: 'needNewVersion',
				description: 'needNewVersion - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'isDeepCopy',
				displayName: 'isDeepCopy',
				description: 'isDeepCopy - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'isSelectivePartOut',
				displayName: 'isSelectivePartOut',
				description: 'isSelectivePartOut - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'selectedGroupIds',
				name: 'selectedGroupIds',
				description: 'selectedGroupIds - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'selectedGroupIdsProperties',
						name: 'selectedGroupIdsProperties',
						values: [
							{
								name: 'selectedGroupIds',
								displayName: 'selectedGroupIds',
								description: 'selectedGroupIds - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				name: 'anchorElementId',
				displayName: 'anchorElementId',
				description: 'anchorElementId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'generateUnknownMessages',
				displayName: 'generateUnknownMessages',
				description: 'generateUnknownMessages - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'importData',
				name: 'importData',
				description: 'importData - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'importDataProperties',
						name: 'importDataProperties',
						values: [
							{
								name: 'importData',
								displayName: 'importData',
								description: 'importData - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				name: 'sourceVersionId',
				displayName: 'sourceVersionId',
				description: 'sourceVersionId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'isCopy',
				displayName: 'isCopy',
				description: 'isCopy - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'isGroupAnchor',
				displayName: 'isGroupAnchor',
				description: 'isGroupAnchor - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'ownerEmail',
				displayName: 'ownerEmail',
				description: 'ownerEmail - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'elements',
				name: 'elements',
				description: 'elements - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'elementsProperties',
						name: 'elementsProperties',
						values: [
							{
								name: 'elements',
								displayName: 'elements',
								description: 'elements - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				name: 'description',
				displayName: 'description',
				description: 'description - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'tags',
				name: 'tags',
				description: 'tags - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'tagsProperties',
						name: 'tagsProperties',
						values: [
							{
								name: 'tags',
								displayName: 'tags',
								description: 'tags - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				name: 'ownerType',
				displayName: 'ownerType',
				description: 'ownerType - integer',
				type: 'number',
				default: 0,
			},
			{
				name: 'projectId',
				displayName: 'projectId',
				description: 'projectId - string',
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
				name: 'parentId',
				displayName: 'parentId',
				description: 'parentId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'versionName',
				displayName: 'versionName',
				description: 'versionName - string',
				type: 'string',
				default: '',
			},
			{
				name: 'isPublic',
				displayName: 'isPublic',
				description: 'isPublic - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'targetDocumentId',
				displayName: 'targetDocumentId',
				description: 'targetDocumentId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'targetWorkspaceId',
				displayName: 'targetWorkspaceId',
				description: 'targetWorkspaceId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'elementOriginalToNewMap',
				displayName: 'elementOriginalToNewMap',
				description: 'elementOriginalToNewMap - object',
				type: 'json',
				default: '',
			},
			{
				name: 'sourceDocumentId',
				displayName: 'sourceDocumentId',
				description: 'sourceDocumentId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'sourceWorkspaceId',
				displayName: 'sourceWorkspaceId',
				description: 'sourceWorkspaceId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'isNewDocument',
				displayName: 'isNewDocument',
				description: 'isNewDocument - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'name',
				displayName: 'name',
				description: 'name - string',
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
					'POST /api/documents/d/{did}/w/{wid}/moveelement',
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

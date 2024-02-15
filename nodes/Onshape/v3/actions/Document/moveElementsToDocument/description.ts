import { INodeProperties } from "n8n-workflow";

export const MoveElementsToDocumentDescription: INodeProperties[] = [
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
					'POST /documents/d/{did}/w/{wid}/moveelement',
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
					'Document',
				],
				operation: [
					'POST /documents/d/{did}/w/{wid}/moveelement',
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
					'POST /documents/d/{did}/w/{wid}/moveelement',
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
					'POST /documents/d/{did}/w/{wid}/moveelement',
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
					'POST /documents/d/{did}/w/{wid}/moveelement',
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
				displayName: 'anchorElementId',
				name: 'anchorElementId',
				description: 'anchorElementId - string',
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
				displayName: 'elementOriginalToNewMap',
				name: 'elementOriginalToNewMap',
				description: 'elementOriginalToNewMap - object',
				type: 'json',
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
								displayName: 'elements',
								name: 'elements',
								description: 'elements - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'generateUnknownMessages',
				name: 'generateUnknownMessages',
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
								displayName: 'importData',
								name: 'importData',
								description: 'importData - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'isCopy',
				name: 'isCopy',
				description: 'isCopy - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'isDeepCopy',
				name: 'isDeepCopy',
				description: 'isDeepCopy - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'isGroupAnchor',
				name: 'isGroupAnchor',
				description: 'isGroupAnchor - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'isNewDocument',
				name: 'isNewDocument',
				description: 'isNewDocument - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'isPublic',
				name: 'isPublic',
				description: 'isPublic - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'isSelectivePartOut',
				name: 'isSelectivePartOut',
				description: 'isSelectivePartOut - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'name',
				name: 'name',
				description: 'name - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'needNewVersion',
				name: 'needNewVersion',
				description: 'needNewVersion - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'ownerEmail',
				name: 'ownerEmail',
				description: 'ownerEmail - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ownerId',
				name: 'ownerId',
				description: 'ownerId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ownerType',
				name: 'ownerType',
				description: 'ownerType - integer',
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
				displayName: 'projectId',
				name: 'projectId',
				description: 'projectId - string',
				type: 'string',
				default: '',
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
								displayName: 'selectedGroupIds',
								name: 'selectedGroupIds',
								description: 'selectedGroupIds - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'sourceDocumentId',
				name: 'sourceDocumentId',
				description: 'sourceDocumentId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'sourceVersionId',
				name: 'sourceVersionId',
				description: 'sourceVersionId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'sourceWorkspaceId',
				name: 'sourceWorkspaceId',
				description: 'sourceWorkspaceId - string',
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
								displayName: 'tags',
								name: 'tags',
								description: 'tags - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'targetDocumentId',
				name: 'targetDocumentId',
				description: 'targetDocumentId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'targetWorkspaceId',
				name: 'targetWorkspaceId',
				description: 'targetWorkspaceId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'versionName',
				name: 'versionName',
				description: 'versionName - string',
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
					'POST /documents/d/{did}/w/{wid}/moveelement',
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

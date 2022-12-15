import { INodeProperties } from "n8n-workflow";

export const createWorkspaceDescription: INodeProperties[] = [
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
					'POST /documents/d/{did}/workspaces',
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
					'POST /documents/d/{did}/workspaces',
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
					'POST /documents/d/{did}/workspaces',
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
					'POST /documents/d/{did}/workspaces',
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
				displayName: 'clientInteractionMode',
				name: 'clientInteractionMode',
				description: 'clientInteractionMode - string',
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
				displayName: 'fromHistory',
				name: 'fromHistory',
				description: 'fromHistory - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'isRelease',
				name: 'isRelease',
				description: 'isRelease - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'microversionId',
				name: 'microversionId',
				description: 'microversionId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'missingBomTableTemplateId',
				name: 'missingBomTableTemplateId',
				description: 'missingBomTableTemplateId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'name',
				name: 'name',
				description: 'name - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'purpose',
				name: 'purpose',
				description: 'purpose - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'readOnly',
				name: 'readOnly',
				description: 'readOnly - boolean',
				type: 'boolean',
				default: false,
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
					'Document',
				],
				operation: [
					'POST /documents/d/{did}/workspaces',
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

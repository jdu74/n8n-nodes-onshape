import { INodeProperties } from "n8n-workflow";

export const createVersionDescription: INodeProperties[] = [
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
					'POST /documents/d/{did}/versions',
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
					'POST /documents/d/{did}/versions',
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
					'POST /documents/d/{did}/versions',
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
					'POST /documents/d/{did}/versions',
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
				name: 'clientInteractionMode',
				displayName: 'clientInteractionMode',
				description: 'clientInteractionMode - string',
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
				name: 'documentId',
				displayName: 'documentId',
				description: 'documentId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'fromHistory',
				displayName: 'fromHistory',
				description: 'fromHistory - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'isRelease',
				displayName: 'isRelease',
				description: 'isRelease - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'microversionId',
				displayName: 'microversionId',
				description: 'microversionId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'name',
				displayName: 'name',
				description: 'name - string',
				type: 'string',
				default: '',
			},
			{
				name: 'purpose',
				displayName: 'purpose',
				description: 'purpose - integer',
				type: 'number',
				default: 0,
			},
			{
				name: 'readOnly',
				displayName: 'readOnly',
				description: 'readOnly - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'versionId',
				displayName: 'versionId',
				description: 'versionId - string',
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
					'POST /documents/d/{did}/versions',
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

import { INodeProperties } from "n8n-workflow";

export const searchDescription: INodeProperties[] = [
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
					'POST /documents/search',
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
					'POST /documents/search',
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
					'POST /documents/search',
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
				name: 'documentFilter',
				displayName: 'documentFilter',
				description: 'documentFilter - integer',
				type: 'number',
				default: 0,
			},
			{
				name: 'foundIn',
				displayName: 'foundIn',
				description: 'foundIn - string',
				type: 'string',
				default: '',
			},
			{
				name: 'limit',
				displayName: 'limit',
				description: 'limit - integer',
				type: 'number',
				default: 0,
			},
			{
				name: 'luceneSyntax',
				displayName: 'luceneSyntax',
				description: 'luceneSyntax - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'offset',
				displayName: 'offset',
				description: 'offset - integer',
				type: 'number',
				default: 0,
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
				name: 'rawQuery',
				displayName: 'rawQuery',
				description: 'rawQuery - string',
				type: 'string',
				default: '',
			},
			{
				name: 'sortColumn',
				displayName: 'sortColumn',
				description: 'sortColumn - string',
				type: 'string',
				default: '',
			},
			{
				name: 'sortOrder',
				displayName: 'sortOrder',
				description: 'sortOrder - string',
				type: 'string',
				default: '',
			},
			{
				name: 'type',
				displayName: 'type',
				description: 'type - string',
				type: 'string',
				default: '',
			},
			{
				name: 'when',
				displayName: 'when',
				description: 'when - string',
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
					'POST /documents/search',
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

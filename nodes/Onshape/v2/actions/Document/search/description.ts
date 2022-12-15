import { INodeProperties } from "n8n-workflow";

export const searchDescription: INodeProperties[] = [
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
					'POST /documents/search',
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
					'POST /documents/search',
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
					'POST /documents/search',
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
				displayName: 'documentFilter',
				name: 'documentFilter',
				description: 'documentFilter - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'foundIn',
				name: 'foundIn',
				description: 'foundIn - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'limit',
				name: 'limit',
				description: 'limit - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'luceneSyntax',
				name: 'luceneSyntax',
				description: 'luceneSyntax - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'offset',
				name: 'offset',
				description: 'offset - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'ownerId',
				name: 'ownerId',
				description: 'ownerId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'parentId',
				name: 'parentId',
				description: 'parentId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'rawQuery',
				name: 'rawQuery',
				description: 'rawQuery - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'sortColumn',
				name: 'sortColumn',
				description: 'sortColumn - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'sortOrder',
				name: 'sortOrder',
				description: 'sortOrder - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'type',
				name: 'type',
				description: 'type - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'when',
				name: 'when',
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
					'application/json;charset=UTF-8; qs=0.09',
				],
			},
		},
	},
];

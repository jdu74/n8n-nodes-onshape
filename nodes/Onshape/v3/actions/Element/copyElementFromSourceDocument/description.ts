import { INodeProperties } from "n8n-workflow";

export const CopyElementFromSourceDocumentDescription: INodeProperties[] = [
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
					'Element',
				],
				operation: [
					'POST /elements/copyelement/{did}/workspace/{wid}',
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
					'Element',
				],
				operation: [
					'POST /elements/copyelement/{did}/workspace/{wid}',
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
					'Element',
				],
				operation: [
					'POST /elements/copyelement/{did}/workspace/{wid}',
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
					'Element',
				],
				operation: [
					'POST /elements/copyelement/{did}/workspace/{wid}',
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
					'Element',
				],
				operation: [
					'POST /elements/copyelement/{did}/workspace/{wid}',
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
				displayName: 'documentIdSource',
				name: 'documentIdSource',
				description: 'documentIdSource - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'elementIdSource',
				name: 'elementIdSource',
				description: 'elementIdSource - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'isGroupAnchor',
				name: 'isGroupAnchor',
				description: 'isGroupAnchor - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'workspaceIdSource',
				name: 'workspaceIdSource',
				description: 'workspaceIdSource - string',
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
					'Element',
				],
				operation: [
					'POST /elements/copyelement/{did}/workspace/{wid}',
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
					'Element',
				],
				operation: [
					'POST /elements/copyelement/{did}/workspace/{wid}',
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

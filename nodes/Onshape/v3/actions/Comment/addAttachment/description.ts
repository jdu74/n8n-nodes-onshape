import { INodeProperties } from "n8n-workflow";

export const AddAttachmentDescription: INodeProperties[] = [
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
					'POST /comments/{cid}/attachment',
				],
			},
		},
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		description: 'JSON Content-Type',
		type: 'hidden',
		default: 'multipart/form-data',
		displayOptions: {
			show: {
				resource: [
					'Comment',
				],
				operation: [
					'POST /comments/{cid}/attachment',
				],
			},
		},
		options: [
			{
				name: 'multipart/form-data',
				value: 'multipart/form-data',
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
					'POST /comments/{cid}/attachment',
				],
				jsonContentType: [
					'multipart/form-data',
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
					'POST /comments/{cid}/attachment',
				],
				jsonParameters: [
					false,
				],
				jsonContentType: [
					'multipart/form-data',
				],
			},
		},
		options: [
			{
				displayName: 'file',
				name: 'file',
				description: 'file - object',
				type: 'json',
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
					'POST /comments/{cid}/attachment',
				],
				jsonParameters: [
					true,
				],
				jsonContentType: [
					'multipart/form-data',
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
					'POST /comments/{cid}/attachment',
				],
				jsonParameters: [
					true,
				],
				jsonContentType: [
					'multipart/form-data',
				],
			},
		},
	},
];

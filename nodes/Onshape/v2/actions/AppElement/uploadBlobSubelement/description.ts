import { INodeProperties } from "n8n-workflow";

export const uploadBlobSubelementDescription: INodeProperties[] = [
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
				],
			},
		},
	},
	{
		displayName: 'eid',
		name: 'eid-string(path)',
		description: 'eid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
				],
			},
		},
	},
	{
		displayName: 'bid',
		name: 'bid-string(path)',
		description: 'bid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
				],
			},
		},
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		description: 'JSON Content-Type',
		type: 'options',
		default: 'multipart/form-data',
		displayOptions: {
			show: {
				resource: [
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
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
				displayName: 'transactionId',
				name: 'transactionId',
				description: 'transactionId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'parentChangeId',
				name: 'parentChangeId',
				description: 'parentChangeId - string',
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
				displayName: 'file',
				name: 'file',
				description: 'file - binary',
				type: 'string',
				default: 'data',
			},
			{
				displayName: 'fileContentLength',
				name: 'fileContentLength',
				description: 'fileContentLength - integer',
				type: 'number',
				default: -1,
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
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

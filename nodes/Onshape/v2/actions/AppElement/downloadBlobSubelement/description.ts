import { INodeProperties } from "n8n-workflow";

export const downloadBlobSubelementDescription: INodeProperties[] = [
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
					'GET /appelements/d/{did}/{vm}/{vmid}/e/{eid}/blob/{bid}',
				],
			},
		},
	},
	{
		displayName: 'vm',
		name: 'vm-string(path)',
		description: 'vm - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'AppElement',
				],
				operation: [
					'GET /appelements/d/{did}/{vm}/{vmid}/e/{eid}/blob/{bid}',
				],
			},
		},
	},
	{
		displayName: 'vmid',
		name: 'vmid-string(path)',
		description: 'vmid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'AppElement',
				],
				operation: [
					'GET /appelements/d/{did}/{vm}/{vmid}/e/{eid}/blob/{bid}',
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
					'GET /appelements/d/{did}/{vm}/{vmid}/e/{eid}/blob/{bid}',
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
					'GET /appelements/d/{did}/{vm}/{vmid}/e/{eid}/blob/{bid}',
				],
			},
		},
	},
	{
		displayName: 'additionalFields',
		name: 'additionalFields',
		description: 'additionalFields - fixedCollection',
		type: 'fixedCollection',
		default: '',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: [
					'AppElement',
				],
				operation: [
					'GET /appelements/d/{did}/{vm}/{vmid}/e/{eid}/blob/{bid}',
				],
			},
		},
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: 'contentDisposition',
						name: 'contentDisposition-string(query)',
						description: 'contentDisposition - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'If-None-Match',
						name: 'If-None-Match-string(header)',
						description: 'If-None-Match - string (header)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'transactionId',
						name: 'transactionId-string(query)',
						description: 'transactionId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'changeId',
						name: 'changeId-string(query)',
						description: 'changeId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'linkDocumentId',
						name: 'linkDocumentId-string(query)',
						description: 'linkDocumentId - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
];

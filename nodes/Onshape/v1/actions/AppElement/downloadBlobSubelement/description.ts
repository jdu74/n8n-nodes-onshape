import { INodeProperties } from "n8n-workflow";

export const downloadBlobSubelementDescription: INodeProperties[] = [
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
					'AppElement',
				],
				operation: [
					'GET /appelements/d/{did}/{vm}/{vmid}/e/{eid}/blob/{bid}',
				],
			},
		},
	},
	{
		name: 'vm-string(path)',
		displayName: 'vm',
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
		name: 'vmid-string(path)',
		displayName: 'vmid',
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
		name: 'eid-string(path)',
		displayName: 'eid',
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
		name: 'bid-string(path)',
		displayName: 'bid',
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
				name: 'metadataValues',
				displayName: 'Metadata',
				default: '',
				values: [
					{
						name: 'contentDisposition-string(query)',
						displayName: 'contentDisposition',
						description: 'contentDisposition - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'If-None-Match-string(header)',
						displayName: 'If-None-Match',
						description: 'If-None-Match - string (header)',
						type: 'string',
						default: '',
					},
					{
						name: 'transactionId-string(query)',
						displayName: 'transactionId',
						description: 'transactionId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'changeId-string(query)',
						displayName: 'changeId',
						description: 'changeId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'linkDocumentId-string(query)',
						displayName: 'linkDocumentId',
						description: 'linkDocumentId - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
];

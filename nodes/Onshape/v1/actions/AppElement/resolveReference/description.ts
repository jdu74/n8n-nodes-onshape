import { INodeProperties } from "n8n-workflow";

export const resolveReferenceDescription: INodeProperties[] = [
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
					'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
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
					'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				],
			},
		},
	},
	{
		name: 'wvm-string(path)',
		displayName: 'wvm',
		description: 'wvm - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'AppElement',
				],
				operation: [
					'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				],
			},
		},
	},
	{
		name: 'wvmid-string(path)',
		displayName: 'wvmid',
		description: 'wvmid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'AppElement',
				],
				operation: [
					'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				],
			},
		},
	},
	{
		name: 'rid-string(path)',
		displayName: 'rid',
		description: 'rid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'AppElement',
				],
				operation: [
					'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
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
					'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
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
						name: 'transactionId-string(query)',
						displayName: 'transactionId',
						description: 'transactionId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'parentChangeId-string(query)',
						displayName: 'parentChangeId',
						description: 'parentChangeId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'includeInternal-boolean(query)',
						displayName: 'includeInternal',
						description: 'includeInternal - boolean (query)',
						type: 'boolean',
						default: false,
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

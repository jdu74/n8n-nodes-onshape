import { INodeProperties } from "n8n-workflow";

export const getSubelementIdsDescription: INodeProperties[] = [
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
					'GET /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/ids',
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
					'GET /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/ids',
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
					'GET /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/ids',
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
					'GET /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/ids',
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
					'GET /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/ids',
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
						name: 'changeId-string(query)',
						displayName: 'changeId',
						description: 'changeId - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
];

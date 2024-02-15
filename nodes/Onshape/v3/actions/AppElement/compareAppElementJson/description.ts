import { INodeProperties } from "n8n-workflow";

export const CompareAppElementJsonDescription: INodeProperties[] = [
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
					'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
				],
			},
		},
	},
	{
		displayName: 'wvm',
		name: 'wvm-string(path)',
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
					'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
				],
			},
		},
	},
	{
		displayName: 'wvmid',
		name: 'wvmid-string(path)',
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
					'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
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
					'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
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
					'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
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
						displayName: 'workspaceId',
						name: 'workspaceId-string(query)',
						description: 'workspaceId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'versionId',
						name: 'versionId-string(query)',
						description: 'versionId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'microversionId',
						name: 'microversionId-string(query)',
						description: 'microversionId - string (query)',
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
					{
						displayName: 'jsonDifferenceFormat',
						name: 'jsonDifferenceFormat-string(query)',
						description: 'jsonDifferenceFormat - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
];

import { INodeProperties } from "n8n-workflow";

export const decodeConfigurationDescription: INodeProperties[] = [
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
					'Element',
				],
				operation: [
					'GET /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configurationencodings/{cid}',
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
					'Element',
				],
				operation: [
					'GET /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configurationencodings/{cid}',
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
					'Element',
				],
				operation: [
					'GET /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configurationencodings/{cid}',
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
					'Element',
				],
				operation: [
					'GET /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configurationencodings/{cid}',
				],
			},
		},
	},
	{
		name: 'cid-string(path)',
		displayName: 'cid',
		description: 'cid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Element',
				],
				operation: [
					'GET /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configurationencodings/{cid}',
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
					'Element',
				],
				operation: [
					'GET /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configurationencodings/{cid}',
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
						name: 'linkDocumentId-string(query)',
						displayName: 'linkDocumentId',
						description: 'linkDocumentId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'includeDisplay-boolean(query)',
						displayName: 'includeDisplay',
						description: 'includeDisplay - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'configurationIsId-boolean(query)',
						displayName: 'configurationIsId',
						description: 'configurationIsId - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

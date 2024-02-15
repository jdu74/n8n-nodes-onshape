import { INodeProperties } from "n8n-workflow";

export const DecodeConfigurationDescription: INodeProperties[] = [
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
					'GET /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configurationencodings/{cid}',
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
					'Element',
				],
				operation: [
					'GET /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configurationencodings/{cid}',
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
					'Element',
				],
				operation: [
					'GET /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configurationencodings/{cid}',
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
					'Element',
				],
				operation: [
					'GET /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configurationencodings/{cid}',
				],
			},
		},
	},
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
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: 'linkDocumentId',
						name: 'linkDocumentId-string(query)',
						description: 'linkDocumentId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'includeDisplay',
						name: 'includeDisplay-boolean(query)',
						description: 'includeDisplay - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'configurationIsId',
						name: 'configurationIsId-boolean(query)',
						description: 'configurationIsId - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

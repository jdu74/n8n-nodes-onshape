import { INodeProperties } from "n8n-workflow";

export const GetWmvePsMetadataDescription: INodeProperties[] = [
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
					'Metadata',
				],
				operation: [
					'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/p',
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
					'Metadata',
				],
				operation: [
					'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/p',
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
					'Metadata',
				],
				operation: [
					'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/p',
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
					'Metadata',
				],
				operation: [
					'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/p',
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
					'Metadata',
				],
				operation: [
					'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/p',
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
						displayName: 'configuration',
						name: 'configuration-string(query)',
						description: 'configuration - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'inferMetadataOwner',
						name: 'inferMetadataOwner-boolean(query)',
						description: 'inferMetadataOwner - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeComputedProperties',
						name: 'includeComputedProperties-boolean(query)',
						description: 'includeComputedProperties - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						displayName: 'includeComputedAssemblyProperties',
						name: 'includeComputedAssemblyProperties-boolean(query)',
						description: 'includeComputedAssemblyProperties - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'thumbnail',
						name: 'thumbnail-boolean(query)',
						description: 'thumbnail - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

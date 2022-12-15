import { INodeProperties } from "n8n-workflow";

export const getWMVEPMetadataDescription: INodeProperties[] = [
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
					'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
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
					'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
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
					'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
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
					'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
				],
			},
		},
	},
	{
		displayName: 'iden',
		name: 'iden-string(path)',
		description: 'iden - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Metadata',
				],
				operation: [
					'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
				],
			},
		},
	},
	{
		displayName: 'pid',
		name: 'pid-string(path)',
		description: 'pid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Metadata',
				],
				operation: [
					'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
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
					'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
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
						displayName: 'rollbackBarIndex',
						name: 'rollbackBarIndex-integer(query)',
						description: 'rollbackBarIndex - integer (query)',
						type: 'number',
						default: -1,
					},
					{
						displayName: 'elementMicroversionId',
						name: 'elementMicroversionId-string(query)',
						description: 'elementMicroversionId - string (query)',
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

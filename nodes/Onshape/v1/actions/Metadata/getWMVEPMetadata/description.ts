import { INodeProperties } from "n8n-workflow";

export const getWMVEPMetadataDescription: INodeProperties[] = [
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
					'Metadata',
				],
				operation: [
					'GET /api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
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
					'Metadata',
				],
				operation: [
					'GET /api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
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
					'Metadata',
				],
				operation: [
					'GET /api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
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
					'Metadata',
				],
				operation: [
					'GET /api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
				],
			},
		},
	},
	{
		name: 'iden-string(path)',
		displayName: 'iden',
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
					'GET /api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
				],
			},
		},
	},
	{
		name: 'partid-string(path)',
		displayName: 'partid',
		description: 'partid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Metadata',
				],
				operation: [
					'GET /api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
				],
			},
		},
	},
	{
		name: 'pid-string(path)',
		displayName: 'pid',
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
					'GET /api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
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
					'GET /api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
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
						name: 'configuration-string(query)',
						displayName: 'configuration',
						description: 'configuration - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'rollbackBarIndex-integer(query)',
						displayName: 'rollbackBarIndex',
						description: 'rollbackBarIndex - integer (query)',
						type: 'number',
						default: -1,
					},
					{
						name: 'elementMicroversionId-string(query)',
						displayName: 'elementMicroversionId',
						description: 'elementMicroversionId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'inferMetadataOwner-boolean(query)',
						displayName: 'inferMetadataOwner',
						description: 'inferMetadataOwner - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeComputedProperties-boolean(query)',
						displayName: 'includeComputedProperties',
						description: 'includeComputedProperties - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						name: 'thumbnail-boolean(query)',
						displayName: 'thumbnail',
						description: 'thumbnail - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

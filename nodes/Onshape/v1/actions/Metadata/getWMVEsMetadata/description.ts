import { INodeProperties } from "n8n-workflow";

export const getWMVEsMetadataDescription: INodeProperties[] = [
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
					'GET /metadata/d/{did}/{wvm}/{wvmid}/e',
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
					'GET /metadata/d/{did}/{wvm}/{wvmid}/e',
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
					'GET /metadata/d/{did}/{wvm}/{wvmid}/e',
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
					'GET /metadata/d/{did}/{wvm}/{wvmid}/e',
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
						name: 'inferMetadataOwner-boolean(query)',
						displayName: 'inferMetadataOwner',
						description: 'inferMetadataOwner - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'depth-string(query)',
						displayName: 'depth',
						description: 'depth - string (query)',
						type: 'string',
						default: '1',
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

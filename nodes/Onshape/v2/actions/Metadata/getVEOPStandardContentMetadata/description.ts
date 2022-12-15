import { INodeProperties } from "n8n-workflow";

export const getVEOPStandardContentMetadataDescription: INodeProperties[] = [
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
					'GET /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
				],
			},
		},
	},
	{
		displayName: 'vid',
		name: 'vid-string(path)',
		description: 'vid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Metadata',
				],
				operation: [
					'GET /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
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
					'GET /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
				],
			},
		},
	},
	{
		displayName: 'otype',
		name: 'otype-string(path)',
		description: 'otype - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Metadata',
				],
				operation: [
					'GET /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
				],
			},
		},
	},
	{
		displayName: 'oid',
		name: 'oid-string(path)',
		description: 'oid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Metadata',
				],
				operation: [
					'GET /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
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
					'GET /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
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
					'GET /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
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
						displayName: 'configuration',
						name: 'configuration-string(query)',
						description: 'configuration - string (query)',
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

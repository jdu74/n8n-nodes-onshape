import { INodeProperties } from "n8n-workflow";

export const getPartMetadataDescription: INodeProperties[] = [
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
					'Part',
				],
				operation: [
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
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
					'Part',
				],
				operation: [
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
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
					'Part',
				],
				operation: [
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
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
					'Part',
				],
				operation: [
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
				],
			},
		},
	},
	{
		displayName: 'partid',
		name: 'partid-string(path)',
		description: 'partid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Part',
				],
				operation: [
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
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
					'Part',
				],
				operation: [
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
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
						displayName: 'includePropertyDefaults',
						name: 'includePropertyDefaults-boolean(query)',
						description: 'includePropertyDefaults - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'friendlyUserIds',
						name: 'friendlyUserIds-boolean(query)',
						description: 'friendlyUserIds - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

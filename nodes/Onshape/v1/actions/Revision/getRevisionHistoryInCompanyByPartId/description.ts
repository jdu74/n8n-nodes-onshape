import { INodeProperties } from "n8n-workflow";

export const getRevisionHistoryInCompanyByPartIdDescription: INodeProperties[] = [
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
					'Revision',
				],
				operation: [
					'GET /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}/p/{pid}',
				],
			},
		},
	},
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
					'Revision',
				],
				operation: [
					'GET /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}/p/{pid}',
				],
			},
		},
	},
	{
		name: 'wv-string(path)',
		displayName: 'wv',
		description: 'wv - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Revision',
				],
				operation: [
					'GET /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}/p/{pid}',
				],
			},
		},
	},
	{
		name: 'wvid-string(path)',
		displayName: 'wvid',
		description: 'wvid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Revision',
				],
				operation: [
					'GET /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}/p/{pid}',
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
					'Revision',
				],
				operation: [
					'GET /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}/p/{pid}',
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
					'Revision',
				],
				operation: [
					'GET /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}/p/{pid}',
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
					'Revision',
				],
				operation: [
					'GET /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}/p/{pid}',
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
						name: 'configuration-string(query)',
						displayName: 'configuration',
						description: 'configuration - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'linkDocumentId-string(query)',
						displayName: 'linkDocumentId',
						description: 'linkDocumentId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'fillApprovers-boolean(query)',
						displayName: 'fillApprovers',
						description: 'fillApprovers - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'fillExportPermission-boolean(query)',
						displayName: 'fillExportPermission',
						description: 'fillExportPermission - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

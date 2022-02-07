import { INodeProperties } from "n8n-workflow";

export const exportPSDescription: INodeProperties[] = [
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
					'Part',
				],
				operation: [
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/parasolid',
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
					'Part',
				],
				operation: [
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/parasolid',
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
					'Part',
				],
				operation: [
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/parasolid',
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
					'Part',
				],
				operation: [
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/parasolid',
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
					'Part',
				],
				operation: [
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/parasolid',
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
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/parasolid',
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
						name: 'version-string(query)',
						displayName: 'version',
						description: 'version - string (query)',
						type: 'string',
						default: '0',
					},
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
				],
			},
		],
	},
];

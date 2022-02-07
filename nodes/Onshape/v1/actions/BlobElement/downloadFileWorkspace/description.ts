import { INodeProperties } from "n8n-workflow";

export const downloadFileWorkspaceDescription: INodeProperties[] = [
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
					'BlobElement',
				],
				operation: [
					'GET /blobelements/d/{did}/w/{wid}/e/{eid}',
				],
			},
		},
	},
	{
		name: 'wid-string(path)',
		displayName: 'wid',
		description: 'wid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'BlobElement',
				],
				operation: [
					'GET /blobelements/d/{did}/w/{wid}/e/{eid}',
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
					'BlobElement',
				],
				operation: [
					'GET /blobelements/d/{did}/w/{wid}/e/{eid}',
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
					'BlobElement',
				],
				operation: [
					'GET /blobelements/d/{did}/w/{wid}/e/{eid}',
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
						name: 'contentDisposition-string(query)',
						displayName: 'contentDisposition',
						description: 'contentDisposition - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'If-None-Match-string(header)',
						displayName: 'If-None-Match',
						description: 'If-None-Match - string (header)',
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

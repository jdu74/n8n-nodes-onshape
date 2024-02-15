import { INodeProperties } from "n8n-workflow";

export const DownloadFileWorkspaceDescription: INodeProperties[] = [
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
					'BlobElement',
				],
				operation: [
					'GET /blobelements/d/{did}/w/{wid}/e/{eid}',
				],
			},
		},
	},
	{
		displayName: 'wid',
		name: 'wid-string(path)',
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
		displayName: 'eid',
		name: 'eid-string(path)',
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
						displayName: 'contentDisposition',
						name: 'contentDisposition-string(query)',
						description: 'contentDisposition - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'If-None-Match',
						name: 'If-None-Match-string(header)',
						description: 'If-None-Match - string (header)',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
];

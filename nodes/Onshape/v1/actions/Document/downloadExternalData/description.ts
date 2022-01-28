import { INodeProperties } from "n8n-workflow";

export const downloadExternalDataDescription: INodeProperties[] = [
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
					'Document',
				],
				operation: [
					'GET /api/documents/d/{did}/externaldata/{fid}',
				],
			},
		},
	},
	{
		name: 'fid-string(path)',
		displayName: 'fid',
		description: 'fid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Document',
				],
				operation: [
					'GET /api/documents/d/{did}/externaldata/{fid}',
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
					'Document',
				],
				operation: [
					'GET /api/documents/d/{did}/externaldata/{fid}',
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
						name: 'If-None-Match-string(header)',
						displayName: 'If-None-Match',
						description: 'If-None-Match - string (header)',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
];

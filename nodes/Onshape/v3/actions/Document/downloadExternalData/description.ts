import { INodeProperties } from "n8n-workflow";

export const DownloadExternalDataDescription: INodeProperties[] = [
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
					'Document',
				],
				operation: [
					'GET /documents/d/{did}/externaldata/{fid}',
				],
			},
		},
	},
	{
		displayName: 'fid',
		name: 'fid-string(path)',
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
					'GET /documents/d/{did}/externaldata/{fid}',
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
					'GET /documents/d/{did}/externaldata/{fid}',
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

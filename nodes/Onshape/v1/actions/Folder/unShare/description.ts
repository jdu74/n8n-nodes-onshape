import { INodeProperties } from "n8n-workflow";

export const unShareDescription: INodeProperties[] = [
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
					'Folder',
				],
				operation: [
					'DELETE /api/folders/{fid}/share/{eid}',
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
					'Folder',
				],
				operation: [
					'DELETE /api/folders/{fid}/share/{eid}',
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
					'Folder',
				],
				operation: [
					'DELETE /api/folders/{fid}/share/{eid}',
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
						name: 'entryType-integer(query)',
						displayName: 'entryType',
						description: 'entryType - integer (query)',
						type: 'number',
						default: 0,
					},
				],
			},
		],
	},
];

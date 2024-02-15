import { INodeProperties } from "n8n-workflow";

export const UnShareDescription: INodeProperties[] = [
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
					'Folder',
				],
				operation: [
					'DELETE /folders/{fid}/share/{eid}',
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
					'Folder',
				],
				operation: [
					'DELETE /folders/{fid}/share/{eid}',
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
					'DELETE /folders/{fid}/share/{eid}',
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
						displayName: 'entryType',
						name: 'entryType-integer(query)',
						description: 'entryType - integer (query)',
						type: 'number',
						default: 0,
					},
				],
			},
		],
	},
];

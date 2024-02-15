import { INodeProperties } from "n8n-workflow";

export const GetDocumentThumbnailWithSizeDescription: INodeProperties[] = [
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
					'Thumbnail',
				],
				operation: [
					'GET /thumbnails/d/{did}/w/{wid}/s/{sz}',
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
					'Thumbnail',
				],
				operation: [
					'GET /thumbnails/d/{did}/w/{wid}/s/{sz}',
				],
			},
		},
	},
	{
		displayName: 'sz',
		name: 'sz-string(path)',
		description: 'sz - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Thumbnail',
				],
				operation: [
					'GET /thumbnails/d/{did}/w/{wid}/s/{sz}',
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
					'Thumbnail',
				],
				operation: [
					'GET /thumbnails/d/{did}/w/{wid}/s/{sz}',
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
						displayName: 't',
						name: 't-string(query)',
						description: 't - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'skipDefaultImage',
						name: 'skipDefaultImage-string(query)',
						description: 'skipDefaultImage - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
];

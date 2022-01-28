import { INodeProperties } from "n8n-workflow";

export const getThumbnailForDocumentOldDescription: INodeProperties[] = [
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
					'Thumbnail',
				],
				operation: [
					'GET /api/thumbnails/document/{did}',
				],
			},
		},
	},
];

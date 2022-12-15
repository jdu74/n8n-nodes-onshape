import { INodeProperties } from "n8n-workflow";

export const getThumbnailForDocumentDescription: INodeProperties[] = [
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
					'GET /thumbnails/d/{did}',
				],
			},
		},
	},
];

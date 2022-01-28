import { INodeProperties } from "n8n-workflow";

export const getThumbnailForDocumentAndVersionOldDescription: INodeProperties[] = [
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
					'GET /api/thumbnails/document/{did}/version/{vid}',
				],
			},
		},
	},
	{
		name: 'vid-string(path)',
		displayName: 'vid',
		description: 'vid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Thumbnail',
				],
				operation: [
					'GET /api/thumbnails/document/{did}/version/{vid}',
				],
			},
		},
	},
];

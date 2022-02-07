import { INodeProperties } from "n8n-workflow";

export const getDocumentThumbnailDescription: INodeProperties[] = [
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
					'GET /thumbnails/d/{did}/w/{wid}',
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
					'Thumbnail',
				],
				operation: [
					'GET /thumbnails/d/{did}/w/{wid}',
				],
			},
		},
	},
];

import { INodeProperties } from "n8n-workflow";

export const getCommentDescription: INodeProperties[] = [
	{
		name: 'cid-string(path)',
		displayName: 'cid',
		description: 'cid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Comment',
				],
				operation: [
					'GET /comments/{cid}',
				],
			},
		},
	},
];

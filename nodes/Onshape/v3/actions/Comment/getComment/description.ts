import { INodeProperties } from "n8n-workflow";

export const GetCommentDescription: INodeProperties[] = [
	{
		displayName: 'cid',
		name: 'cid-string(path)',
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

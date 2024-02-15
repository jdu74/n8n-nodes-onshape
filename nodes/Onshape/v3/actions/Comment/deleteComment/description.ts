import { INodeProperties } from "n8n-workflow";

export const DeleteCommentDescription: INodeProperties[] = [
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
					'DELETE /comments/{cid}',
				],
			},
		},
	},
];

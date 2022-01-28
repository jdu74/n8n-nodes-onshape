import { INodeProperties } from "n8n-workflow";

export const deleteAttachmentsDescription: INodeProperties[] = [
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
					'DELETE /api/comments/{cid}/attachment',
				],
			},
		},
	},
];

import { INodeProperties } from "n8n-workflow";

export const getAttachmentDescription: INodeProperties[] = [
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
					'GET /comments/{cid}/attachment/{fdid}.{ext}',
				],
			},
		},
	},
	{
		name: 'fdid-string(path)',
		displayName: 'fdid',
		description: 'fdid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Comment',
				],
				operation: [
					'GET /comments/{cid}/attachment/{fdid}.{ext}',
				],
			},
		},
	},
	{
		name: 'ext-string(path)',
		displayName: 'ext',
		description: 'ext - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Comment',
				],
				operation: [
					'GET /comments/{cid}/attachment/{fdid}.{ext}',
				],
			},
		},
	},
];

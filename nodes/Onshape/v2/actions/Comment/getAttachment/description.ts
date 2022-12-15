import { INodeProperties } from "n8n-workflow";

export const getAttachmentDescription: INodeProperties[] = [
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
					'GET /comments/{cid}/attachment/{fdid}.{ext}',
				],
			},
		},
	},
	{
		displayName: 'fdid',
		name: 'fdid-string(path)',
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
		displayName: 'ext',
		name: 'ext-string(path)',
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

import * as addAttachment from './addAttachment';
import * as deleteAttachments from './deleteAttachments';
import * as getComments from './getComments';
import * as createComment from './createComment';
import * as getComment from './getComment';
import * as updateComment from './updateComment';
import * as deleteComment from './deleteComment';
import * as getAttachment from './getAttachment';
import * as reopen from './reopen';
import * as resolve from './resolve';

import { INodeProperties } from 'n8n-workflow';

export {
	addAttachment,
	deleteAttachments,
	getComments,
	createComment,
	getComment,
	updateComment,
	deleteComment,
	getAttachment,
	reopen,
	resolve,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Comment',
				],
			},
		},
		options: [
			{
				name: 'addAttachment',
				value: 'POST /api/comments/{cid}/attachment',
				description: 'post /api/comments/{cid}/attachment',
			},
			{
				name: 'deleteAttachments',
				value: 'DELETE /api/comments/{cid}/attachment',
				description: 'delete /api/comments/{cid}/attachment',
			},
			{
				name: 'getComments',
				value: 'GET /api/comments',
				description: 'get /api/comments',
			},
			{
				name: 'createComment',
				value: 'POST /api/comments',
				description: 'post /api/comments',
			},
			{
				name: 'getComment',
				value: 'GET /api/comments/{cid}',
				description: 'get /api/comments/{cid}',
			},
			{
				name: 'updateComment',
				value: 'POST /api/comments/{cid}',
				description: 'post /api/comments/{cid}',
			},
			{
				name: 'deleteComment',
				value: 'DELETE /api/comments/{cid}',
				description: 'delete /api/comments/{cid}',
			},
			{
				name: 'getAttachment',
				value: 'GET /api/comments/{cid}/attachment/{fdid}.{ext}',
				description: 'get /api/comments/{cid}/attachment/{fdid}.{ext}',
			},
			{
				name: 'reopen',
				value: 'POST /api/comments/{cid}/reopen',
				description: 'post /api/comments/{cid}/reopen',
			},
			{
				name: 'resolve',
				value: 'POST /api/comments/{cid}/resolve',
				description: 'post /api/comments/{cid}/resolve',
			},
		],
		default: 'POST /api/comments/{cid}/attachment',
		description: 'The operation to perform',
	},
	...addAttachment.description,
	...deleteAttachments.description,
	...getComments.description,
	...createComment.description,
	...getComment.description,
	...updateComment.description,
	...deleteComment.description,
	...getAttachment.description,
	...reopen.description,
	...resolve.description,
];

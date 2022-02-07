import * as getComments from './getComments';
import * as createComment from './createComment';
import * as getComment from './getComment';
import * as updateComment from './updateComment';
import * as deleteComment from './deleteComment';
import * as addAttachment from './addAttachment';
import * as deleteAttachments from './deleteAttachments';
import * as getAttachment from './getAttachment';
import * as reopen from './reopen';
import * as resolve from './resolve';

import { INodeProperties } from 'n8n-workflow';

export {
	getComments,
	createComment,
	getComment,
	updateComment,
	deleteComment,
	addAttachment,
	deleteAttachments,
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
				name: 'getComments',
				value: 'GET /comments',
				description: 'get /comments',
			},
			{
				name: 'createComment',
				value: 'POST /comments',
				description: 'post /comments',
			},
			{
				name: 'getComment',
				value: 'GET /comments/{cid}',
				description: 'get /comments/{cid}',
			},
			{
				name: 'updateComment',
				value: 'POST /comments/{cid}',
				description: 'post /comments/{cid}',
			},
			{
				name: 'deleteComment',
				value: 'DELETE /comments/{cid}',
				description: 'delete /comments/{cid}',
			},
			{
				name: 'addAttachment',
				value: 'POST /comments/{cid}/attachment',
				description: 'post /comments/{cid}/attachment',
			},
			{
				name: 'deleteAttachments',
				value: 'DELETE /comments/{cid}/attachment',
				description: 'delete /comments/{cid}/attachment',
			},
			{
				name: 'getAttachment',
				value: 'GET /comments/{cid}/attachment/{fdid}.{ext}',
				description: 'get /comments/{cid}/attachment/{fdid}.{ext}',
			},
			{
				name: 'reopen',
				value: 'POST /comments/{cid}/reopen',
				description: 'post /comments/{cid}/reopen',
			},
			{
				name: 'resolve',
				value: 'POST /comments/{cid}/resolve',
				description: 'post /comments/{cid}/resolve',
			},
		],
		default: 'GET /comments',
		description: 'The operation to perform',
	},
	...getComments.description,
	...createComment.description,
	...getComment.description,
	...updateComment.description,
	...deleteComment.description,
	...addAttachment.description,
	...deleteAttachments.description,
	...getAttachment.description,
	...reopen.description,
	...resolve.description,
];

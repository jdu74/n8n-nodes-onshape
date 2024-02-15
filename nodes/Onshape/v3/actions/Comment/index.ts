import * as GetComments from './getComments';
import * as CreateComment from './createComment';
import * as GetComment from './getComment';
import * as UpdateComment from './updateComment';
import * as DeleteComment from './deleteComment';
import * as AddAttachment from './addAttachment';
import * as DeleteAttachments from './deleteAttachments';
import * as GetAttachment from './getAttachment';
import * as Reopen from './reopen';
import * as Resolve from './resolve';

import { INodeProperties } from 'n8n-workflow';

export {
	GetComments,
	CreateComment,
	GetComment,
	UpdateComment,
	DeleteComment,
	AddAttachment,
	DeleteAttachments,
	GetAttachment,
	Reopen,
	Resolve,
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
				description: 'Get a list of comments in a document. - get /comments',
			},
			{
				name: 'createComment',
				value: 'POST /comments',
				description: 'Update a document with a new comment. - post /comments',
			},
			{
				name: 'getComment',
				value: 'GET /comments/{cid}',
				description: 'Get details for a comment. - get /comments/{cid}',
			},
			{
				name: 'updateComment',
				value: 'POST /comments/{cid}',
				description: 'Update the content of an existing comment. - post /comments/{cid}',
			},
			{
				name: 'deleteComment',
				value: 'DELETE /comments/{cid}',
				description: 'Delete a comment from a document. - delete /comments/{cid}',
			},
			{
				name: 'addAttachment',
				value: 'POST /comments/{cid}/attachment',
				description: 'Add an attachment to a comment. - post /comments/{cid}/attachment',
			},
			{
				name: 'deleteAttachments',
				value: 'DELETE /comments/{cid}/attachment',
				description: 'Delete all attachments from a comment. - delete /comments/{cid}/attachment',
			},
			{
				name: 'getAttachment',
				value: 'GET /comments/{cid}/attachment/{fdid}.{ext}',
				description: 'Returns only a single attachment. - get /comments/{cid}/attachment/{fdid}.{ext}',
			},
			{
				name: 'reopen',
				value: 'POST /comments/{cid}/reopen',
				description: 'Reopen a resolved comment. - post /comments/{cid}/reopen',
			},
			{
				name: 'resolve',
				value: 'POST /comments/{cid}/resolve',
				description: 'Resolve a comment. - post /comments/{cid}/resolve',
			},
		],
		default: 'GET /comments',
		description: 'The operation to perform',
	},
	...GetComments.description,
	...CreateComment.description,
	...GetComment.description,
	...UpdateComment.description,
	...DeleteComment.description,
	...AddAttachment.description,
	...DeleteAttachments.description,
	...GetAttachment.description,
	...Reopen.description,
	...Resolve.description,
];

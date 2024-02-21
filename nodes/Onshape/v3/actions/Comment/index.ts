import * as AddAttachment from './addAttachment';
import * as CreateComment from './createComment';
import * as DeleteAttachments from './deleteAttachments';
import * as DeleteComment from './deleteComment';
import * as GetAttachment from './getAttachment';
import * as GetComment from './getComment';
import * as GetComments from './getComments';
import * as Reopen from './reopen';
import * as Resolve from './resolve';
import * as UpdateComment from './updateComment';

import { INodeProperties } from 'n8n-workflow';

export {
	AddAttachment,
	CreateComment,
	DeleteAttachments,
	DeleteComment,
	GetAttachment,
	GetComment,
	GetComments,
	Reopen,
	Resolve,
	UpdateComment,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'Comment',
				],
			},
		},
		default: 'GET /comments',
		options: [
			{
				name: 'addAttachment',
				value: 'POST /comments/{cid}/attachment',
				description: 'Add an attachment to a comment. - post /comments/{cid}/attachment',
				action: 'Add Attachment',
			},
			{
				name: 'createComment',
				value: 'POST /comments',
				description: 'Update a document with a new comment. - post /comments',
				action: 'Create Comment',
			},
			{
				name: 'deleteAttachments',
				value: 'DELETE /comments/{cid}/attachment',
				description: 'Delete all attachments from a comment. - delete /comments/{cid}/attachment',
				action: 'Delete Attachments',
			},
			{
				name: 'deleteComment',
				value: 'DELETE /comments/{cid}',
				description: 'Delete a comment from a document. - delete /comments/{cid}',
				action: 'Delete Comment',
			},
			{
				name: 'getAttachment',
				value: 'GET /comments/{cid}/attachment/{fdid}.{ext}',
				description: 'Get the attachment with the specified file extension that is associated with the specified comment. - get /comments/{cid}/attachment/{fdid}.{ext}',
				action: 'Get Attachment',
			},
			{
				name: 'getComment',
				value: 'GET /comments/{cid}',
				description: 'Get details for a comment. - get /comments/{cid}',
				action: 'Get Comment',
			},
			{
				name: 'getComments',
				value: 'GET /comments',
				description: 'Get a list of comments in a document. - get /comments',
				action: 'Get Comments',
			},
			{
				name: 'reopen',
				value: 'POST /comments/{cid}/reopen',
				description: 'Reopen a resolved comment. - post /comments/{cid}/reopen',
				action: 'Reopen',
			},
			{
				name: 'resolve',
				value: 'POST /comments/{cid}/resolve',
				description: 'Resolve a comment. - post /comments/{cid}/resolve',
				action: 'Resolve',
			},
			{
				name: 'updateComment',
				value: 'POST /comments/{cid}',
				description: 'Update the content of an existing comment. - post /comments/{cid}',
				action: 'Update Comment',
			},
		],
	},
	...AddAttachment.description,
	...CreateComment.description,
	...DeleteAttachments.description,
	...DeleteComment.description,
	...GetAttachment.description,
	...GetComment.description,
	...GetComments.description,
	...Reopen.description,
	...Resolve.description,
	...UpdateComment.description,
];

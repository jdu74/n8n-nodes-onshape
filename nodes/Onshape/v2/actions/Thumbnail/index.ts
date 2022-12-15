import * as getThumbnailForDocument from './getThumbnailForDocument';
import * as getThumbnailForDocumentAndVersion from './getThumbnailForDocumentAndVersion';
import * as getDocumentThumbnail from './getDocumentThumbnail';
import * as getElementThumbnailWithApiConfiguration from './getElementThumbnailWithApiConfiguration';
import * as getDocumentThumbnailWithSize from './getDocumentThumbnailWithSize';
import * as getElementThumbnail from './getElementThumbnail';
import * as setApplicationElementThumbnail from './setApplicationElementThumbnail';
import * as deleteApplicationThumbnails from './deleteApplicationThumbnails';
import * as getElementThumbnailWithSize from './getElementThumbnailWithSize';
import * as getThumbnailForDocumentOld from './getThumbnailForDocumentOld';
import * as getThumbnailForDocumentAndVersionOld from './getThumbnailForDocumentAndVersionOld';

import { INodeProperties } from 'n8n-workflow';

export {
	getThumbnailForDocument,
	getThumbnailForDocumentAndVersion,
	getDocumentThumbnail,
	getElementThumbnailWithApiConfiguration,
	getDocumentThumbnailWithSize,
	getElementThumbnail,
	setApplicationElementThumbnail,
	deleteApplicationThumbnails,
	getElementThumbnailWithSize,
	getThumbnailForDocumentOld,
	getThumbnailForDocumentAndVersionOld,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Thumbnail',
				],
			},
		},
		options: [
			{
				name: 'getThumbnailForDocument',
				value: 'GET /thumbnails/d/{did}',
				description: 'Retrieve thumbnail information for document in default workspace by document ID. - get /thumbnails/d/{did}',
			},
			{
				name: 'getThumbnailForDocumentAndVersion',
				value: 'GET /thumbnails/d/{did}/v/{vid}',
				description: 'get /thumbnails/d/{did}/v/{vid}',
			},
			{
				name: 'getDocumentThumbnail',
				value: 'GET /thumbnails/d/{did}/w/{wid}',
				description: 'get /thumbnails/d/{did}/w/{wid}',
			},
			{
				name: 'getElementThumbnailWithApiConfiguration',
				value: 'GET /thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}',
				description: 'Retrieve thumbnail information for a tab, with a specified size in pixels by document ID, workspace ID, tab ID, and configuration ID. - get /thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}',
			},
			{
				name: 'getDocumentThumbnailWithSize',
				value: 'GET /thumbnails/d/{did}/w/{wid}/s/{sz}',
				description: 'Retrieve thumbnail information for a document, with a specified size in pixels by document ID and workspace ID. - get /thumbnails/d/{did}/w/{wid}/s/{sz}',
			},
			{
				name: 'getElementThumbnail',
				value: 'GET /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
				description: 'Retrieve thumbnail information for a tab by document ID, workspace or version ID, and tab ID. - get /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
			},
			{
				name: 'setApplicationElementThumbnail',
				value: 'POST /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
				description: 'Update application tab thumbnail by document ID, workspace or version ID, and tab ID. - post /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
			},
			{
				name: 'deleteApplicationThumbnails',
				value: 'DELETE /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
				description: 'Delete application tab thumbnail by document ID, workspace or version ID, and tab ID. - delete /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
			},
			{
				name: 'getElementThumbnailWithSize',
				value: 'GET /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}/s/{sz}',
				description: 'Retrieve thumbnail information for a tab, with a specified size in pixels by document ID, workspace ID, and tab ID. - get /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}/s/{sz}',
			},
			{
				name: 'getThumbnailForDocumentOld',
				value: 'GET /thumbnails/document/{did}',
				description: 'Retrieve thumbnail information for a document in default workspace by document ID. - get /thumbnails/document/{did}',
			},
			{
				name: 'getThumbnailForDocumentAndVersionOld',
				value: 'GET /thumbnails/document/{did}/version/{vid}',
				description: 'Retrieve thumbnail information for a document at a specified version by document ID and version ID. - get /thumbnails/document/{did}/version/{vid}',
			},
		],
		default: 'GET /thumbnails/d/{did}',
		description: 'The operation to perform',
	},
	...getThumbnailForDocument.description,
	...getThumbnailForDocumentAndVersion.description,
	...getDocumentThumbnail.description,
	...getElementThumbnailWithApiConfiguration.description,
	...getDocumentThumbnailWithSize.description,
	...getElementThumbnail.description,
	...setApplicationElementThumbnail.description,
	...deleteApplicationThumbnails.description,
	...getElementThumbnailWithSize.description,
	...getThumbnailForDocumentOld.description,
	...getThumbnailForDocumentAndVersionOld.description,
];

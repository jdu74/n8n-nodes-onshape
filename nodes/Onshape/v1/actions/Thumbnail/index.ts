import * as getElementThumbnail from './getElementThumbnail';
import * as setApplicationElementThumbnail from './setApplicationElementThumbnail';
import * as deleteApplicationThumbnails from './deleteApplicationThumbnails';
import * as getDocumentThumbnail from './getDocumentThumbnail';
import * as getDocumentThumbnailWithSize from './getDocumentThumbnailWithSize';
import * as getElementThumbnailWithApiConfiguration from './getElementThumbnailWithApiConfiguration';
import * as getElementThumbnailWithSize from './getElementThumbnailWithSize';
import * as getThumbnailForDocument from './getThumbnailForDocument';
import * as getThumbnailForDocumentAndVersion from './getThumbnailForDocumentAndVersion';
import * as getThumbnailForDocumentAndVersionOld from './getThumbnailForDocumentAndVersionOld';
import * as getThumbnailForDocumentOld from './getThumbnailForDocumentOld';

import { INodeProperties } from 'n8n-workflow';

export {
	getElementThumbnail,
	setApplicationElementThumbnail,
	deleteApplicationThumbnails,
	getDocumentThumbnail,
	getDocumentThumbnailWithSize,
	getElementThumbnailWithApiConfiguration,
	getElementThumbnailWithSize,
	getThumbnailForDocument,
	getThumbnailForDocumentAndVersion,
	getThumbnailForDocumentAndVersionOld,
	getThumbnailForDocumentOld,
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
				name: 'getElementThumbnail',
				value: 'GET /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
				description: 'get /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
			},
			{
				name: 'setApplicationElementThumbnail',
				value: 'POST /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
				description: 'post /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
			},
			{
				name: 'deleteApplicationThumbnails',
				value: 'DELETE /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
				description: 'delete /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
			},
			{
				name: 'getDocumentThumbnail',
				value: 'GET /thumbnails/d/{did}/w/{wid}',
				description: 'get /thumbnails/d/{did}/w/{wid}',
			},
			{
				name: 'getDocumentThumbnailWithSize',
				value: 'GET /thumbnails/d/{did}/w/{wid}/s/{sz}',
				description: 'get /thumbnails/d/{did}/w/{wid}/s/{sz}',
			},
			{
				name: 'getElementThumbnailWithApiConfiguration',
				value: 'GET /thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}',
				description: 'get /thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}',
			},
			{
				name: 'getElementThumbnailWithSize',
				value: 'GET /thumbnails/d/{did}/w/{wid}/e/{eid}/s/{sz}',
				description: 'get /thumbnails/d/{did}/w/{wid}/e/{eid}/s/{sz}',
			},
			{
				name: 'getThumbnailForDocument',
				value: 'GET /thumbnails/d/{did}',
				description: 'get /thumbnails/d/{did}',
			},
			{
				name: 'getThumbnailForDocumentAndVersion',
				value: 'GET /thumbnails/d/{did}/v/{vid}',
				description: 'get /thumbnails/d/{did}/v/{vid}',
			},
			{
				name: 'getThumbnailForDocumentAndVersionOld',
				value: 'GET /thumbnails/document/{did}/version/{vid}',
				description: 'get /thumbnails/document/{did}/version/{vid}',
			},
			{
				name: 'getThumbnailForDocumentOld',
				value: 'GET /thumbnails/document/{did}',
				description: 'get /thumbnails/document/{did}',
			},
		],
		default: 'GET /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
		description: 'The operation to perform',
	},
	...getElementThumbnail.description,
	...setApplicationElementThumbnail.description,
	...deleteApplicationThumbnails.description,
	...getDocumentThumbnail.description,
	...getDocumentThumbnailWithSize.description,
	...getElementThumbnailWithApiConfiguration.description,
	...getElementThumbnailWithSize.description,
	...getThumbnailForDocument.description,
	...getThumbnailForDocumentAndVersion.description,
	...getThumbnailForDocumentAndVersionOld.description,
	...getThumbnailForDocumentOld.description,
];

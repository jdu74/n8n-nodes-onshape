import * as DeleteApplicationThumbnails from './deleteApplicationThumbnails';
import * as GetDocumentThumbnail from './getDocumentThumbnail';
import * as GetDocumentThumbnailWithSize from './getDocumentThumbnailWithSize';
import * as GetElementThumbnail from './getElementThumbnail';
import * as GetElementThumbnailWithApiConfiguration from './getElementThumbnailWithApiConfiguration';
import * as GetElementThumbnailWithSize from './getElementThumbnailWithSize';
import * as GetThumbnailForDocument from './getThumbnailForDocument';
import * as GetThumbnailForDocumentAndVersion from './getThumbnailForDocumentAndVersion';
import * as GetThumbnailForDocumentAndVersionOld from './getThumbnailForDocumentAndVersionOld';
import * as GetThumbnailForDocumentOld from './getThumbnailForDocumentOld';
import * as SetApplicationElementThumbnail from './setApplicationElementThumbnail';

import { INodeProperties } from 'n8n-workflow';

export {
	DeleteApplicationThumbnails,
	GetDocumentThumbnail,
	GetDocumentThumbnailWithSize,
	GetElementThumbnail,
	GetElementThumbnailWithApiConfiguration,
	GetElementThumbnailWithSize,
	GetThumbnailForDocument,
	GetThumbnailForDocumentAndVersion,
	GetThumbnailForDocumentAndVersionOld,
	GetThumbnailForDocumentOld,
	SetApplicationElementThumbnail,
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
					'Thumbnail',
				],
			},
		},
		default: 'GET /thumbnails/d/{did}',
		options: [
			{
				name: 'deleteApplicationThumbnails',
				value: 'DELETE /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
				description: "Delete an element's thumbnail. - delete /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}",
				action: 'Delete Application Thumbnails',
			},
			{
				name: 'getDocumentThumbnail',
				value: 'GET /thumbnails/d/{did}/w/{wid}',
				description: 'Get the thumbnail info for a workspace. - get /thumbnails/d/{did}/w/{wid}',
				action: 'Get Document Thumbnail',
			},
			{
				name: 'getDocumentThumbnailWithSize',
				value: 'GET /thumbnails/d/{did}/w/{wid}/s/{sz}',
				description: 'Get the thumbnail image with the given size for a document. - get /thumbnails/d/{did}/w/{wid}/s/{sz}',
				action: 'Get Document Thumbnail With Size',
			},
			{
				name: 'getElementThumbnail',
				value: 'GET /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
				description: 'Get the thumbnail info structure for an element. - get /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
				action: 'Get Element Thumbnail',
			},
			{
				name: 'getElementThumbnailWithApiConfiguration',
				value: 'GET /thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}',
				description: 'Get the thumbnail image with the given configuration for an element. - get /thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}',
				action: 'Get Element Thumbnail With Api Configuration',
			},
			{
				name: 'getElementThumbnailWithSize',
				value: 'GET /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}/s/{sz}',
				description: 'Get the thumbnail image with the given size for an element. - get /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}/s/{sz}',
				action: 'Get Element Thumbnail With Size',
			},
			{
				name: 'getThumbnailForDocument',
				value: 'GET /thumbnails/d/{did}',
				description: 'Get the thumbnail info for a document in the default workspace. - get /thumbnails/d/{did}',
				action: 'Get Thumbnail For Document',
			},
			{
				name: 'getThumbnailForDocumentAndVersion',
				value: 'GET /thumbnails/d/{did}/v/{vid}',
				description: 'Get the thumbnail info for a version of a document. - get /thumbnails/d/{did}/v/{vid}',
				action: 'Get Thumbnail For Document And Version',
			},
			{
				name: 'getThumbnailForDocumentAndVersionOld',
				value: 'GET /thumbnails/document/{did}/version/{vid}',
				description: 'This endpoint will be deprecated soon. Use `getThumbnailForDocumentAndVersion` instead. - get /thumbnails/document/{did}/version/{vid}',
				action: 'Get Thumbnail For Document And Version Old',
			},
			{
				name: 'getThumbnailForDocumentOld',
				value: 'GET /thumbnails/document/{did}',
				description: 'This endpoint will be deprecated soon. Use `getThumbnailForDocument` instead. - get /thumbnails/document/{did}',
				action: 'Get Thumbnail For Document Old',
			},
			{
				name: 'setApplicationElementThumbnail',
				value: 'POST /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
				description: 'Set the thumbnail image for an application element. - post /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
				action: 'Set Application Element Thumbnail',
			},
		],
	},
	...DeleteApplicationThumbnails.description,
	...GetDocumentThumbnail.description,
	...GetDocumentThumbnailWithSize.description,
	...GetElementThumbnail.description,
	...GetElementThumbnailWithApiConfiguration.description,
	...GetElementThumbnailWithSize.description,
	...GetThumbnailForDocument.description,
	...GetThumbnailForDocumentAndVersion.description,
	...GetThumbnailForDocumentAndVersionOld.description,
	...GetThumbnailForDocumentOld.description,
	...SetApplicationElementThumbnail.description,
];

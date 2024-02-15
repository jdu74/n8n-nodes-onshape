import * as GetThumbnailForDocument from './getThumbnailForDocument';
import * as GetThumbnailForDocumentAndVersion from './getThumbnailForDocumentAndVersion';
import * as GetDocumentThumbnail from './getDocumentThumbnail';
import * as GetElementThumbnailWithApiConfiguration from './getElementThumbnailWithApiConfiguration';
import * as GetDocumentThumbnailWithSize from './getDocumentThumbnailWithSize';
import * as GetElementThumbnail from './getElementThumbnail';
import * as SetApplicationElementThumbnail from './setApplicationElementThumbnail';
import * as DeleteApplicationThumbnails from './deleteApplicationThumbnails';
import * as GetElementThumbnailWithSize from './getElementThumbnailWithSize';
import * as GetThumbnailForDocumentOld from './getThumbnailForDocumentOld';
import * as GetThumbnailForDocumentAndVersionOld from './getThumbnailForDocumentAndVersionOld';

import { INodeProperties } from 'n8n-workflow';

export {
	GetThumbnailForDocument,
	GetThumbnailForDocumentAndVersion,
	GetDocumentThumbnail,
	GetElementThumbnailWithApiConfiguration,
	GetDocumentThumbnailWithSize,
	GetElementThumbnail,
	SetApplicationElementThumbnail,
	DeleteApplicationThumbnails,
	GetElementThumbnailWithSize,
	GetThumbnailForDocumentOld,
	GetThumbnailForDocumentAndVersionOld,
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
				description: '* By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace.\n* The default workspace may vary by user; the image served depends on the signed-in user.\n* See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape) - get /thumbnails/d/{did}',
			},
			{
				name: 'getThumbnailForDocumentAndVersion',
				value: 'GET /thumbnails/d/{did}/v/{vid}',
				description: '* By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace.\n* See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape) - get /thumbnails/d/{did}/v/{vid}',
			},
			{
				name: 'getDocumentThumbnail',
				value: 'GET /thumbnails/d/{did}/w/{wid}',
				description: '* By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace.\n* See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape) - get /thumbnails/d/{did}/w/{wid}',
			},
			{
				name: 'getElementThumbnailWithApiConfiguration',
				value: 'GET /thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}',
				description: 'Returns the thumbnail image for an element at a specified version, with the given configuration. - get /thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}',
			},
			{
				name: 'getDocumentThumbnailWithSize',
				value: 'GET /thumbnails/d/{did}/w/{wid}/s/{sz}',
				description: '* By default, returns thumbnail image for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace.\n* See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape) - get /thumbnails/d/{did}/w/{wid}/s/{sz}',
			},
			{
				name: 'getElementThumbnail',
				value: 'GET /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
				description: 'Returns thumbnail info for the given document, workspace or version, and element. - get /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
			},
			{
				name: 'setApplicationElementThumbnail',
				value: 'POST /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
				description: '* Allows 3rd-party applications to set thumbnails for their elements. \n* Application elements can have both primary and secondary thumbnails. A primary thumbnail represents the top-level of the element. A secondary thumbnail can represent sub-components of the element (e.g., a drawing sheet).\n* To update one or more thumbnails, you must set the overwrite query param to `true` and supply the entire set of thumbnails. All previous thumbnails will be deleted prior to updating the element with the latest images. - post /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
			},
			{
				name: 'deleteApplicationThumbnails',
				value: 'DELETE /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
				description: "Deletes an application element's thumbnail and images for the given document, workspace or version, and element combination. - delete /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}",
			},
			{
				name: 'getElementThumbnailWithSize',
				value: 'GET /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}/s/{sz}',
				description: 'Get the thumbnail image with the given size for an element. - get /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}/s/{sz}',
			},
			{
				name: 'getThumbnailForDocumentOld',
				value: 'GET /thumbnails/document/{did}',
				description: 'This API exists for historical reasons. It uses `/document/` in the path, rather than the standard `/d/` to specify the document. - get /thumbnails/document/{did}',
			},
			{
				name: 'getThumbnailForDocumentAndVersionOld',
				value: 'GET /thumbnails/document/{did}/version/{vid}',
				description: 'This API exists for historical reasons. It uses `/document/` in the path, rather than the standard `/d/` to specify the document. - get /thumbnails/document/{did}/version/{vid}',
			},
		],
		default: 'GET /thumbnails/d/{did}',
		description: 'The operation to perform',
	},
	...GetThumbnailForDocument.description,
	...GetThumbnailForDocumentAndVersion.description,
	...GetDocumentThumbnail.description,
	...GetElementThumbnailWithApiConfiguration.description,
	...GetDocumentThumbnailWithSize.description,
	...GetElementThumbnail.description,
	...SetApplicationElementThumbnail.description,
	...DeleteApplicationThumbnails.description,
	...GetElementThumbnailWithSize.description,
	...GetThumbnailForDocumentOld.description,
	...GetThumbnailForDocumentAndVersionOld.description,
];

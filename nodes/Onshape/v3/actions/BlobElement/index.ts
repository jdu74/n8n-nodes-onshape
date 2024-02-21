import * as CreateBlobTranslation from './createBlobTranslation';
import * as DownloadFileWorkspace from './downloadFileWorkspace';
import * as UpdateUnits from './updateUnits';
import * as UploadFileCreateElement from './uploadFileCreateElement';
import * as UploadFileUpdateElement from './uploadFileUpdateElement';

import { INodeProperties } from 'n8n-workflow';

export {
	CreateBlobTranslation,
	DownloadFileWorkspace,
	UpdateUnits,
	UploadFileCreateElement,
	UploadFileUpdateElement,
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
					'BlobElement',
				],
			},
		},
		default: 'POST /blobelements/d/{did}/w/{wid}',
		options: [
			{
				name: 'createBlobTranslation',
				value: 'POST /blobelements/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				description: 'Export a blob element to another format. - post /blobelements/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				action: 'Create Blob Translation',
			},
			{
				name: 'downloadFileWorkspace',
				value: 'GET /blobelements/d/{did}/w/{wid}/e/{eid}',
				description: 'Download a file from a blob element for the specified workspace/version/microversion. - get /blobelements/d/{did}/w/{wid}/e/{eid}',
				action: 'Download File Workspace',
			},
			{
				name: 'updateUnits',
				value: 'POST /blobelements/d/{did}/w/{wid}/e/{eid}/units',
				description: 'Change the measurement units for the blob element. - post /blobelements/d/{did}/w/{wid}/e/{eid}/units',
				action: 'Update Units',
			},
			{
				name: 'uploadFileCreateElement',
				value: 'POST /blobelements/d/{did}/w/{wid}',
				description: 'Upload a file and create a blob element from it. - post /blobelements/d/{did}/w/{wid}',
				action: 'Upload File Create Element',
			},
			{
				name: 'uploadFileUpdateElement',
				value: 'POST /blobelements/d/{did}/w/{wid}/e/{eid}',
				description: 'Update a blob element by uploading a file. - post /blobelements/d/{did}/w/{wid}/e/{eid}',
				action: 'Upload File Update Element',
			},
		],
	},
	...CreateBlobTranslation.description,
	...DownloadFileWorkspace.description,
	...UpdateUnits.description,
	...UploadFileCreateElement.description,
	...UploadFileUpdateElement.description,
];

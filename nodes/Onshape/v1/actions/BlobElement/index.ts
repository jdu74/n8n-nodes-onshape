import * as createBlobTranslation from './createBlobTranslation';
import * as downloadFileWorkspace from './downloadFileWorkspace';
import * as uploadFileUpdateElement from './uploadFileUpdateElement';
import * as updateUnits from './updateUnits';
import * as uploadFileCreateElement from './uploadFileCreateElement';

import { INodeProperties } from 'n8n-workflow';

export {
	createBlobTranslation,
	downloadFileWorkspace,
	uploadFileUpdateElement,
	updateUnits,
	uploadFileCreateElement,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'BlobElement',
				],
			},
		},
		options: [
			{
				name: 'createBlobTranslation',
				value: 'POST /api/blobelements/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				description: 'Create Translation. - post /api/blobelements/d/{did}/{wv}/{wvid}/e/{eid}/translations',
			},
			{
				name: 'downloadFileWorkspace',
				value: 'GET /api/blobelements/d/{did}/w/{wid}/e/{eid}',
				description: 'get /api/blobelements/d/{did}/w/{wid}/e/{eid}',
			},
			{
				name: 'uploadFileUpdateElement',
				value: 'POST /api/blobelements/d/{did}/w/{wid}/e/{eid}',
				description: 'Update Blob Element. - post /api/blobelements/d/{did}/w/{wid}/e/{eid}',
			},
			{
				name: 'updateUnits',
				value: 'POST /api/blobelements/d/{did}/w/{wid}/e/{eid}/units',
				description: 'Update Mesh Units. - post /api/blobelements/d/{did}/w/{wid}/e/{eid}/units',
			},
			{
				name: 'uploadFileCreateElement',
				value: 'POST /api/blobelements/d/{did}/w/{wid}',
				description: 'Upload file to new element. - post /api/blobelements/d/{did}/w/{wid}',
			},
		],
		default: 'POST /api/blobelements/d/{did}/{wv}/{wvid}/e/{eid}/translations',
		description: 'The operation to perform',
	},
	...createBlobTranslation.description,
	...downloadFileWorkspace.description,
	...uploadFileUpdateElement.description,
	...updateUnits.description,
	...uploadFileCreateElement.description,
];

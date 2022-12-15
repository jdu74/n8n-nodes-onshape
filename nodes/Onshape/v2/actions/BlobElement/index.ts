import * as uploadFileCreateElement from './uploadFileCreateElement';
import * as downloadFileWorkspace from './downloadFileWorkspace';
import * as uploadFileUpdateElement from './uploadFileUpdateElement';
import * as updateUnits from './updateUnits';
import * as createBlobTranslation from './createBlobTranslation';

import { INodeProperties } from 'n8n-workflow';

export {
	uploadFileCreateElement,
	downloadFileWorkspace,
	uploadFileUpdateElement,
	updateUnits,
	createBlobTranslation,
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
				name: 'uploadFileCreateElement',
				value: 'POST /blobelements/d/{did}/w/{wid}',
				description: 'Upload the file to a new tab by document ID and workspace ID. - post /blobelements/d/{did}/w/{wid}',
			},
			{
				name: 'downloadFileWorkspace',
				value: 'GET /blobelements/d/{did}/w/{wid}/e/{eid}',
				description: 'get /blobelements/d/{did}/w/{wid}/e/{eid}',
			},
			{
				name: 'uploadFileUpdateElement',
				value: 'POST /blobelements/d/{did}/w/{wid}/e/{eid}',
				description: 'Update a blob element by uploading a file by document ID, workspace ID, and tab ID. - post /blobelements/d/{did}/w/{wid}/e/{eid}',
			},
			{
				name: 'updateUnits',
				value: 'POST /blobelements/d/{did}/w/{wid}/e/{eid}/units',
				description: 'Update mesh units of a previously imported STL or OBJ file by document ID, workspace ID, and tab ID. - post /blobelements/d/{did}/w/{wid}/e/{eid}/units',
			},
			{
				name: 'createBlobTranslation',
				value: 'POST /blobelements/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				description: 'Create translation (export) of blob element (document tab) by document id, workspace or version ID, and tab ID. - post /blobelements/d/{did}/{wv}/{wvid}/e/{eid}/translations',
			},
		],
		default: 'POST /blobelements/d/{did}/w/{wid}',
		description: 'The operation to perform',
	},
	...uploadFileCreateElement.description,
	...downloadFileWorkspace.description,
	...uploadFileUpdateElement.description,
	...updateUnits.description,
	...createBlobTranslation.description,
];

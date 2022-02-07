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
				description: 'Upload file to new element. - post /blobelements/d/{did}/w/{wid}',
			},
			{
				name: 'downloadFileWorkspace',
				value: 'GET /blobelements/d/{did}/w/{wid}/e/{eid}',
				description: 'get /blobelements/d/{did}/w/{wid}/e/{eid}',
			},
			{
				name: 'uploadFileUpdateElement',
				value: 'POST /blobelements/d/{did}/w/{wid}/e/{eid}',
				description: 'Update Blob Element. - post /blobelements/d/{did}/w/{wid}/e/{eid}',
			},
			{
				name: 'updateUnits',
				value: 'POST /blobelements/d/{did}/w/{wid}/e/{eid}/units',
				description: 'Update Mesh Units. - post /blobelements/d/{did}/w/{wid}/e/{eid}/units',
			},
			{
				name: 'createBlobTranslation',
				value: 'POST /blobelements/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				description: 'Create Translation. - post /blobelements/d/{did}/{wv}/{wvid}/e/{eid}/translations',
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

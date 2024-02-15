import * as UploadFileCreateElement from './uploadFileCreateElement';
import * as DownloadFileWorkspace from './downloadFileWorkspace';
import * as UploadFileUpdateElement from './uploadFileUpdateElement';
import * as UpdateUnits from './updateUnits';
import * as CreateBlobTranslation from './createBlobTranslation';

import { INodeProperties } from 'n8n-workflow';

export {
	UploadFileCreateElement,
	DownloadFileWorkspace,
	UploadFileUpdateElement,
	UpdateUnits,
	CreateBlobTranslation,
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
				description: 'Request body parameters are multipart fields, so you must use `"Content-Type":"multipart/form-data"` in the request header. - post /blobelements/d/{did}/w/{wid}',
			},
			{
				name: 'downloadFileWorkspace',
				value: 'GET /blobelements/d/{did}/w/{wid}/e/{eid}',
				description: 'See [API Guide: Model Translation](https://onshape-public.github.io/docs/api-adv/translation/) for more details. - get /blobelements/d/{did}/w/{wid}/e/{eid}',
			},
			{
				name: 'uploadFileUpdateElement',
				value: 'POST /blobelements/d/{did}/w/{wid}/e/{eid}',
				description: 'Request body parameters are multipart fields, so you must use `"Content-Type":"multipart/form-data"` in the request header. - post /blobelements/d/{did}/w/{wid}/e/{eid}',
			},
			{
				name: 'updateUnits',
				value: 'POST /blobelements/d/{did}/w/{wid}/e/{eid}/units',
				description: 'Change the measurement units for the blob element. - post /blobelements/d/{did}/w/{wid}/e/{eid}/units',
			},
			{
				name: 'createBlobTranslation',
				value: 'POST /blobelements/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				description: '* Use `formatName` in the JSON request body to specify the export file type. Use [Translations/getAllTranslatorFormats](https://cad.onshape.com/glassworks/explorer/#/Translation/getAllTranslatorFormats) to get a list of valid export file formats. \n* Set `storeInDocument` to `true` to export to a data file. Set to `false` to export to a blob element in the same document. \n* See [API Guide: Model Translation](https://onshape-public.github.io/docs/api-adv/translation/) for more details. - post /blobelements/d/{did}/{wv}/{wvid}/e/{eid}/translations',
			},
		],
		default: 'POST /blobelements/d/{did}/w/{wid}',
		description: 'The operation to perform',
	},
	...UploadFileCreateElement.description,
	...DownloadFileWorkspace.description,
	...UploadFileUpdateElement.description,
	...UpdateUnits.description,
	...CreateBlobTranslation.description,
];

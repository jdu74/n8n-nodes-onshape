import * as GetVeopStandardContentMetadata from './getVEOPStandardContentMetadata';
import * as GetWmveMetadata from './getWMVEMetadata';
import * as GetWmvepMetadata from './getWMVEPMetadata';
import * as GetWmvePsMetadata from './getWMVEPsMetadata';
import * as GetWmvEsMetadata from './getWMVEsMetadata';
import * as GetWvMetadata from './getWVMetadata';
import * as UpdateVeopStandardContentPartMetadata from './updateVEOPStandardContentPartMetadata';
import * as UpdateWveMetadata from './updateWVEMetadata';
import * as UpdateWvepMetadata from './updateWVEPMetadata';
import * as UpdateWvMetadata from './updateWVMetadata';

import { INodeProperties } from 'n8n-workflow';

export {
	GetVeopStandardContentMetadata,
	GetWmveMetadata,
	GetWmvepMetadata,
	GetWmvePsMetadata,
	GetWmvEsMetadata,
	GetWvMetadata,
	UpdateVeopStandardContentPartMetadata,
	UpdateWveMetadata,
	UpdateWvepMetadata,
	UpdateWvMetadata,
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
					'Metadata',
				],
			},
		},
		default: 'GET /metadata/d/{did}/{wvm}/{wvmid}/e',
		options: [
			{
				name: 'getVEOPStandardContentMetadata',
				value: 'GET /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/p/{pid}',
				description: 'Get the metadata for a standard content part. - get /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/p/{pid}',
				action: 'Get Veop Standard Content Metadata',
			},
			{
				name: 'getWMVEMetadata',
				value: 'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'Get the metadata for an element. - get /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}',
				action: 'Get Wmve Metadata',
			},
			{
				name: 'getWMVEPMetadata',
				value: 'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
				description: 'Get the metadata for a part. - get /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
				action: 'Get Wmvep Metadata',
			},
			{
				name: 'getWMVEPsMetadata',
				value: 'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/p',
				description: 'Get the metadata for all parts in a document. - get /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/p',
				action: 'Get Wmve Ps Metadata',
			},
			{
				name: 'getWMVEsMetadata',
				value: 'GET /metadata/d/{did}/{wvm}/{wvmid}/e',
				description: 'Get the metadata for all elements in a document. - get /metadata/d/{did}/{wvm}/{wvmid}/e',
				action: 'Get Wmv Es Metadata',
			},
			{
				name: 'getWVMetadata',
				value: 'GET /metadata/d/{did}/{wv}/{wvid}',
				description: 'Get the metadata for a workspace or version. - get /metadata/d/{did}/{wv}/{wvid}',
				action: 'Get Wv Metadata',
			},
			{
				name: 'updateVEOPStandardContentPartMetadata',
				value: 'POST /metadata/standardcontent/d/{did}',
				description: 'Update the metadata for a standard content part. - post /metadata/standardcontent/d/{did}',
				action: 'Update Veop Standard Content Part Metadata',
			},
			{
				name: 'updateWVEMetadata',
				value: 'POST /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'Update the metadata for an element. - post /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}',
				action: 'Update Wve Metadata',
			},
			{
				name: 'updateWVEPMetadata',
				value: 'POST /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
				description: 'Update the metadata for a part. - post /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
				action: 'Update Wvep Metadata',
			},
			{
				name: 'updateWVMetadata',
				value: 'POST /metadata/d/{did}/{wv}/{wvid}',
				description: 'Update the metadata for a workspace or version. - post /metadata/d/{did}/{wv}/{wvid}',
				action: 'Update Wv Metadata',
			},
		],
	},
	...GetVeopStandardContentMetadata.description,
	...GetWmveMetadata.description,
	...GetWmvepMetadata.description,
	...GetWmvePsMetadata.description,
	...GetWmvEsMetadata.description,
	...GetWvMetadata.description,
	...UpdateVeopStandardContentPartMetadata.description,
	...UpdateWveMetadata.description,
	...UpdateWvepMetadata.description,
	...UpdateWvMetadata.description,
];

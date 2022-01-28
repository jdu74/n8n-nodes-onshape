import * as getVEOPStandardContentMetadata from './getVEOPStandardContentMetadata';
import * as updateVEOPStandardContentPartMetadata from './updateVEOPStandardContentPartMetadata';
import * as getWMVEMetadata from './getWMVEMetadata';
import * as updateWVEMetadata from './updateWVEMetadata';
import * as getWMVEPMetadata from './getWMVEPMetadata';
import * as updateWVEPMetadata from './updateWVEPMetadata';
import * as getWMVEPsMetadata from './getWMVEPsMetadata';
import * as getWMVEsMetadata from './getWMVEsMetadata';
import * as getWVMetadata from './getWVMetadata';
import * as updateWVMetadata from './updateWVMetadata';

import { INodeProperties } from 'n8n-workflow';

export {
	getVEOPStandardContentMetadata,
	updateVEOPStandardContentPartMetadata,
	getWMVEMetadata,
	updateWVEMetadata,
	getWMVEPMetadata,
	updateWVEPMetadata,
	getWMVEPsMetadata,
	getWMVEsMetadata,
	getWVMetadata,
	updateWVMetadata,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Metadata',
				],
			},
		},
		options: [
			{
				name: 'getVEOPStandardContentMetadata',
				value: 'GET /api/metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
				description: 'get /api/metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
			},
			{
				name: 'updateVEOPStandardContentPartMetadata',
				value: 'POST /api/metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
				description: 'post /api/metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
			},
			{
				name: 'getWMVEMetadata',
				value: 'GET /api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'get /api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}',
			},
			{
				name: 'updateWVEMetadata',
				value: 'POST /api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'post /api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}',
			},
			{
				name: 'getWMVEPMetadata',
				value: 'GET /api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
				description: 'get /api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
			},
			{
				name: 'updateWVEPMetadata',
				value: 'POST /api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
				description: 'post /api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
			},
			{
				name: 'getWMVEPsMetadata',
				value: 'GET /api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/p',
				description: 'get /api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/p',
			},
			{
				name: 'getWMVEsMetadata',
				value: 'GET /api/metadata/d/{did}/{wvm}/{wvmid}/e',
				description: 'get /api/metadata/d/{did}/{wvm}/{wvmid}/e',
			},
			{
				name: 'getWVMetadata',
				value: 'GET /api/metadata/d/{did}/{wv}/{wvid}',
				description: 'get /api/metadata/d/{did}/{wv}/{wvid}',
			},
			{
				name: 'updateWVMetadata',
				value: 'POST /api/metadata/d/{did}/{wv}/{wvid}',
				description: 'post /api/metadata/d/{did}/{wv}/{wvid}',
			},
		],
		default: 'GET /api/metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
		description: 'The operation to perform',
	},
	...getVEOPStandardContentMetadata.description,
	...updateVEOPStandardContentPartMetadata.description,
	...getWMVEMetadata.description,
	...updateWVEMetadata.description,
	...getWMVEPMetadata.description,
	...updateWVEPMetadata.description,
	...getWMVEPsMetadata.description,
	...getWMVEsMetadata.description,
	...getWVMetadata.description,
	...updateWVMetadata.description,
];

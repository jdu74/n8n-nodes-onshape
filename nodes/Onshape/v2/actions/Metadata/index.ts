import * as getWMVEsMetadata from './getWMVEsMetadata';
import * as getWMVEMetadata from './getWMVEMetadata';
import * as updateWVEMetadata from './updateWVEMetadata';
import * as getWMVEPsMetadata from './getWMVEPsMetadata';
import * as getWMVEPMetadata from './getWMVEPMetadata';
import * as updateWVEPMetadata from './updateWVEPMetadata';
import * as getWVMetadata from './getWVMetadata';
import * as updateWVMetadata from './updateWVMetadata';
import * as getVEOPStandardContentMetadata from './getVEOPStandardContentMetadata';
import * as updateVEOPStandardContentPartMetadata from './updateVEOPStandardContentPartMetadata';

import { INodeProperties } from 'n8n-workflow';

export {
	getWMVEsMetadata,
	getWMVEMetadata,
	updateWVEMetadata,
	getWMVEPsMetadata,
	getWMVEPMetadata,
	updateWVEPMetadata,
	getWVMetadata,
	updateWVMetadata,
	getVEOPStandardContentMetadata,
	updateVEOPStandardContentPartMetadata,
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
				name: 'getWMVEsMetadata',
				value: 'GET /metadata/d/{did}/{wvm}/{wvmid}/e',
				description: 'Retrieve metadata by document ID and workspace or version or microversion ID. - get /metadata/d/{did}/{wvm}/{wvmid}/e',
			},
			{
				name: 'getWMVEMetadata',
				value: 'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'Retrieve metadata by document ID, workspace or version or microversion ID, and tab ID. - get /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}',
			},
			{
				name: 'updateWVEMetadata',
				value: 'POST /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'Update workspace metadata by document ID, workspace or version or microversion ID, and tab ID. - post /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}',
			},
			{
				name: 'getWMVEPsMetadata',
				value: 'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/p',
				description: 'Retrieve metadata by document ID, workspace or version or microversion ID, and tab ID. - get /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/p',
			},
			{
				name: 'getWMVEPMetadata',
				value: 'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
				description: 'Retrieve metadata by document ID, workspace or version or microversion ID, tab ID, and Part ID. - get /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
			},
			{
				name: 'updateWVEPMetadata',
				value: 'POST /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
				description: 'Update workspace metadata by document ID, workspace or version or microversion ID, tab ID, and part ID. - post /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
			},
			{
				name: 'getWVMetadata',
				value: 'GET /metadata/d/{did}/{wv}/{wvid}',
				description: 'Retrieve workspace or version metadata by document ID and workspace or version ID. - get /metadata/d/{did}/{wv}/{wvid}',
			},
			{
				name: 'updateWVMetadata',
				value: 'POST /metadata/d/{did}/{wv}/{wvid}',
				description: 'Update workspace or version metadata by document ID and workspace or version ID. - post /metadata/d/{did}/{wv}/{wvid}',
			},
			{
				name: 'getVEOPStandardContentMetadata',
				value: 'GET /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
				description: 'Retrieve metadata of a standard content part in a version by document ID, version ID, tab ID, owner ID, and part ID. - get /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
			},
			{
				name: 'updateVEOPStandardContentPartMetadata',
				value: 'POST /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
				description: 'Update metadata of a standard content part in a version by document ID, version ID, tab ID, owner ID, and part ID. - post /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
			},
		],
		default: 'GET /metadata/d/{did}/{wvm}/{wvmid}/e',
		description: 'The operation to perform',
	},
	...getWMVEsMetadata.description,
	...getWMVEMetadata.description,
	...updateWVEMetadata.description,
	...getWMVEPsMetadata.description,
	...getWMVEPMetadata.description,
	...updateWVEPMetadata.description,
	...getWVMetadata.description,
	...updateWVMetadata.description,
	...getVEOPStandardContentMetadata.description,
	...updateVEOPStandardContentPartMetadata.description,
];

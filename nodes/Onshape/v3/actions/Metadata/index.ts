import * as GetWmvEsMetadata from './getWMVEsMetadata';
import * as GetWmveMetadata from './getWMVEMetadata';
import * as UpdateWveMetadata from './updateWVEMetadata';
import * as GetWmvePsMetadata from './getWMVEPsMetadata';
import * as GetWmvepMetadata from './getWMVEPMetadata';
import * as UpdateWvepMetadata from './updateWVEPMetadata';
import * as GetWvMetadata from './getWVMetadata';
import * as UpdateWvMetadata from './updateWVMetadata';
import * as UpdateVeopStandardContentPartMetadata from './updateVEOPStandardContentPartMetadata';
import * as GetVeopStandardContentMetadata from './getVEOPStandardContentMetadata';

import { INodeProperties } from 'n8n-workflow';

export {
	GetWmvEsMetadata,
	GetWmveMetadata,
	UpdateWveMetadata,
	GetWmvePsMetadata,
	GetWmvepMetadata,
	UpdateWvepMetadata,
	GetWvMetadata,
	UpdateWvMetadata,
	UpdateVeopStandardContentPartMetadata,
	GetVeopStandardContentMetadata,
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
				description: '* You can specify the optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`. \n* `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner. \n* `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`. \n* `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`. \n* You can also choose to include a `thumbnail`. Default value is `false`. - get /metadata/d/{did}/{wvm}/{wvmid}/e',
			},
			{
				name: 'getWMVEMetadata',
				value: 'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: '* `linkDocumentId` can be specified where applicable and this combined with the query param `inferMetadataOwner` (default value is `false`) will be used to infer metadata owner. \n* `configuration` optional query parameter defaults to default configuration. \n* You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`. \n* `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`. \n* `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`. \n* You can also choose to include a `thumbnail`. Default value is `false`. - get /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}',
			},
			{
				name: 'updateWVEMetadata',
				value: 'POST /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: '* Microversion (`m`) in `wvm` path parameter option is not supported. \n* Specify the property metadata to update in the Request body. - post /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}',
			},
			{
				name: 'getWMVEPsMetadata',
				value: 'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/p',
				description: '* The `configuration` optional query parameter uses the default configuration unless otherwise specified. \n* You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`. \n* `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner. \n* `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`. \n* `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`. \n* You can also choose to include a `thumbnail`. Default value is `false`. - get /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/p',
			},
			{
				name: 'getWMVEPMetadata',
				value: 'GET /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
				description: '* Specify the part in the `iden` or `pid` path parameter. \n* The `configuration` optional query parameter uses the default configuration unless otherwise specified. \n* `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner. \n* `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`. \n* `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`. \n* You can also choose to include a `thumbnail`. Default value is `false`. - get /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
			},
			{
				name: 'updateWVEPMetadata',
				value: 'POST /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
				description: '* Specify the part in the `iden` or `pid` path parameter. \n* The `configuration` optional query parameter uses the default configuration unless otherwise specified. \n* `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner. \n* Specify the property metadata to update in the Request body. - post /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}',
			},
			{
				name: 'getWVMetadata',
				value: 'GET /metadata/d/{did}/{wv}/{wvid}',
				description: '* `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner. \n* You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`. \n* `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`. \n* `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`. \n* You can also choose to include a `thumbnail`. Default value is `false`. - get /metadata/d/{did}/{wv}/{wvid}',
			},
			{
				name: 'updateWVMetadata',
				value: 'POST /metadata/d/{did}/{wv}/{wvid}',
				description: 'Specify the property metadata to update in the Request body. - post /metadata/d/{did}/{wv}/{wvid}',
			},
			{
				name: 'updateVEOPStandardContentPartMetadata',
				value: 'POST /metadata/standardcontent/d/{did}',
				description: '* Specify the document ID to update in the `did` path param. \n* Specify the document in which you have inserted the standard content part in the `linkDocumentId` query param. \n* Specify the property metadata to update in the Request body. - post /metadata/standardcontent/d/{did}',
			},
			{
				name: 'getVEOPStandardContentMetadata',
				value: 'GET /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/p/{pid}',
				description: '* Specify the part in the `pid` path parameter. \n* The `configuration` and `linkDocumentId` query parameters are required. \n* `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`. \n* `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`. \n* You can also choose to include a `thumbnail`. Default value is `false`. - get /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/p/{pid}',
			},
		],
		default: 'GET /metadata/d/{did}/{wvm}/{wvmid}/e',
		description: 'The operation to perform',
	},
	...GetWmvEsMetadata.description,
	...GetWmveMetadata.description,
	...UpdateWveMetadata.description,
	...GetWmvePsMetadata.description,
	...GetWmvepMetadata.description,
	...UpdateWvepMetadata.description,
	...GetWvMetadata.description,
	...UpdateWvMetadata.description,
	...UpdateVeopStandardContentPartMetadata.description,
	...GetVeopStandardContentMetadata.description,
];

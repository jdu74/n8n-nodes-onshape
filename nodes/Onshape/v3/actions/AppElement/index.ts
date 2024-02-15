import * as CreateElement from './createElement';
import * as BulkCreateElement from './bulkCreateElement';
import * as DownloadBlobSubelementWorkspace from './downloadBlobSubelementWorkspace';
import * as UploadBlobSubelement from './uploadBlobSubelement';
import * as DeleteBlobSubelement from './deleteBlobSubelement';
import * as GetElementTransactions from './getElementTransactions';
import * as StartTransaction from './startTransaction';
import * as AbortTransaction from './abortTransaction';
import * as CommitTransactions from './commitTransactions';
import * as DownloadBlobSubelement from './downloadBlobSubelement';
import * as GetBlobSubelementIds from './getBlobSubelementIds';
import * as CompareAppElementJson from './compareAppElementJson';
import * as GetSubElementContent from './getSubElementContent';
import * as UpdateAppElement from './updateAppElement';
import * as GetAppElementHistory from './getAppElementHistory';
import * as GetSubelementIds from './getSubelementIds';
import * as GetJson from './getJson';
import * as GetJsonPaths from './getJsonPaths';
import * as DeleteAppElementContentBatch from './deleteAppElementContentBatch';
import * as DeleteAppElementContent from './deleteAppElementContent';
import * as CreateReference from './createReference';
import * as ResolveReference from './resolveReference';
import * as UpdateReference from './updateReference';
import * as DeleteReference from './deleteReference';
import * as ResolveReferences from './resolveReferences';

import { INodeProperties } from 'n8n-workflow';

export {
	CreateElement,
	BulkCreateElement,
	DownloadBlobSubelementWorkspace,
	UploadBlobSubelement,
	DeleteBlobSubelement,
	GetElementTransactions,
	StartTransaction,
	AbortTransaction,
	CommitTransactions,
	DownloadBlobSubelement,
	GetBlobSubelementIds,
	CompareAppElementJson,
	GetSubElementContent,
	UpdateAppElement,
	GetAppElementHistory,
	GetSubelementIds,
	GetJson,
	GetJsonPaths,
	DeleteAppElementContentBatch,
	DeleteAppElementContent,
	CreateReference,
	ResolveReference,
	UpdateReference,
	DeleteReference,
	ResolveReferences,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'AppElement',
				],
			},
		},
		options: [
			{
				name: 'createElement',
				value: 'POST /appelements/d/{did}/w/{wid}',
				description: 'Create a new application element. - post /appelements/d/{did}/w/{wid}',
			},
			{
				name: 'bulkCreateElement',
				value: 'POST /appelements/d/{did}/w/{wid}/bulkcreate',
				description: 'Call this faster API instead of creating multiple app elements one at a time or in parallel. - post /appelements/d/{did}/w/{wid}/bulkcreate',
			},
			{
				name: 'downloadBlobSubelementWorkspace',
				value: 'GET /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
				description: 'The downloaded file can be used to retrieve stored subelements. - get /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
			},
			{
				name: 'uploadBlobSubelement',
				value: 'POST /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
				description: 'Request body parameters are multipart fields, so you must use `"Content-Type":"multipart/form-data"` in the request header. - post /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
			},
			{
				name: 'deleteBlobSubelement',
				value: 'DELETE /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
				description: 'Delete a blob subelement from an app element. - delete /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
			},
			{
				name: 'getElementTransactions',
				value: 'GET /appelements/d/{did}/w/{wid}/e/{eid}/transactions',
				description: 'Get a list of all transactions performed on an element. - get /appelements/d/{did}/w/{wid}/e/{eid}/transactions',
			},
			{
				name: 'startTransaction',
				value: 'POST /appelements/d/{did}/w/{wid}/e/{eid}/transactions',
				description: 'Creates a microbranch (i.e., a branch for a new microversion). - post /appelements/d/{did}/w/{wid}/e/{eid}/transactions',
			},
			{
				name: 'abortTransaction',
				value: 'DELETE /appelements/d/{did}/w/{wid}/e/{eid}/transactions/{tid}',
				description: 'Deletes a microbranch (i.e., the branch with the microversion for the transaction). - delete /appelements/d/{did}/w/{wid}/e/{eid}/transactions/{tid}',
			},
			{
				name: 'commitTransactions',
				value: 'POST /appelements/d/{did}/w/{wid}/transactions',
				description: 'If successful, all transactions will be committed to a single microversion. If the call raises an error, nothing will be committed. - post /appelements/d/{did}/w/{wid}/transactions',
			},
			{
				name: 'downloadBlobSubelement',
				value: 'GET /appelements/d/{did}/{vm}/{vmid}/e/{eid}/blob/{bid}',
				description: 'Download a blob subelement as a file. - get /appelements/d/{did}/{vm}/{vmid}/e/{eid}/blob/{bid}',
			},
			{
				name: 'getBlobSubelementIds',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/blob',
				description: 'Get a list of all blob subelement IDs for the specified workspace, version, or microversion. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/blob',
			},
			{
				name: 'compareAppElementJson',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
				description: 'Specify the source workspace/version/microversion in the URL and specify the target workspace/version/microversion in the query parameters. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
			},
			{
				name: 'getSubElementContent',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
				description: 'Get a list of all subelement IDs in a specified workspace/version/microversion. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
			},
			{
				name: 'updateAppElement',
				value: 'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
				description: 'Update the content for the specified app element. - post /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
			},
			{
				name: 'getAppElementHistory',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/history',
				description: 'Get the history of the specified all element. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/history',
			},
			{
				name: 'getSubelementIds',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/ids',
				description: 'Get a list of all subelement IDs in a specified workspace/version/microversion. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/ids',
			},
			{
				name: 'getJson',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/json',
				description: 'Get the full JSON tree for the specified workspace/version/microversion. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/json',
			},
			{
				name: 'getJsonPaths',
				value: 'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/jsonpaths',
				description: 'Use this endpoint to return the JSON at the specified path instead of returning the entire JSON for the element. This POST endpoint does not write any information. - post /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/jsonpaths',
			},
			{
				name: 'deleteAppElementContentBatch',
				value: 'DELETE /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements',
				description: 'Delete multiple subelements array by document ID, workspace or version or microversion ID, tab ID, and subelement IDs. - delete /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements',
			},
			{
				name: 'deleteAppElementContent',
				value: 'DELETE /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
				description: 'Deletes the content from the specified app element. - delete /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
			},
			{
				name: 'createReference',
				value: 'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references',
				description: 'Creates a reference to an app element. - post /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references',
			},
			{
				name: 'resolveReference',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				description: 'For single operations only. Use `resolveReferences` for bulk operations. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
			},
			{
				name: 'updateReference',
				value: 'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				description: 'Update an app element reference. - post /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
			},
			{
				name: 'deleteReference',
				value: 'DELETE /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				description: 'Delete an app element reference. - delete /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
			},
			{
				name: 'resolveReferences',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/resolvereferences',
				description: 'For bulk operations only. Use `resolveReference` for a single operation. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/resolvereferences',
			},
		],
		default: 'POST /appelements/d/{did}/w/{wid}',
		description: 'The operation to perform',
	},
	...CreateElement.description,
	...BulkCreateElement.description,
	...DownloadBlobSubelementWorkspace.description,
	...UploadBlobSubelement.description,
	...DeleteBlobSubelement.description,
	...GetElementTransactions.description,
	...StartTransaction.description,
	...AbortTransaction.description,
	...CommitTransactions.description,
	...DownloadBlobSubelement.description,
	...GetBlobSubelementIds.description,
	...CompareAppElementJson.description,
	...GetSubElementContent.description,
	...UpdateAppElement.description,
	...GetAppElementHistory.description,
	...GetSubelementIds.description,
	...GetJson.description,
	...GetJsonPaths.description,
	...DeleteAppElementContentBatch.description,
	...DeleteAppElementContent.description,
	...CreateReference.description,
	...ResolveReference.description,
	...UpdateReference.description,
	...DeleteReference.description,
	...ResolveReferences.description,
];

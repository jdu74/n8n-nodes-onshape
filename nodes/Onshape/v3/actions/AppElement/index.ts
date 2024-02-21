import * as AbortTransaction from './abortTransaction';
import * as BulkCreateElement from './bulkCreateElement';
import * as CommitTransactions from './commitTransactions';
import * as CompareAppElementJson from './compareAppElementJson';
import * as CreateElement from './createElement';
import * as CreateReference from './createReference';
import * as DeleteAppElementContent from './deleteAppElementContent';
import * as DeleteAppElementContentBatch from './deleteAppElementContentBatch';
import * as DeleteBlobSubelement from './deleteBlobSubelement';
import * as DeleteReference from './deleteReference';
import * as DownloadBlobSubelement from './downloadBlobSubelement';
import * as DownloadBlobSubelementWorkspace from './downloadBlobSubelementWorkspace';
import * as GetAppElementHistory from './getAppElementHistory';
import * as GetBlobSubelementIds from './getBlobSubelementIds';
import * as GetElementTransactions from './getElementTransactions';
import * as GetJson from './getJson';
import * as GetJsonPaths from './getJsonPaths';
import * as GetSubElementContent from './getSubElementContent';
import * as GetSubelementIds from './getSubelementIds';
import * as ResolveReference from './resolveReference';
import * as ResolveReferences from './resolveReferences';
import * as StartTransaction from './startTransaction';
import * as UpdateAppElement from './updateAppElement';
import * as UpdateReference from './updateReference';
import * as UploadBlobSubelement from './uploadBlobSubelement';

import { INodeProperties } from 'n8n-workflow';

export {
	AbortTransaction,
	BulkCreateElement,
	CommitTransactions,
	CompareAppElementJson,
	CreateElement,
	CreateReference,
	DeleteAppElementContent,
	DeleteAppElementContentBatch,
	DeleteBlobSubelement,
	DeleteReference,
	DownloadBlobSubelement,
	DownloadBlobSubelementWorkspace,
	GetAppElementHistory,
	GetBlobSubelementIds,
	GetElementTransactions,
	GetJson,
	GetJsonPaths,
	GetSubElementContent,
	GetSubelementIds,
	ResolveReference,
	ResolveReferences,
	StartTransaction,
	UpdateAppElement,
	UpdateReference,
	UploadBlobSubelement,
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
					'AppElement',
				],
			},
		},
		default: 'POST /appelements/d/{did}/w/{wid}',
		options: [
			{
				name: 'abortTransaction',
				value: 'DELETE /appelements/d/{did}/w/{wid}/e/{eid}/transactions/{tid}',
				description: 'Abort a transaction. - delete /appelements/d/{did}/w/{wid}/e/{eid}/transactions/{tid}',
				action: 'Abort Transaction',
			},
			{
				name: 'bulkCreateElement',
				value: 'POST /appelements/d/{did}/w/{wid}/bulkcreate',
				description: 'Create multiple empty application elements at once. - post /appelements/d/{did}/w/{wid}/bulkcreate',
				action: 'Bulk Create Element',
			},
			{
				name: 'commitTransactions',
				value: 'POST /appelements/d/{did}/w/{wid}/transactions',
				description: 'Merge multiple transactions into one microversion. - post /appelements/d/{did}/w/{wid}/transactions',
				action: 'Commit Transactions',
			},
			{
				name: 'compareAppElementJson',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
				description: 'Compare app element JSON trees between workspaces/versions/microversions in a document. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
				action: 'Compare App Element Json',
			},
			{
				name: 'createElement',
				value: 'POST /appelements/d/{did}/w/{wid}',
				description: 'Create a new application element. - post /appelements/d/{did}/w/{wid}',
				action: 'Create Element',
			},
			{
				name: 'createReference',
				value: 'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references',
				description: 'Creates a reference to an app element. - post /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references',
				action: 'Create Reference',
			},
			{
				name: 'deleteAppElementContent',
				value: 'DELETE /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
				description: 'Deletes the content from the specified app element. - delete /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
				action: 'Delete App Element Content',
			},
			{
				name: 'deleteAppElementContentBatch',
				value: 'DELETE /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements',
				description: 'Delete multiple subelements array by document ID, workspace or version or microversion ID, tab ID, and subelement IDs. - delete /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements',
				action: 'Delete App Element Content Batch',
			},
			{
				name: 'deleteBlobSubelement',
				value: 'DELETE /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
				description: 'Delete a blob subelement from an app element. - delete /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
				action: 'Delete Blob Subelement',
			},
			{
				name: 'deleteReference',
				value: 'DELETE /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				description: 'Delete an app element reference. - delete /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				action: 'Delete Reference',
			},
			{
				name: 'downloadBlobSubelement',
				value: 'GET /appelements/d/{did}/{vm}/{vmid}/e/{eid}/blob/{bid}',
				description: 'Download a blob subelement from the specified app element. - get /appelements/d/{did}/{vm}/{vmid}/e/{eid}/blob/{bid}',
				action: 'Download Blob Subelement',
			},
			{
				name: 'downloadBlobSubelementWorkspace',
				value: 'GET /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
				description: "Download the blob element (i.e., a file) stored in an app element in a document's workspace. - get /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}",
				action: 'Download Blob Subelement Workspace',
			},
			{
				name: 'getAppElementHistory',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/history',
				description: 'Get the history of the specified all element. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/history',
				action: 'Get App Element History',
			},
			{
				name: 'getBlobSubelementIds',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/blob',
				description: 'Get a list of all blob subelement IDs for the specified workspace, version, or microversion. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/blob',
				action: 'Get Blob Subelement Ids',
			},
			{
				name: 'getElementTransactions',
				value: 'GET /appelements/d/{did}/w/{wid}/e/{eid}/transactions',
				description: 'Get a list of all transactions performed on an element. - get /appelements/d/{did}/w/{wid}/e/{eid}/transactions',
				action: 'Get Element Transactions',
			},
			{
				name: 'getJson',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/json',
				description: 'Get the full JSON tree for the specified workspace/version/microversion. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/json',
				action: 'Get Json',
			},
			{
				name: 'getJsonPaths',
				value: 'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/jsonpaths',
				description: 'Get the JSON at specified paths for an element. - post /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/jsonpaths',
				action: 'Get Json Paths',
			},
			{
				name: 'getSubElementContent',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
				description: 'Get a list of all subelement IDs in a specified workspace/version/microversion. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
				action: 'Get Sub Element Content',
			},
			{
				name: 'getSubelementIds',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/ids',
				description: 'Get a list of all subelement IDs in a specified workspace/version/microversion. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/ids',
				action: 'Get Subelement Ids',
			},
			{
				name: 'resolveReference',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				description: 'Resolves a single reference to an app element. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				action: 'Resolve Reference',
			},
			{
				name: 'resolveReferences',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/resolvereferences',
				description: 'Resolves bulk app element references. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/resolvereferences',
				action: 'Resolve References',
			},
			{
				name: 'startTransaction',
				value: 'POST /appelements/d/{did}/w/{wid}/e/{eid}/transactions',
				description: 'Start a transaction - post /appelements/d/{did}/w/{wid}/e/{eid}/transactions',
				action: 'Start Transaction',
			},
			{
				name: 'updateAppElement',
				value: 'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
				description: 'Update the content for the specified app element. - post /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
				action: 'Update App Element',
			},
			{
				name: 'updateReference',
				value: 'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				description: 'Update an app element reference. - post /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				action: 'Update Reference',
			},
			{
				name: 'uploadBlobSubelement',
				value: 'POST /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
				description: 'Create a new blob subelement from an uploaded file. - post /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
				action: 'Upload Blob Subelement',
			},
		],
	},
	...AbortTransaction.description,
	...BulkCreateElement.description,
	...CommitTransactions.description,
	...CompareAppElementJson.description,
	...CreateElement.description,
	...CreateReference.description,
	...DeleteAppElementContent.description,
	...DeleteAppElementContentBatch.description,
	...DeleteBlobSubelement.description,
	...DeleteReference.description,
	...DownloadBlobSubelement.description,
	...DownloadBlobSubelementWorkspace.description,
	...GetAppElementHistory.description,
	...GetBlobSubelementIds.description,
	...GetElementTransactions.description,
	...GetJson.description,
	...GetJsonPaths.description,
	...GetSubElementContent.description,
	...GetSubelementIds.description,
	...ResolveReference.description,
	...ResolveReferences.description,
	...StartTransaction.description,
	...UpdateAppElement.description,
	...UpdateReference.description,
	...UploadBlobSubelement.description,
];

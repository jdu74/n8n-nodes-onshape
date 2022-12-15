import * as createElement from './createElement';
import * as bulkCreateElement from './bulkCreateElement';
import * as downloadBlobSubelementWorkspace from './downloadBlobSubelementWorkspace';
import * as uploadBlobSubelement from './uploadBlobSubelement';
import * as deleteBlobSubelement from './deleteBlobSubelement';
import * as getElementTransactions from './getElementTransactions';
import * as startTransaction from './startTransaction';
import * as abortTransaction from './abortTransaction';
import * as commitTransactions from './commitTransactions';
import * as downloadBlobSubelement from './downloadBlobSubelement';
import * as getBlobSubelementIds from './getBlobSubelementIds';
import * as compareAppElementJson from './compareAppElementJson';
import * as getSubElementContent from './getSubElementContent';
import * as updateAppElement from './updateAppElement';
import * as getAppElementHistory from './getAppElementHistory';
import * as getSubelementIds from './getSubelementIds';
import * as getJson from './getJson';
import * as getJsonPaths from './getJsonPaths';
import * as deleteAppElementContent from './deleteAppElementContent';
import * as createReference from './createReference';
import * as resolveReference from './resolveReference';
import * as updateReference from './updateReference';
import * as deleteReference from './deleteReference';
import * as resolveReferences from './resolveReferences';

import { INodeProperties } from 'n8n-workflow';

export {
	createElement,
	bulkCreateElement,
	downloadBlobSubelementWorkspace,
	uploadBlobSubelement,
	deleteBlobSubelement,
	getElementTransactions,
	startTransaction,
	abortTransaction,
	commitTransactions,
	downloadBlobSubelement,
	getBlobSubelementIds,
	compareAppElementJson,
	getSubElementContent,
	updateAppElement,
	getAppElementHistory,
	getSubelementIds,
	getJson,
	getJsonPaths,
	deleteAppElementContent,
	createReference,
	resolveReference,
	updateReference,
	deleteReference,
	resolveReferences,
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
				description: 'Create application tab by document ID and workspace ID. - post /appelements/d/{did}/w/{wid}',
			},
			{
				name: 'bulkCreateElement',
				value: 'POST /appelements/d/{did}/w/{wid}/bulkcreate',
				description: 'Creates several new empty application elements in the document. - post /appelements/d/{did}/w/{wid}/bulkcreate',
			},
			{
				name: 'downloadBlobSubelementWorkspace',
				value: 'GET /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
				description: 'Download blob subelement as a file by document ID, workspace ID, tab ID, and blob ID. A Subelement is used to store and organize data. - get /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
			},
			{
				name: 'uploadBlobSubelement',
				value: 'POST /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
				description: 'Upload blob subelement file by document ID, workspace ID, tab ID, and blob ID. A Subelement is used to store and organize data. - post /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
			},
			{
				name: 'deleteBlobSubelement',
				value: 'DELETE /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
				description: 'Delete blob subelement file by document ID, workspace ID, tab ID, and blob ID. A Subelement is used to store and organize data. - delete /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
			},
			{
				name: 'getElementTransactions',
				value: 'GET /appelements/d/{did}/w/{wid}/e/{eid}/transactions',
				description: 'Retrieve an array of tab transactions by document ID, workspace ID, and tab ID. - get /appelements/d/{did}/w/{wid}/e/{eid}/transactions',
			},
			{
				name: 'startTransaction',
				value: 'POST /appelements/d/{did}/w/{wid}/e/{eid}/transactions',
				description: 'Start application tab transaction by document ID, workspace ID, and tab ID. - post /appelements/d/{did}/w/{wid}/e/{eid}/transactions',
			},
			{
				name: 'abortTransaction',
				value: 'DELETE /appelements/d/{did}/w/{wid}/e/{eid}/transactions/{tid}',
				description: 'Abort transaction by document ID, workspace ID, tab ID, and transaction ID. - delete /appelements/d/{did}/w/{wid}/e/{eid}/transactions/{tid}',
			},
			{
				name: 'commitTransactions',
				value: 'POST /appelements/d/{did}/w/{wid}/transactions',
				description: 'Commit transactions by document ID and workspace ID. - post /appelements/d/{did}/w/{wid}/transactions',
			},
			{
				name: 'downloadBlobSubelement',
				value: 'GET /appelements/d/{did}/{vm}/{vmid}/e/{eid}/blob/{bid}',
				description: 'Download blob subelement file by document ID, version or microversion ID, tab ID, and blob ID. A Subelement is used to store and organize data. - get /appelements/d/{did}/{vm}/{vmid}/e/{eid}/blob/{bid}',
			},
			{
				name: 'getBlobSubelementIds',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/blob',
				description: 'Retrieve an array of blob subelement IDs by document ID and workspace or microversion ID. A Subelement is used to store and organize data. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/blob',
			},
			{
				name: 'compareAppElementJson',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
				description: 'Compare JSON by document ID, workspace or version or microversion ID, and tab ID. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
			},
			{
				name: 'getSubElementContent',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
				description: 'Retrieve subelement content by document ID, tab ID, and workspace or version or microversion ID. A Subelement is used to store and organize data. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
			},
			{
				name: 'updateAppElement',
				value: 'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
				description: 'Update application tab by document ID, workspace or version or microversion ID, and tab ID. - post /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
			},
			{
				name: 'getAppElementHistory',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/history',
				description: 'Retrieve history by document ID, workspace or version or microversion ID, and tab ID. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/history',
			},
			{
				name: 'getSubelementIds',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/ids',
				description: 'Retrieve subelement IDs by document ID, workspace or version or microversion ID, and tab ID. A Subelement is used to store and organize data. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/ids',
			},
			{
				name: 'getJson',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/json',
				description: 'Retrieve JSON by document ID, workspace or version or microversion ID, and tab ID. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/json',
			},
			{
				name: 'getJsonPaths',
				value: 'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/jsonpaths',
				description: 'Retrieve JSON paths by document ID, workspace or version or microversion ID, and tab ID. - post /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/jsonpaths',
			},
			{
				name: 'deleteAppElementContent',
				value: 'DELETE /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
				description: 'Delete subelement array by document ID, workspace or version or microversion ID, tab ID, and subelement ID. A Subelement is used to store and organize data. - delete /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
			},
			{
				name: 'createReference',
				value: 'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references',
				description: 'Create referencesby document ID, workspace or version or microversion ID, and tab ID. - post /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references',
			},
			{
				name: 'resolveReference',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				description: 'Resolve references by document ID, workspace or version or microversion ID, tab ID and resolve ID. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
			},
			{
				name: 'updateReference',
				value: 'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				description: 'Update references by document ID, workspace or version or microversion ID, tab ID, and resolve ID. - post /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
			},
			{
				name: 'deleteReference',
				value: 'DELETE /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				description: 'Delete references by document ID, workspace or version or microversion ID, tab ID, and resolve ID. - delete /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
			},
			{
				name: 'resolveReferences',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/resolvereferences',
				description: 'Resolve references by document ID, workspace or version or microversion ID, and tab ID. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/resolvereferences',
			},
		],
		default: 'POST /appelements/d/{did}/w/{wid}',
		description: 'The operation to perform',
	},
	...createElement.description,
	...bulkCreateElement.description,
	...downloadBlobSubelementWorkspace.description,
	...uploadBlobSubelement.description,
	...deleteBlobSubelement.description,
	...getElementTransactions.description,
	...startTransaction.description,
	...abortTransaction.description,
	...commitTransactions.description,
	...downloadBlobSubelement.description,
	...getBlobSubelementIds.description,
	...compareAppElementJson.description,
	...getSubElementContent.description,
	...updateAppElement.description,
	...getAppElementHistory.description,
	...getSubelementIds.description,
	...getJson.description,
	...getJsonPaths.description,
	...deleteAppElementContent.description,
	...createReference.description,
	...resolveReference.description,
	...updateReference.description,
	...deleteReference.description,
	...resolveReferences.description,
];

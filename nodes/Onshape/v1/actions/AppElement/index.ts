import * as createElement from './createElement';
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
				description: 'Create App Element - post /appelements/d/{did}/w/{wid}',
			},
			{
				name: 'downloadBlobSubelementWorkspace',
				value: 'GET /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
				description: 'get /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
			},
			{
				name: 'uploadBlobSubelement',
				value: 'POST /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
				description: 'Upload Blob Subelement - post /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
			},
			{
				name: 'deleteBlobSubelement',
				value: 'DELETE /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
				description: 'Delete Blob Subelement - delete /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
			},
			{
				name: 'getElementTransactions',
				value: 'GET /appelements/d/{did}/w/{wid}/e/{eid}/transactions',
				description: 'List App Element Transactions - get /appelements/d/{did}/w/{wid}/e/{eid}/transactions',
			},
			{
				name: 'startTransaction',
				value: 'POST /appelements/d/{did}/w/{wid}/e/{eid}/transactions',
				description: 'Start App Element Transaction - post /appelements/d/{did}/w/{wid}/e/{eid}/transactions',
			},
			{
				name: 'abortTransaction',
				value: 'DELETE /appelements/d/{did}/w/{wid}/e/{eid}/transactions/{tid}',
				description: 'Abort Transaction - delete /appelements/d/{did}/w/{wid}/e/{eid}/transactions/{tid}',
			},
			{
				name: 'commitTransactions',
				value: 'POST /appelements/d/{did}/w/{wid}/transactions',
				description: 'Commit Transactions - post /appelements/d/{did}/w/{wid}/transactions',
			},
			{
				name: 'downloadBlobSubelement',
				value: 'GET /appelements/d/{did}/{vm}/{vmid}/e/{eid}/blob/{bid}',
				description: 'Download Blob Subelement - get /appelements/d/{did}/{vm}/{vmid}/e/{eid}/blob/{bid}',
			},
			{
				name: 'getBlobSubelementIds',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/blob',
				description: 'Get Blob Subelement IDs - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/blob',
			},
			{
				name: 'compareAppElementJson',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
				description: 'Compare Json - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
			},
			{
				name: 'getSubElementContent',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
				description: 'Get Subelement Content - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
			},
			{
				name: 'updateAppElement',
				value: 'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
				description: 'Update App Element - post /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
			},
			{
				name: 'getAppElementHistory',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/history',
				description: 'Get History - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/history',
			},
			{
				name: 'getSubelementIds',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/ids',
				description: 'Get Subelement IDs - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/ids',
			},
			{
				name: 'getJson',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/json',
				description: 'Get Json - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/json',
			},
			{
				name: 'getJsonPaths',
				value: 'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/jsonpaths',
				description: 'Get Json Paths - post /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/jsonpaths',
			},
			{
				name: 'deleteAppElementContent',
				value: 'DELETE /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
				description: 'Delete a Subelement - delete /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
			},
			{
				name: 'createReference',
				value: 'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references',
				description: 'Create Reference - post /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references',
			},
			{
				name: 'resolveReference',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				description: 'Resolve Reference - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
			},
			{
				name: 'updateReference',
				value: 'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				description: 'Update Reference - post /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
			},
			{
				name: 'deleteReference',
				value: 'DELETE /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				description: 'Delete Reference - delete /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
			},
			{
				name: 'resolveReferences',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/resolvereferences',
				description: 'Resolve references. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/resolvereferences',
			},
		],
		default: 'POST /appelements/d/{did}/w/{wid}',
		description: 'The operation to perform',
	},
	...createElement.description,
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

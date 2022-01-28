import * as abortTransaction from './abortTransaction';
import * as commitTransactions from './commitTransactions';
import * as compareAppElementJson from './compareAppElementJson';
import * as createElement from './createElement';
import * as createReference from './createReference';
import * as deleteAppElementContent from './deleteAppElementContent';
import * as downloadBlobSubelementWorkspace from './downloadBlobSubelementWorkspace';
import * as uploadBlobSubelement from './uploadBlobSubelement';
import * as deleteBlobSubelement from './deleteBlobSubelement';
import * as resolveReference from './resolveReference';
import * as updateReference from './updateReference';
import * as deleteReference from './deleteReference';
import * as downloadBlobSubelement from './downloadBlobSubelement';
import * as getAppElementHistory from './getAppElementHistory';
import * as getBlobSubelementIds from './getBlobSubelementIds';
import * as getElementTransactions from './getElementTransactions';
import * as startTransaction from './startTransaction';
import * as getJson from './getJson';
import * as getJsonPaths from './getJsonPaths';
import * as getSubElementContent from './getSubElementContent';
import * as updateAppElement from './updateAppElement';
import * as getSubelementIds from './getSubelementIds';
import * as resolveReferences from './resolveReferences';

import { INodeProperties } from 'n8n-workflow';

export {
	abortTransaction,
	commitTransactions,
	compareAppElementJson,
	createElement,
	createReference,
	deleteAppElementContent,
	downloadBlobSubelementWorkspace,
	uploadBlobSubelement,
	deleteBlobSubelement,
	resolveReference,
	updateReference,
	deleteReference,
	downloadBlobSubelement,
	getAppElementHistory,
	getBlobSubelementIds,
	getElementTransactions,
	startTransaction,
	getJson,
	getJsonPaths,
	getSubElementContent,
	updateAppElement,
	getSubelementIds,
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
				name: 'abortTransaction',
				value: 'DELETE /api/appelements/d/{did}/w/{wid}/e/{eid}/transactions/{tid}',
				description: 'Abort Transaction - delete /api/appelements/d/{did}/w/{wid}/e/{eid}/transactions/{tid}',
			},
			{
				name: 'commitTransactions',
				value: 'POST /api/appelements/d/{did}/w/{wid}/transactions',
				description: 'Commit Transactions - post /api/appelements/d/{did}/w/{wid}/transactions',
			},
			{
				name: 'compareAppElementJson',
				value: 'GET /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
				description: 'Compare Json - get /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
			},
			{
				name: 'createElement',
				value: 'POST /api/appelements/d/{did}/w/{wid}',
				description: 'Create App Element - post /api/appelements/d/{did}/w/{wid}',
			},
			{
				name: 'createReference',
				value: 'POST /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references',
				description: 'Create Reference - post /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references',
			},
			{
				name: 'deleteAppElementContent',
				value: 'DELETE /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
				description: 'Delete a Subelement - delete /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
			},
			{
				name: 'downloadBlobSubelementWorkspace',
				value: 'GET /api/appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
				description: 'get /api/appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
			},
			{
				name: 'uploadBlobSubelement',
				value: 'POST /api/appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
				description: 'Upload Blob Subelement - post /api/appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
			},
			{
				name: 'deleteBlobSubelement',
				value: 'DELETE /api/appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
				description: 'Delete Blob Subelement - delete /api/appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}',
			},
			{
				name: 'resolveReference',
				value: 'GET /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				description: 'Resolve Reference - get /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
			},
			{
				name: 'updateReference',
				value: 'POST /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				description: 'Update Reference - post /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
			},
			{
				name: 'deleteReference',
				value: 'DELETE /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				description: 'Delete Reference - delete /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
			},
			{
				name: 'downloadBlobSubelement',
				value: 'GET /api/appelements/d/{did}/{vm}/{vmid}/e/{eid}/blob/{bid}',
				description: 'Download Blob Subelement - get /api/appelements/d/{did}/{vm}/{vmid}/e/{eid}/blob/{bid}',
			},
			{
				name: 'getAppElementHistory',
				value: 'GET /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/history',
				description: 'Get History - get /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/history',
			},
			{
				name: 'getBlobSubelementIds',
				value: 'GET /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/blob',
				description: 'Get Blob Subelement IDs - get /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/blob',
			},
			{
				name: 'getElementTransactions',
				value: 'GET /api/appelements/d/{did}/w/{wid}/e/{eid}/transactions',
				description: 'List App Element Transactions - get /api/appelements/d/{did}/w/{wid}/e/{eid}/transactions',
			},
			{
				name: 'startTransaction',
				value: 'POST /api/appelements/d/{did}/w/{wid}/e/{eid}/transactions',
				description: 'Start App Element Transaction - post /api/appelements/d/{did}/w/{wid}/e/{eid}/transactions',
			},
			{
				name: 'getJson',
				value: 'GET /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/json',
				description: 'Get Json - get /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/json',
			},
			{
				name: 'getJsonPaths',
				value: 'POST /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/jsonpaths',
				description: 'Get Json Paths - post /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/jsonpaths',
			},
			{
				name: 'getSubElementContent',
				value: 'GET /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
				description: 'Get Subelement Content - get /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
			},
			{
				name: 'updateAppElement',
				value: 'POST /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
				description: 'Update App Element - post /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
			},
			{
				name: 'getSubelementIds',
				value: 'GET /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/ids',
				description: 'Get Subelement IDs - get /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/ids',
			},
			{
				name: 'resolveReferences',
				value: 'GET /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/resolvereferences',
				description: 'Resolve references. - get /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/resolvereferences',
			},
		],
		default: 'DELETE /api/appelements/d/{did}/w/{wid}/e/{eid}/transactions/{tid}',
		description: 'The operation to perform',
	},
	...abortTransaction.description,
	...commitTransactions.description,
	...compareAppElementJson.description,
	...createElement.description,
	...createReference.description,
	...deleteAppElementContent.description,
	...downloadBlobSubelementWorkspace.description,
	...uploadBlobSubelement.description,
	...deleteBlobSubelement.description,
	...resolveReference.description,
	...updateReference.description,
	...deleteReference.description,
	...downloadBlobSubelement.description,
	...getAppElementHistory.description,
	...getBlobSubelementIds.description,
	...getElementTransactions.description,
	...startTransaction.description,
	...getJson.description,
	...getJsonPaths.description,
	...getSubElementContent.description,
	...updateAppElement.description,
	...getSubelementIds.description,
	...resolveReferences.description,
];

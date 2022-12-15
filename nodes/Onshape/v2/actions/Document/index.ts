import * as getDocuments from './getDocuments';
import * as createDocument from './createDocument';
import * as downloadExternalData from './downloadExternalData';
import * as getDocumentVersions from './getDocumentVersions';
import * as createVersion from './createVersion';
import * as getVersion from './getVersion';
import * as updateExternalReferencesToLatestDocuments from './updateExternalReferencesToLatestDocuments';
import * as moveElementsToDocument from './moveElementsToDocument';
import * as revertUnchangedToRevisions from './revertUnchangedToRevisions';
import * as syncApplicationElements from './syncApplicationElements';
import * as getDocumentWorkspaces from './getDocumentWorkspaces';
import * as createWorkspace from './createWorkspace';
import * as deleteWorkspace from './deleteWorkspace';
import * as getDocumentHistory from './getDocumentHistory';
import * as getElementsInDocument from './getElementsInDocument';
import * as getUnitInfo from './getUnitInfo';
import * as getCurrentMicroversion from './getCurrentMicroversion';
import * as export2Json from './export2Json';
import * as getInsertables from './getInsertables';
import * as search from './search';
import * as getDocument from './getDocument';
import * as updateDocumentAttributes from './updateDocumentAttributes';
import * as deleteDocument from './deleteDocument';
import * as getDocumentAcl from './getDocumentAcl';
import * as getDocumentPermissionSet from './getDocumentPermissionSet';
import * as shareDocument from './shareDocument';
import * as unShareDocument from './unShareDocument';
import * as shareWithSupport from './shareWithSupport';
import * as unshareFromSupport from './unshareFromSupport';
import * as mergePreview from './mergePreview';
import * as restoreFromHistory from './restoreFromHistory';
import * as copyWorkspace from './copyWorkspace';
import * as mergeIntoWorkspace from './mergeIntoWorkspace';

import { INodeProperties } from 'n8n-workflow';

export {
	getDocuments,
	createDocument,
	downloadExternalData,
	getDocumentVersions,
	createVersion,
	getVersion,
	updateExternalReferencesToLatestDocuments,
	moveElementsToDocument,
	revertUnchangedToRevisions,
	syncApplicationElements,
	getDocumentWorkspaces,
	createWorkspace,
	deleteWorkspace,
	getDocumentHistory,
	getElementsInDocument,
	getUnitInfo,
	getCurrentMicroversion,
	export2Json,
	getInsertables,
	search,
	getDocument,
	updateDocumentAttributes,
	deleteDocument,
	getDocumentAcl,
	getDocumentPermissionSet,
	shareDocument,
	unShareDocument,
	shareWithSupport,
	unshareFromSupport,
	mergePreview,
	restoreFromHistory,
	copyWorkspace,
	mergeIntoWorkspace,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Document',
				],
			},
		},
		options: [
			{
				name: 'getDocuments',
				value: 'GET /documents',
				description: 'Retrieve a document. - get /documents',
			},
			{
				name: 'createDocument',
				value: 'POST /documents',
				description: 'Create and upload a document. - post /documents',
			},
			{
				name: 'downloadExternalData',
				value: 'GET /documents/d/{did}/externaldata/{fid}',
				description: 'Retrieve external data by document ID and foreign ID. - get /documents/d/{did}/externaldata/{fid}',
			},
			{
				name: 'getDocumentVersions',
				value: 'GET /documents/d/{did}/versions',
				description: 'Retrieve versions by document ID. - get /documents/d/{did}/versions',
			},
			{
				name: 'createVersion',
				value: 'POST /documents/d/{did}/versions',
				description: 'Create version by document ID. - post /documents/d/{did}/versions',
			},
			{
				name: 'getVersion',
				value: 'GET /documents/d/{did}/versions/{vid}',
				description: 'Retrieve version by document ID and version ID. - get /documents/d/{did}/versions/{vid}',
			},
			{
				name: 'updateExternalReferencesToLatestDocuments',
				value: 'POST /documents/d/{did}/w/{wid}/e/{eid}/latestdocumentreferences',
				description: 'Update external references to latest by document ID, workspace ID, and tab ID. - post /documents/d/{did}/w/{wid}/e/{eid}/latestdocumentreferences',
			},
			{
				name: 'moveElementsToDocument',
				value: 'POST /documents/d/{did}/w/{wid}/moveelement',
				description: 'Move tab by document ID and workspace ID. - post /documents/d/{did}/w/{wid}/moveelement',
			},
			{
				name: 'revertUnchangedToRevisions',
				value: 'POST /documents/d/{did}/w/{wid}/revertunchangedtorevisions',
				description: 'post /documents/d/{did}/w/{wid}/revertunchangedtorevisions',
			},
			{
				name: 'syncApplicationElements',
				value: 'POST /documents/d/{did}/w/{wid}/syncAppElements',
				description: 'post /documents/d/{did}/w/{wid}/syncAppElements',
			},
			{
				name: 'getDocumentWorkspaces',
				value: 'GET /documents/d/{did}/workspaces',
				description: 'Retrieve workspaces by document ID. - get /documents/d/{did}/workspaces',
			},
			{
				name: 'createWorkspace',
				value: 'POST /documents/d/{did}/workspaces',
				description: 'Create workspace by document ID. - post /documents/d/{did}/workspaces',
			},
			{
				name: 'deleteWorkspace',
				value: 'DELETE /documents/d/{did}/workspaces/{wid}',
				description: 'Delete workspace by document ID and workspace ID. - delete /documents/d/{did}/workspaces/{wid}',
			},
			{
				name: 'getDocumentHistory',
				value: 'GET /documents/d/{did}/{wm}/{wmid}/documenthistory',
				description: 'Retrieve document history by document ID and workspace or microversion ID. - get /documents/d/{did}/{wm}/{wmid}/documenthistory',
			},
			{
				name: 'getElementsInDocument',
				value: 'GET /documents/d/{did}/{wvm}/{wvmid}/elements',
				description: 'Retrieve tabs by document ID and workspace or version or microversion ID. - get /documents/d/{did}/{wvm}/{wvmid}/elements',
			},
			{
				name: 'getUnitInfo',
				value: 'GET /documents/d/{did}/{wvm}/{wvmid}/unitinfo',
				description: 'Get the selected units and precision by document ID and workspace or version or microversion ID. - get /documents/d/{did}/{wvm}/{wvmid}/unitinfo',
			},
			{
				name: 'getCurrentMicroversion',
				value: 'GET /documents/d/{did}/{wv}/{wvid}/currentmicroversion',
				description: 'Retrieve current microversion by document ID and workspace or version ID. - get /documents/d/{did}/{wv}/{wvid}/currentmicroversion',
			},
			{
				name: 'export2Json',
				value: 'POST /documents/d/{did}/{wv}/{wvid}/e/{eid}/export',
				description: 'Export document by document ID, workspace or version ID, and tab ID. - post /documents/d/{did}/{wv}/{wvid}/e/{eid}/export',
			},
			{
				name: 'getInsertables',
				value: 'GET /documents/d/{did}/{wv}/{wvid}/insertables',
				description: 'Retrieve insertables by document ID and workspace or version ID. - get /documents/d/{did}/{wv}/{wvid}/insertables',
			},
			{
				name: 'search',
				value: 'POST /documents/search',
				description: 'Search document. - post /documents/search',
			},
			{
				name: 'getDocument',
				value: 'GET /documents/{did}',
				description: 'Retrieve document by document ID. - get /documents/{did}',
			},
			{
				name: 'updateDocumentAttributes',
				value: 'POST /documents/{did}',
				description: 'Update document attributes by document ID. - post /documents/{did}',
			},
			{
				name: 'deleteDocument',
				value: 'DELETE /documents/{did}',
				description: 'Delete document by document ID. - delete /documents/{did}',
			},
			{
				name: 'getDocumentAcl',
				value: 'GET /documents/{did}/acl',
				description: 'Retrieve access control list by document ID. - get /documents/{did}/acl',
			},
			{
				name: 'getDocumentPermissionSet',
				value: 'GET /documents/{did}/permissionset',
				description: 'Retrieve Document permissions by document ID. - get /documents/{did}/permissionset',
			},
			{
				name: 'shareDocument',
				value: 'POST /documents/{did}/share',
				description: 'Share document by document ID. - post /documents/{did}/share',
			},
			{
				name: 'unShareDocument',
				value: 'DELETE /documents/{did}/share/{eid}',
				description: 'Unshare document by document ID and tab ID. - delete /documents/{did}/share/{eid}',
			},
			{
				name: 'shareWithSupport',
				value: 'POST /documents/{did}/shareWithSupport',
				description: 'Share document by document ID with Onshape support. - post /documents/{did}/shareWithSupport',
			},
			{
				name: 'unshareFromSupport',
				value: 'DELETE /documents/{did}/shareWithSupport',
				description: 'Unshare document with support. - delete /documents/{did}/shareWithSupport',
			},
			{
				name: 'mergePreview',
				value: 'GET /documents/{did}/w/{wid}/mergePreview',
				description: 'Merge preview of changes that will occur based on document ID, workspace ID and source workspace/version ID - get /documents/{did}/w/{wid}/mergePreview',
			},
			{
				name: 'restoreFromHistory',
				value: 'POST /documents/{did}/w/{wid}/restore/{vm}/{vmid}',
				description: 'Restore version or microversion to workspace by document ID, workspace ID, and version or microversion ID. - post /documents/{did}/w/{wid}/restore/{vm}/{vmid}',
			},
			{
				name: 'copyWorkspace',
				value: 'POST /documents/{did}/workspaces/{wid}/copy',
				description: 'Copy workspace by document ID and workspace ID. - post /documents/{did}/workspaces/{wid}/copy',
			},
			{
				name: 'mergeIntoWorkspace',
				value: 'POST /documents/{did}/workspaces/{wid}/merge',
				description: 'Merge into workspace by document ID and workspace ID. - post /documents/{did}/workspaces/{wid}/merge',
			},
		],
		default: 'GET /documents',
		description: 'The operation to perform',
	},
	...getDocuments.description,
	...createDocument.description,
	...downloadExternalData.description,
	...getDocumentVersions.description,
	...createVersion.description,
	...getVersion.description,
	...updateExternalReferencesToLatestDocuments.description,
	...moveElementsToDocument.description,
	...revertUnchangedToRevisions.description,
	...syncApplicationElements.description,
	...getDocumentWorkspaces.description,
	...createWorkspace.description,
	...deleteWorkspace.description,
	...getDocumentHistory.description,
	...getElementsInDocument.description,
	...getUnitInfo.description,
	...getCurrentMicroversion.description,
	...export2Json.description,
	...getInsertables.description,
	...search.description,
	...getDocument.description,
	...updateDocumentAttributes.description,
	...deleteDocument.description,
	...getDocumentAcl.description,
	...getDocumentPermissionSet.description,
	...shareDocument.description,
	...unShareDocument.description,
	...shareWithSupport.description,
	...unshareFromSupport.description,
	...mergePreview.description,
	...restoreFromHistory.description,
	...copyWorkspace.description,
	...mergeIntoWorkspace.description,
];

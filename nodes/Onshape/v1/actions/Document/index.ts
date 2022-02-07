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
import * as getCurrentMicroversion from './getCurrentMicroversion';
import * as export2Json from './export2Json';
import * as getInsertables from './getInsertables';
import * as search from './search';
import * as getDocument from './getDocument';
import * as updateDocumentAttributes from './updateDocumentAttributes';
import * as deleteDocument from './deleteDocument';
import * as getDocumentAcl from './getDocumentAcl';
import * as getDocumentPermissionSet from './getDocumentPermissionSet';
import * as getDocumentScopePrototype from './getDocumentScopePrototype';
import * as shareDocument from './shareDocument';
import * as unShareDocument from './unShareDocument';
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
	getCurrentMicroversion,
	export2Json,
	getInsertables,
	search,
	getDocument,
	updateDocumentAttributes,
	deleteDocument,
	getDocumentAcl,
	getDocumentPermissionSet,
	getDocumentScopePrototype,
	shareDocument,
	unShareDocument,
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
				description: 'Get Documents - get /documents',
			},
			{
				name: 'createDocument',
				value: 'POST /documents',
				description: 'Create document. - post /documents',
			},
			{
				name: 'downloadExternalData',
				value: 'GET /documents/d/{did}/externaldata/{fid}',
				description: 'Download External Data - get /documents/d/{did}/externaldata/{fid}',
			},
			{
				name: 'getDocumentVersions',
				value: 'GET /documents/d/{did}/versions',
				description: 'Get Versions - get /documents/d/{did}/versions',
			},
			{
				name: 'createVersion',
				value: 'POST /documents/d/{did}/versions',
				description: 'Create Version. - post /documents/d/{did}/versions',
			},
			{
				name: 'getVersion',
				value: 'GET /documents/d/{did}/versions/{vid}',
				description: 'Get Version - get /documents/d/{did}/versions/{vid}',
			},
			{
				name: 'updateExternalReferencesToLatestDocuments',
				value: 'POST /documents/d/{did}/w/{wid}/e/{eid}/latestdocumentreferences',
				description: 'Update External References to Latest - post /documents/d/{did}/w/{wid}/e/{eid}/latestdocumentreferences',
			},
			{
				name: 'moveElementsToDocument',
				value: 'POST /documents/d/{did}/w/{wid}/moveelement',
				description: 'Move Elements - post /documents/d/{did}/w/{wid}/moveelement',
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
				description: 'Get Workspaces - get /documents/d/{did}/workspaces',
			},
			{
				name: 'createWorkspace',
				value: 'POST /documents/d/{did}/workspaces',
				description: 'Create Workspace - post /documents/d/{did}/workspaces',
			},
			{
				name: 'deleteWorkspace',
				value: 'DELETE /documents/d/{did}/workspaces/{wid}',
				description: 'Delete Workspace - delete /documents/d/{did}/workspaces/{wid}',
			},
			{
				name: 'getDocumentHistory',
				value: 'GET /documents/d/{did}/{wm}/{wmid}/documenthistory',
				description: 'get /documents/d/{did}/{wm}/{wmid}/documenthistory',
			},
			{
				name: 'getElementsInDocument',
				value: 'GET /documents/d/{did}/{wvm}/{wvmid}/elements',
				description: 'Get a list of elements in the workspace, version, or microversion of the document. - get /documents/d/{did}/{wvm}/{wvmid}/elements',
			},
			{
				name: 'getCurrentMicroversion',
				value: 'GET /documents/d/{did}/{wv}/{wvid}/currentmicroversion',
				description: 'Get Current Document Microversion - get /documents/d/{did}/{wv}/{wvid}/currentmicroversion',
			},
			{
				name: 'export2Json',
				value: 'POST /documents/d/{did}/{wv}/{wvid}/e/{eid}/export',
				description: 'post /documents/d/{did}/{wv}/{wvid}/e/{eid}/export',
			},
			{
				name: 'getInsertables',
				value: 'GET /documents/d/{did}/{wv}/{wvid}/insertables',
				description: 'get /documents/d/{did}/{wv}/{wvid}/insertables',
			},
			{
				name: 'search',
				value: 'POST /documents/search',
				description: 'post /documents/search',
			},
			{
				name: 'getDocument',
				value: 'GET /documents/{did}',
				description: 'Get Document - get /documents/{did}',
			},
			{
				name: 'updateDocumentAttributes',
				value: 'POST /documents/{did}',
				description: 'Update Document Attributes. - post /documents/{did}',
			},
			{
				name: 'deleteDocument',
				value: 'DELETE /documents/{did}',
				description: 'Delete Document - delete /documents/{did}',
			},
			{
				name: 'getDocumentAcl',
				value: 'GET /documents/{did}/acl',
				description: 'Get Access Control List - get /documents/{did}/acl',
			},
			{
				name: 'getDocumentPermissionSet',
				value: 'GET /documents/{did}/permissionset',
				description: 'Get Document Permissions - get /documents/{did}/permissionset',
			},
			{
				name: 'getDocumentScopePrototype',
				value: 'GET /documents/{did}/scope',
				description: 'Get Scoped Document - get /documents/{did}/scope',
			},
			{
				name: 'shareDocument',
				value: 'POST /documents/{did}/share',
				description: 'Share Document - post /documents/{did}/share',
			},
			{
				name: 'unShareDocument',
				value: 'DELETE /documents/{did}/share/{eid}',
				description: 'Unshare Document - delete /documents/{did}/share/{eid}',
			},
			{
				name: 'restoreFromHistory',
				value: 'POST /documents/{did}/w/{wid}/restore/{vm}/{vmid}',
				description: 'Restore version or microversion to workspace. - post /documents/{did}/w/{wid}/restore/{vm}/{vmid}',
			},
			{
				name: 'copyWorkspace',
				value: 'POST /documents/{did}/workspaces/{wid}/copy',
				description: 'Copy Workspace - post /documents/{did}/workspaces/{wid}/copy',
			},
			{
				name: 'mergeIntoWorkspace',
				value: 'POST /documents/{did}/workspaces/{wid}/merge',
				description: 'Merge into workspace - post /documents/{did}/workspaces/{wid}/merge',
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
	...getCurrentMicroversion.description,
	...export2Json.description,
	...getInsertables.description,
	...search.description,
	...getDocument.description,
	...updateDocumentAttributes.description,
	...deleteDocument.description,
	...getDocumentAcl.description,
	...getDocumentPermissionSet.description,
	...getDocumentScopePrototype.description,
	...shareDocument.description,
	...unShareDocument.description,
	...restoreFromHistory.description,
	...copyWorkspace.description,
	...mergeIntoWorkspace.description,
];

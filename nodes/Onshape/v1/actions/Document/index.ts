import * as copyWorkspace from './copyWorkspace';
import * as getDocuments from './getDocuments';
import * as createDocument from './createDocument';
import * as getDocumentVersions from './getDocumentVersions';
import * as createVersion from './createVersion';
import * as getDocumentWorkspaces from './getDocumentWorkspaces';
import * as createWorkspace from './createWorkspace';
import * as getDocument from './getDocument';
import * as updateDocumentAttributes from './updateDocumentAttributes';
import * as deleteDocument from './deleteDocument';
import * as deleteWorkspace from './deleteWorkspace';
import * as downloadExternalData from './downloadExternalData';
import * as export2Json from './export2Json';
import * as getCurrentMicroversion from './getCurrentMicroversion';
import * as getDocumentAcl from './getDocumentAcl';
import * as getDocumentHistory from './getDocumentHistory';
import * as getDocumentPermissionSet from './getDocumentPermissionSet';
import * as getDocumentScopePrototype from './getDocumentScopePrototype';
import * as getElementsInDocument from './getElementsInDocument';
import * as getInsertables from './getInsertables';
import * as getVersion from './getVersion';
import * as mergeIntoWorkspace from './mergeIntoWorkspace';
import * as moveElementsToDocument from './moveElementsToDocument';
import * as restoreFromHistory from './restoreFromHistory';
import * as revertUnchangedToRevisions from './revertUnchangedToRevisions';
import * as search from './search';
import * as shareDocument from './shareDocument';
import * as syncApplicationElements from './syncApplicationElements';
import * as unShareDocument from './unShareDocument';
import * as updateExternalReferencesToLatestDocuments from './updateExternalReferencesToLatestDocuments';

import { INodeProperties } from 'n8n-workflow';

export {
	copyWorkspace,
	getDocuments,
	createDocument,
	getDocumentVersions,
	createVersion,
	getDocumentWorkspaces,
	createWorkspace,
	getDocument,
	updateDocumentAttributes,
	deleteDocument,
	deleteWorkspace,
	downloadExternalData,
	export2Json,
	getCurrentMicroversion,
	getDocumentAcl,
	getDocumentHistory,
	getDocumentPermissionSet,
	getDocumentScopePrototype,
	getElementsInDocument,
	getInsertables,
	getVersion,
	mergeIntoWorkspace,
	moveElementsToDocument,
	restoreFromHistory,
	revertUnchangedToRevisions,
	search,
	shareDocument,
	syncApplicationElements,
	unShareDocument,
	updateExternalReferencesToLatestDocuments,
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
				name: 'copyWorkspace',
				value: 'POST /api/documents/{did}/workspaces/{wid}/copy',
				description: 'Copy Workspace - post /api/documents/{did}/workspaces/{wid}/copy',
			},
			{
				name: 'getDocuments',
				value: 'GET /api/documents',
				description: 'Get Documents - get /api/documents',
			},
			{
				name: 'createDocument',
				value: 'POST /api/documents',
				description: 'Create document. - post /api/documents',
			},
			{
				name: 'getDocumentVersions',
				value: 'GET /api/documents/d/{did}/versions',
				description: 'Get Versions - get /api/documents/d/{did}/versions',
			},
			{
				name: 'createVersion',
				value: 'POST /api/documents/d/{did}/versions',
				description: 'Create Version. - post /api/documents/d/{did}/versions',
			},
			{
				name: 'getDocumentWorkspaces',
				value: 'GET /api/documents/d/{did}/workspaces',
				description: 'Get Workspaces - get /api/documents/d/{did}/workspaces',
			},
			{
				name: 'createWorkspace',
				value: 'POST /api/documents/d/{did}/workspaces',
				description: 'Create Workspace - post /api/documents/d/{did}/workspaces',
			},
			{
				name: 'getDocument',
				value: 'GET /api/documents/{did}',
				description: 'Get Document - get /api/documents/{did}',
			},
			{
				name: 'updateDocumentAttributes',
				value: 'POST /api/documents/{did}',
				description: 'Update Document Attributes. - post /api/documents/{did}',
			},
			{
				name: 'deleteDocument',
				value: 'DELETE /api/documents/{did}',
				description: 'Delete Document - delete /api/documents/{did}',
			},
			{
				name: 'deleteWorkspace',
				value: 'DELETE /api/documents/d/{did}/workspaces/{wid}',
				description: 'Delete Workspace - delete /api/documents/d/{did}/workspaces/{wid}',
			},
			{
				name: 'downloadExternalData',
				value: 'GET /api/documents/d/{did}/externaldata/{fid}',
				description: 'Download External Data - get /api/documents/d/{did}/externaldata/{fid}',
			},
			{
				name: 'export2Json',
				value: 'POST /api/documents/d/{did}/{wv}/{wvid}/e/{eid}/export',
				description: 'post /api/documents/d/{did}/{wv}/{wvid}/e/{eid}/export',
			},
			{
				name: 'getCurrentMicroversion',
				value: 'GET /api/documents/d/{did}/{wv}/{wvid}/currentmicroversion',
				description: 'Get Current Document Microversion - get /api/documents/d/{did}/{wv}/{wvid}/currentmicroversion',
			},
			{
				name: 'getDocumentAcl',
				value: 'GET /api/documents/{did}/acl',
				description: 'Get Access Control List - get /api/documents/{did}/acl',
			},
			{
				name: 'getDocumentHistory',
				value: 'GET /api/documents/d/{did}/{wm}/{wmid}/documenthistory',
				description: 'get /api/documents/d/{did}/{wm}/{wmid}/documenthistory',
			},
			{
				name: 'getDocumentPermissionSet',
				value: 'GET /api/documents/{did}/permissionset',
				description: 'Get Document Permissions - get /api/documents/{did}/permissionset',
			},
			{
				name: 'getDocumentScopePrototype',
				value: 'GET /api/documents/{did}/scope',
				description: 'Get Scoped Document - get /api/documents/{did}/scope',
			},
			{
				name: 'getElementsInDocument',
				value: 'GET /api/documents/d/{did}/{wvm}/{wvmid}/elements',
				description: 'Get a list of elements in the workspace, version, or microversion of the document. - get /api/documents/d/{did}/{wvm}/{wvmid}/elements',
			},
			{
				name: 'getInsertables',
				value: 'GET /api/documents/d/{did}/{wv}/{wvid}/insertables',
				description: 'get /api/documents/d/{did}/{wv}/{wvid}/insertables',
			},
			{
				name: 'getVersion',
				value: 'GET /api/documents/d/{did}/versions/{vid}',
				description: 'Get Version - get /api/documents/d/{did}/versions/{vid}',
			},
			{
				name: 'mergeIntoWorkspace',
				value: 'POST /api/documents/{did}/workspaces/{wid}/merge',
				description: 'Merge into workspace - post /api/documents/{did}/workspaces/{wid}/merge',
			},
			{
				name: 'moveElementsToDocument',
				value: 'POST /api/documents/d/{did}/w/{wid}/moveelement',
				description: 'Move Elements - post /api/documents/d/{did}/w/{wid}/moveelement',
			},
			{
				name: 'restoreFromHistory',
				value: 'POST /api/documents/{did}/w/{wid}/restore/{vm}/{vmid}',
				description: 'Restore version or microversion to workspace. - post /api/documents/{did}/w/{wid}/restore/{vm}/{vmid}',
			},
			{
				name: 'revertUnchangedToRevisions',
				value: 'POST /api/documents/d/{did}/w/{wid}/revertunchangedtorevisions',
				description: 'post /api/documents/d/{did}/w/{wid}/revertunchangedtorevisions',
			},
			{
				name: 'search',
				value: 'POST /api/documents/search',
				description: 'post /api/documents/search',
			},
			{
				name: 'shareDocument',
				value: 'POST /api/documents/{did}/share',
				description: 'Share Document - post /api/documents/{did}/share',
			},
			{
				name: 'syncApplicationElements',
				value: 'POST /api/documents/d/{did}/w/{wid}/syncAppElements',
				description: 'post /api/documents/d/{did}/w/{wid}/syncAppElements',
			},
			{
				name: 'unShareDocument',
				value: 'DELETE /api/documents/{did}/share/{eid}',
				description: 'Unshare Document - delete /api/documents/{did}/share/{eid}',
			},
			{
				name: 'updateExternalReferencesToLatestDocuments',
				value: 'POST /api/documents/d/{did}/w/{wid}/e/{eid}/latestdocumentreferences',
				description: 'Update External References to Latest - post /api/documents/d/{did}/w/{wid}/e/{eid}/latestdocumentreferences',
			},
		],
		default: 'POST /api/documents/{did}/workspaces/{wid}/copy',
		description: 'The operation to perform',
	},
	...copyWorkspace.description,
	...getDocuments.description,
	...createDocument.description,
	...getDocumentVersions.description,
	...createVersion.description,
	...getDocumentWorkspaces.description,
	...createWorkspace.description,
	...getDocument.description,
	...updateDocumentAttributes.description,
	...deleteDocument.description,
	...deleteWorkspace.description,
	...downloadExternalData.description,
	...export2Json.description,
	...getCurrentMicroversion.description,
	...getDocumentAcl.description,
	...getDocumentHistory.description,
	...getDocumentPermissionSet.description,
	...getDocumentScopePrototype.description,
	...getElementsInDocument.description,
	...getInsertables.description,
	...getVersion.description,
	...mergeIntoWorkspace.description,
	...moveElementsToDocument.description,
	...restoreFromHistory.description,
	...revertUnchangedToRevisions.description,
	...search.description,
	...shareDocument.description,
	...syncApplicationElements.description,
	...unShareDocument.description,
	...updateExternalReferencesToLatestDocuments.description,
];

import * as CopyWorkspace from './copyWorkspace';
import * as CreateDocument from './createDocument';
import * as CreateVersion from './createVersion';
import * as CreateWorkspace from './createWorkspace';
import * as DeleteDocument from './deleteDocument';
import * as DeleteWorkspace from './deleteWorkspace';
import * as DownloadExternalData from './downloadExternalData';
import * as Export2Json from './export2Json';
import * as GetCurrentMicroversion from './getCurrentMicroversion';
import * as GetDocument from './getDocument';
import * as GetDocumentAcl from './getDocumentAcl';
import * as GetDocumentHistory from './getDocumentHistory';
import * as GetDocumentPermissionSet from './getDocumentPermissionSet';
import * as GetDocuments from './getDocuments';
import * as GetDocumentVersions from './getDocumentVersions';
import * as GetDocumentWorkspaces from './getDocumentWorkspaces';
import * as GetElementsInDocument from './getElementsInDocument';
import * as GetInsertables from './getInsertables';
import * as GetUnitInfo from './getUnitInfo';
import * as GetVersion from './getVersion';
import * as MergeIntoWorkspace from './mergeIntoWorkspace';
import * as MergePreview from './mergePreview';
import * as MoveElementsToDocument from './moveElementsToDocument';
import * as RestoreFromHistory from './restoreFromHistory';
import * as RevertUnchangedToRevisions from './revertUnchangedToRevisions';
import * as Search from './search';
import * as ShareDocument from './shareDocument';
import * as ShareWithSupport from './shareWithSupport';
import * as SyncApplicationElements from './syncApplicationElements';
import * as UnShareDocument from './unShareDocument';
import * as UnshareFromSupport from './unshareFromSupport';
import * as UpdateDocumentAttributes from './updateDocumentAttributes';
import * as UpdateExternalReferencesToLatestDocuments from './updateExternalReferencesToLatestDocuments';

import { INodeProperties } from 'n8n-workflow';

export {
	CopyWorkspace,
	CreateDocument,
	CreateVersion,
	CreateWorkspace,
	DeleteDocument,
	DeleteWorkspace,
	DownloadExternalData,
	Export2Json,
	GetCurrentMicroversion,
	GetDocument,
	GetDocumentAcl,
	GetDocumentHistory,
	GetDocumentPermissionSet,
	GetDocuments,
	GetDocumentVersions,
	GetDocumentWorkspaces,
	GetElementsInDocument,
	GetInsertables,
	GetUnitInfo,
	GetVersion,
	MergeIntoWorkspace,
	MergePreview,
	MoveElementsToDocument,
	RestoreFromHistory,
	RevertUnchangedToRevisions,
	Search,
	ShareDocument,
	ShareWithSupport,
	SyncApplicationElements,
	UnShareDocument,
	UnshareFromSupport,
	UpdateDocumentAttributes,
	UpdateExternalReferencesToLatestDocuments,
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
					'Document',
				],
			},
		},
		default: 'GET /documents',
		options: [
			{
				name: 'copyWorkspace',
				value: 'POST /documents/{did}/workspaces/{wid}/copy',
				description: 'Copy workspace by document ID and workspace ID. - post /documents/{did}/workspaces/{wid}/copy',
				action: 'Copy Workspace',
			},
			{
				name: 'createDocument',
				value: 'POST /documents',
				description: 'Create and upload a document. - post /documents',
				action: 'Create Document',
			},
			{
				name: 'createVersion',
				value: 'POST /documents/d/{did}/versions',
				description: 'Create version by document ID. - post /documents/d/{did}/versions',
				action: 'Create Version',
			},
			{
				name: 'createWorkspace',
				value: 'POST /documents/d/{did}/workspaces',
				description: 'Create workspace by document ID. - post /documents/d/{did}/workspaces',
				action: 'Create Workspace',
			},
			{
				name: 'deleteDocument',
				value: 'DELETE /documents/{did}',
				description: 'Delete document by document ID. - delete /documents/{did}',
				action: 'Delete Document',
			},
			{
				name: 'deleteWorkspace',
				value: 'DELETE /documents/d/{did}/workspaces/{wid}',
				description: 'Delete workspace by document ID and workspace ID. - delete /documents/d/{did}/workspaces/{wid}',
				action: 'Delete Workspace',
			},
			{
				name: 'downloadExternalData',
				value: 'GET /documents/d/{did}/externaldata/{fid}',
				description: 'Download external data file(s) associated with the document. - get /documents/d/{did}/externaldata/{fid}',
				action: 'Download External Data',
			},
			{
				name: 'export2Json',
				value: 'POST /documents/d/{did}/{wv}/{wvid}/e/{eid}/export',
				description: 'Export document by document ID, workspace or version ID, and tab ID. - post /documents/d/{did}/{wv}/{wvid}/e/{eid}/export',
				action: 'Export2 Json',
			},
			{
				name: 'getCurrentMicroversion',
				value: 'GET /documents/d/{did}/{wv}/{wvid}/currentmicroversion',
				description: 'Retrieve current microversion by document ID and workspace or version ID. - get /documents/d/{did}/{wv}/{wvid}/currentmicroversion',
				action: 'Get Current Microversion',
			},
			{
				name: 'getDocument',
				value: 'GET /documents/{did}',
				description: 'Retrieve document by document ID. - get /documents/{did}',
				action: 'Get Document',
			},
			{
				name: 'getDocumentAcl',
				value: 'GET /documents/{did}/acl',
				description: 'Retrieve access control list by document ID. - get /documents/{did}/acl',
				action: 'Get Document Acl',
			},
			{
				name: 'getDocumentHistory',
				value: 'GET /documents/d/{did}/{wm}/{wmid}/documenthistory',
				description: 'Retrieve document history by document ID and workspace or microversion ID. - get /documents/d/{did}/{wm}/{wmid}/documenthistory',
				action: 'Get Document History',
			},
			{
				name: 'getDocumentPermissionSet',
				value: 'GET /documents/{did}/permissionset',
				description: 'Retrieve Document permissions by document ID. - get /documents/{did}/permissionset',
				action: 'Get Document Permission Set',
			},
			{
				name: 'getDocuments',
				value: 'GET /documents',
				description: 'Retrieve a document. - get /documents',
				action: 'Get Documents',
			},
			{
				name: 'getDocumentVersions',
				value: 'GET /documents/d/{did}/versions',
				description: 'Retrieve versions by document ID. - get /documents/d/{did}/versions',
				action: 'Get Document Versions',
			},
			{
				name: 'getDocumentWorkspaces',
				value: 'GET /documents/d/{did}/workspaces',
				description: 'Retrieve workspaces by document ID. - get /documents/d/{did}/workspaces',
				action: 'Get Document Workspaces',
			},
			{
				name: 'getElementsInDocument',
				value: 'GET /documents/d/{did}/{wvm}/{wvmid}/elements',
				description: 'Retrieve tabs by document ID and workspace or version or microversion ID. - get /documents/d/{did}/{wvm}/{wvmid}/elements',
				action: 'Get Elements In Document',
			},
			{
				name: 'getInsertables',
				value: 'GET /documents/d/{did}/{wv}/{wvid}/insertables',
				description: 'Retrieve insertables by document ID and workspace or version ID. - get /documents/d/{did}/{wv}/{wvid}/insertables',
				action: 'Get Insertables',
			},
			{
				name: 'getUnitInfo',
				value: 'GET /documents/d/{did}/{wvm}/{wvmid}/unitinfo',
				description: 'Get the selected units and precision by document ID and workspace or version or microversion ID. - get /documents/d/{did}/{wvm}/{wvmid}/unitinfo',
				action: 'Get Unit Info',
			},
			{
				name: 'getVersion',
				value: 'GET /documents/d/{did}/versions/{vid}',
				description: 'Retrieve version by document ID and version ID. - get /documents/d/{did}/versions/{vid}',
				action: 'Get Version',
			},
			{
				name: 'mergeIntoWorkspace',
				value: 'POST /documents/{did}/workspaces/{wid}/merge',
				description: 'Merge into workspace by document ID and workspace ID. - post /documents/{did}/workspaces/{wid}/merge',
				action: 'Merge Into Workspace',
			},
			{
				name: 'mergePreview',
				value: 'GET /documents/{did}/w/{wid}/mergePreview',
				description: 'Merge preview of changes that will occur based on document ID, workspace ID and source workspace/version ID - get /documents/{did}/w/{wid}/mergePreview',
				action: 'Merge Preview',
			},
			{
				name: 'moveElementsToDocument',
				value: 'POST /documents/d/{did}/w/{wid}/moveelement',
				description: 'Move tab by document ID and workspace ID. - post /documents/d/{did}/w/{wid}/moveelement',
				action: 'Move Elements To Document',
			},
			{
				name: 'restoreFromHistory',
				value: 'POST /documents/{did}/w/{wid}/restore/{vm}/{vmid}',
				description: 'Restore version or microversion to workspace by document ID, workspace ID, and version or microversion ID. - post /documents/{did}/w/{wid}/restore/{vm}/{vmid}',
				action: 'Restore From History',
			},
			{
				name: 'revertUnchangedToRevisions',
				value: 'POST /documents/d/{did}/w/{wid}/revertunchangedtorevisions',
				description: 'post /documents/d/{did}/w/{wid}/revertunchangedtorevisions',
				action: 'Revert Unchanged To Revisions',
			},
			{
				name: 'search',
				value: 'POST /documents/search',
				description: 'Search document. - post /documents/search',
				action: 'Search',
			},
			{
				name: 'shareDocument',
				value: 'POST /documents/{did}/share',
				description: 'Share document by document ID. - post /documents/{did}/share',
				action: 'Share Document',
			},
			{
				name: 'shareWithSupport',
				value: 'POST /documents/{did}/shareWithSupport',
				description: 'Share document by document ID with Onshape support. - post /documents/{did}/shareWithSupport',
				action: 'Share With Support',
			},
			{
				name: 'syncApplicationElements',
				value: 'POST /documents/d/{did}/w/{wid}/syncAppElements',
				description: 'post /documents/d/{did}/w/{wid}/syncAppElements',
				action: 'Sync Application Elements',
			},
			{
				name: 'unShareDocument',
				value: 'DELETE /documents/{did}/share/{eid}',
				description: 'Unshare document by document ID and tab ID. - delete /documents/{did}/share/{eid}',
				action: 'Un Share Document',
			},
			{
				name: 'unshareFromSupport',
				value: 'DELETE /documents/{did}/shareWithSupport',
				description: 'Unshare document with support. - delete /documents/{did}/shareWithSupport',
				action: 'Unshare From Support',
			},
			{
				name: 'updateDocumentAttributes',
				value: 'POST /documents/{did}',
				description: 'Update document attributes by document ID. - post /documents/{did}',
				action: 'Update Document Attributes',
			},
			{
				name: 'updateExternalReferencesToLatestDocuments',
				value: 'POST /documents/d/{did}/w/{wid}/e/{eid}/latestdocumentreferences',
				description: 'Update external references to latest by document ID, workspace ID, and tab ID. - post /documents/d/{did}/w/{wid}/e/{eid}/latestdocumentreferences',
				action: 'Update External References To Latest Documents',
			},
		],
	},
	...CopyWorkspace.description,
	...CreateDocument.description,
	...CreateVersion.description,
	...CreateWorkspace.description,
	...DeleteDocument.description,
	...DeleteWorkspace.description,
	...DownloadExternalData.description,
	...Export2Json.description,
	...GetCurrentMicroversion.description,
	...GetDocument.description,
	...GetDocumentAcl.description,
	...GetDocumentHistory.description,
	...GetDocumentPermissionSet.description,
	...GetDocuments.description,
	...GetDocumentVersions.description,
	...GetDocumentWorkspaces.description,
	...GetElementsInDocument.description,
	...GetInsertables.description,
	...GetUnitInfo.description,
	...GetVersion.description,
	...MergeIntoWorkspace.description,
	...MergePreview.description,
	...MoveElementsToDocument.description,
	...RestoreFromHistory.description,
	...RevertUnchangedToRevisions.description,
	...Search.description,
	...ShareDocument.description,
	...ShareWithSupport.description,
	...SyncApplicationElements.description,
	...UnShareDocument.description,
	...UnshareFromSupport.description,
	...UpdateDocumentAttributes.description,
	...UpdateExternalReferencesToLatestDocuments.description,
];

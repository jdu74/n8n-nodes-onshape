import * as GetDocuments from './getDocuments';
import * as CreateDocument from './createDocument';
import * as DownloadExternalData from './downloadExternalData';
import * as GetDocumentVersions from './getDocumentVersions';
import * as CreateVersion from './createVersion';
import * as GetVersion from './getVersion';
import * as UpdateExternalReferencesToLatestDocuments from './updateExternalReferencesToLatestDocuments';
import * as MoveElementsToDocument from './moveElementsToDocument';
import * as RevertUnchangedToRevisions from './revertUnchangedToRevisions';
import * as SyncApplicationElements from './syncApplicationElements';
import * as GetDocumentWorkspaces from './getDocumentWorkspaces';
import * as CreateWorkspace from './createWorkspace';
import * as DeleteWorkspace from './deleteWorkspace';
import * as GetDocumentHistory from './getDocumentHistory';
import * as GetElementsInDocument from './getElementsInDocument';
import * as GetUnitInfo from './getUnitInfo';
import * as GetCurrentMicroversion from './getCurrentMicroversion';
import * as Export2Json from './export2Json';
import * as GetInsertables from './getInsertables';
import * as Search from './search';
import * as GetDocument from './getDocument';
import * as UpdateDocumentAttributes from './updateDocumentAttributes';
import * as DeleteDocument from './deleteDocument';
import * as GetDocumentAcl from './getDocumentAcl';
import * as GetDocumentPermissionSet from './getDocumentPermissionSet';
import * as ShareDocument from './shareDocument';
import * as UnShareDocument from './unShareDocument';
import * as ShareWithSupport from './shareWithSupport';
import * as UnshareFromSupport from './unshareFromSupport';
import * as MergePreview from './mergePreview';
import * as RestoreFromHistory from './restoreFromHistory';
import * as CopyWorkspace from './copyWorkspace';
import * as MergeIntoWorkspace from './mergeIntoWorkspace';

import { INodeProperties } from 'n8n-workflow';

export {
	GetDocuments,
	CreateDocument,
	DownloadExternalData,
	GetDocumentVersions,
	CreateVersion,
	GetVersion,
	UpdateExternalReferencesToLatestDocuments,
	MoveElementsToDocument,
	RevertUnchangedToRevisions,
	SyncApplicationElements,
	GetDocumentWorkspaces,
	CreateWorkspace,
	DeleteWorkspace,
	GetDocumentHistory,
	GetElementsInDocument,
	GetUnitInfo,
	GetCurrentMicroversion,
	Export2Json,
	GetInsertables,
	Search,
	GetDocument,
	UpdateDocumentAttributes,
	DeleteDocument,
	GetDocumentAcl,
	GetDocumentPermissionSet,
	ShareDocument,
	UnShareDocument,
	ShareWithSupport,
	UnshareFromSupport,
	MergePreview,
	RestoreFromHistory,
	CopyWorkspace,
	MergeIntoWorkspace,
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
				description: '* See [API Guide: Model Translation](https://onshape-public.github.io/docs/api-adv/translation/) for more details.\n* If downloading an exported file, poll the `requestState` in the translation response and wait for a result of `DONE` before attempting to download the file. \n* Use the `resultExternalDataIds` from the translation response as the foreign id (`{fid}`) in this API. - get /documents/d/{did}/externaldata/{fid}',
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
				description: 'This returns list of documents based on search parameters. - post /documents/search',
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
	...GetDocuments.description,
	...CreateDocument.description,
	...DownloadExternalData.description,
	...GetDocumentVersions.description,
	...CreateVersion.description,
	...GetVersion.description,
	...UpdateExternalReferencesToLatestDocuments.description,
	...MoveElementsToDocument.description,
	...RevertUnchangedToRevisions.description,
	...SyncApplicationElements.description,
	...GetDocumentWorkspaces.description,
	...CreateWorkspace.description,
	...DeleteWorkspace.description,
	...GetDocumentHistory.description,
	...GetElementsInDocument.description,
	...GetUnitInfo.description,
	...GetCurrentMicroversion.description,
	...Export2Json.description,
	...GetInsertables.description,
	...Search.description,
	...GetDocument.description,
	...UpdateDocumentAttributes.description,
	...DeleteDocument.description,
	...GetDocumentAcl.description,
	...GetDocumentPermissionSet.description,
	...ShareDocument.description,
	...UnShareDocument.description,
	...ShareWithSupport.description,
	...UnshareFromSupport.description,
	...MergePreview.description,
	...RestoreFromHistory.description,
	...CopyWorkspace.description,
	...MergeIntoWorkspace.description,
];

import * as GetFolderAcl from './getFolderAcl';
import * as Share from './share';
import * as UnShare from './unShare';

import { INodeProperties } from 'n8n-workflow';

export {
	GetFolderAcl,
	Share,
	UnShare,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Folder',
				],
			},
		},
		options: [
			{
				name: 'getFolderAcl',
				value: 'GET /folders/{fid}/acl',
				description: 'Returns the ACL of permission objects. Each object contains: \n* The type of entity  \n    * 0 (User)  \n    * 1 (Company) \n    * 2 (Team) \n    * 3 (Document) \n    * 4 (Application) \n * The ID of the entity for the specified type. \n* The permissions for that entity. \n    *  OWNER (100): All permissions, including those not listed, such as permission to transfer ownership. \n    * DELETE (90) \n    * RESHARE (80) \n    * WRITE (70) \n    * READ (60) \n    * LINK (50) \n    * COPY (30): Can copy workspace \n    * EXPORT (20): Can export geometry \n    * COMMENT (10) \n    * ANONYMOUS_ACCESS (5): Special, restricted read access - get /folders/{fid}/acl',
			},
			{
				name: 'share',
				value: 'POST /folders/{fid}/share',
				description: '* Specify the type of entity to share with using `entries.entryType`: \n    * 0 (User)  \n    * 1 (Company) \n    * 2 (Team) \n    * 3 (Document) \n    * 4 (Application) \n* Provide one of the identifiers in the `entries` object in the request body.  \n    * You can share with non-Onshape users with the `email` field when `entryType=0`.  \n * Provide the string for the permission set. Do not include the integer in parentheses: \n    * OWNER (100): Object owner. Implies all permissions including those not listed such as permission to transfer ownership. \n    * DELETE (90) \n    * RESHARE (80) \n    * WRITE (70) \n    * READ (60) \n    * LINK (50) \n    * COPY (30): Can copy workspace \n    * EXPORT (20): Can export geometry \n    * COMMENT (10) \n    * ANONYMOUS_ACCESS (5): Special, restricted read access - post /folders/{fid}/share',
			},
			{
				name: 'unShare',
				value: 'DELETE /folders/{fid}/share/{eid}',
				description: '* Provide the folder ID for the folder to unshare.  \n * Provide the `entityType` for the type of entity to remove. \n    * 0 (User)  \n    * 1 (Company) \n    * 2 (Team) \n    * 3 (Document) \n    * 4 (Application) \n* Provide the entity ID in the `eid` param. - delete /folders/{fid}/share/{eid}',
			},
		],
		default: 'GET /folders/{fid}/acl',
		description: 'The operation to perform',
	},
	...GetFolderAcl.description,
	...Share.description,
	...UnShare.description,
];

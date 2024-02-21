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
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'Folder',
				],
			},
		},
		default: 'GET /folders/{fid}/acl',
		options: [
			{
				name: 'getFolderAcl',
				value: 'GET /folders/{fid}/acl',
				description: 'Get the Access Control List (ACL) for a folder to view permissions. - get /folders/{fid}/acl',
				action: 'Get Folder Acl',
			},
			{
				name: 'share',
				value: 'POST /folders/{fid}/share',
				description: 'Share folder with an entity. - post /folders/{fid}/share',
				action: 'Share',
			},
			{
				name: 'unShare',
				value: 'DELETE /folders/{fid}/share/{eid}',
				description: 'Remove permissions from the folder for the specified Access Control List (ACL) entry. - delete /folders/{fid}/share/{eid}',
				action: 'Un Share',
			},
		],
	},
	...GetFolderAcl.description,
	...Share.description,
	...UnShare.description,
];

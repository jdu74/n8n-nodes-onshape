import * as getFolderAcl from './getFolderAcl';
import * as share from './share';
import * as unShare from './unShare';

import { INodeProperties } from 'n8n-workflow';

export {
	getFolderAcl,
	share,
	unShare,
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
				value: 'GET /api/folders/{fid}/acl',
				description: 'Get Access Control List - get /api/folders/{fid}/acl',
			},
			{
				name: 'share',
				value: 'POST /api/folders/{fid}/share',
				description: 'Share Folder - post /api/folders/{fid}/share',
			},
			{
				name: 'unShare',
				value: 'DELETE /api/folders/{fid}/share/{eid}',
				description: 'Unshare Folder - delete /api/folders/{fid}/share/{eid}',
			},
		],
		default: 'GET /api/folders/{fid}/acl',
		description: 'The operation to perform',
	},
	...getFolderAcl.description,
	...share.description,
	...unShare.description,
];

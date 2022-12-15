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
				value: 'GET /folders/{fid}/acl',
				description: 'Get access control list (ACL) by folder ID. - get /folders/{fid}/acl',
			},
			{
				name: 'share',
				value: 'POST /folders/{fid}/share',
				description: 'Share folder by folder ID. - post /folders/{fid}/share',
			},
			{
				name: 'unShare',
				value: 'DELETE /folders/{fid}/share/{eid}',
				description: 'Unshare folder by folder ID and tab ID. - delete /folders/{fid}/share/{eid}',
			},
		],
		default: 'GET /folders/{fid}/acl',
		description: 'The operation to perform',
	},
	...getFolderAcl.description,
	...share.description,
	...unShare.description,
];

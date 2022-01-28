import { INodeProperties } from "n8n-workflow";

export const getFolderAclDescription: INodeProperties[] = [
	{
		name: 'fid-string(path)',
		displayName: 'fid',
		description: 'fid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Folder',
				],
				operation: [
					'GET /api/folders/{fid}/acl',
				],
			},
		},
	},
];

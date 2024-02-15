import { INodeProperties } from "n8n-workflow";

export const GetFolderAclDescription: INodeProperties[] = [
	{
		displayName: 'fid',
		name: 'fid-string(path)',
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
					'GET /folders/{fid}/acl',
				],
			},
		},
	},
];

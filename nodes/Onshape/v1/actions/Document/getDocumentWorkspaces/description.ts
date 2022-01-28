import { INodeProperties } from "n8n-workflow";

export const getDocumentWorkspacesDescription: INodeProperties[] = [
	{
		name: 'did-string(path)',
		displayName: 'did',
		description: 'did - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Document',
				],
				operation: [
					'GET /api/documents/d/{did}/workspaces',
				],
			},
		},
	},
];

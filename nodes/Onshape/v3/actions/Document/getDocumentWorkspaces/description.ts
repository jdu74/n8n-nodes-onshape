import { INodeProperties } from "n8n-workflow";

export const GetDocumentWorkspacesDescription: INodeProperties[] = [
	{
		displayName: 'did',
		name: 'did-string(path)',
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
					'GET /documents/d/{did}/workspaces',
				],
			},
		},
	},
];

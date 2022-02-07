import { INodeProperties } from "n8n-workflow";

export const getDocumentPermissionSetDescription: INodeProperties[] = [
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
					'GET /documents/{did}/permissionset',
				],
			},
		},
	},
];

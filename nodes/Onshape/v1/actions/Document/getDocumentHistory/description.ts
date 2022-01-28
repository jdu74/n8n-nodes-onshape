import { INodeProperties } from "n8n-workflow";

export const getDocumentHistoryDescription: INodeProperties[] = [
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
					'GET /api/documents/d/{did}/{wm}/{wmid}/documenthistory',
				],
			},
		},
	},
	{
		name: 'wm-string(path)',
		displayName: 'wm',
		description: 'wm - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Document',
				],
				operation: [
					'GET /api/documents/d/{did}/{wm}/{wmid}/documenthistory',
				],
			},
		},
	},
	{
		name: 'wmid-string(path)',
		displayName: 'wmid',
		description: 'wmid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Document',
				],
				operation: [
					'GET /api/documents/d/{did}/{wm}/{wmid}/documenthistory',
				],
			},
		},
	},
];

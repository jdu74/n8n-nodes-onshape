import { INodeProperties } from "n8n-workflow";

export const getDocumentHistoryDescription: INodeProperties[] = [
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
					'GET /documents/d/{did}/{wm}/{wmid}/documenthistory',
				],
			},
		},
	},
	{
		displayName: 'wm',
		name: 'wm-string(path)',
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
					'GET /documents/d/{did}/{wm}/{wmid}/documenthistory',
				],
			},
		},
	},
	{
		displayName: 'wmid',
		name: 'wmid-string(path)',
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
					'GET /documents/d/{did}/{wm}/{wmid}/documenthistory',
				],
			},
		},
	},
];

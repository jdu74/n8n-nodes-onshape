import { INodeProperties } from "n8n-workflow";

export const getDocumentsByNameDescription: INodeProperties[] = [
	{
		name: 'cid-string(path)',
		displayName: 'cid',
		description: 'cid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Company',
				],
				operation: [
					'GET /companies/{cid}/documentsbyname',
				],
			},
		},
	},
	{
		name: 'name-string(query)',
		displayName: 'name',
		description: 'name - string (query)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Company',
				],
				operation: [
					'GET /companies/{cid}/documentsbyname',
				],
			},
		},
	},
];

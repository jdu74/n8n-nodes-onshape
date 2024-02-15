import { INodeProperties } from "n8n-workflow";

export const GetDocumentsByNameDescription: INodeProperties[] = [
	{
		displayName: 'cid',
		name: 'cid-string(path)',
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
		displayName: 'name',
		name: 'name-string(query)',
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

import { INodeProperties } from "n8n-workflow";

export const getCompanyDescription: INodeProperties[] = [
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
					'GET /companies/{cid}',
				],
			},
		},
	},
];

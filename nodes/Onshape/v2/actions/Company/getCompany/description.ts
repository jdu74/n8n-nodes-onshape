import { INodeProperties } from "n8n-workflow";

export const getCompanyDescription: INodeProperties[] = [
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
					'GET /companies/{cid}',
				],
			},
		},
	},
];

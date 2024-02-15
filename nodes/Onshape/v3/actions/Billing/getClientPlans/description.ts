import { INodeProperties } from "n8n-workflow";

export const GetClientPlansDescription: INodeProperties[] = [
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
					'Billing',
				],
				operation: [
					'GET /billing/plans/client/{cid}',
				],
			},
		},
	},
];

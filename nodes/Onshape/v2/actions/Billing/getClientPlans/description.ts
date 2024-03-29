import { INodeProperties } from "n8n-workflow";

export const getClientPlansDescription: INodeProperties[] = [
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

import { INodeProperties } from "n8n-workflow";

export const getClientPlansDescription: INodeProperties[] = [
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
					'Billing',
				],
				operation: [
					'GET /api/billing/plans/client/{cid}',
				],
			},
		},
	},
];

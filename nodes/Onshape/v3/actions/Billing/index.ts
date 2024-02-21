import * as GetClientPlans from './getClientPlans';

import { INodeProperties } from 'n8n-workflow';

export {
	GetClientPlans,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'Billing',
				],
			},
		},
		default: 'GET /billing/plans/client/{cid}',
		options: [
			{
				name: 'getClientPlans',
				value: 'GET /billing/plans/client/{cid}',
				description: 'Get all billing plans and their information for an application by client ID. - get /billing/plans/client/{cid}',
				action: 'Get Client Plans',
			},
		],
	},
	...GetClientPlans.description,
];

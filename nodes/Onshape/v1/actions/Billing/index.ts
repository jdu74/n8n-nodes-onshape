import * as getClientPlans from './getClientPlans';

import { INodeProperties } from 'n8n-workflow';

export {
	getClientPlans,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Billing',
				],
			},
		},
		options: [
			{
				name: 'getClientPlans',
				value: 'GET /billing/plans/client/{cid}',
				description: 'Retrieve billing plans and their information for an application by client ID - get /billing/plans/client/{cid}',
			},
		],
		default: 'GET /billing/plans/client/{cid}',
		description: 'The operation to perform',
	},
	...getClientPlans.description,
];

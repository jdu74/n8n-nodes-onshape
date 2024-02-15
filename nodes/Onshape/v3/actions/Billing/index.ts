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
				description: 'This API should be used within the context of an OAuth-enabled application. - get /billing/plans/client/{cid}',
			},
		],
		default: 'GET /billing/plans/client/{cid}',
		description: 'The operation to perform',
	},
	...GetClientPlans.description,
];

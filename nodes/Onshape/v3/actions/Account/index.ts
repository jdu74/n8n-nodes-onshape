import * as GetPlanPurchases from './getPlanPurchases';
import * as GetPurchases from './getPurchases';
import * as ConsumePurchase from './consumePurchase';
import * as CancelPurchaseNew from './cancelPurchaseNew';

import { INodeProperties } from 'n8n-workflow';

export {
	GetPlanPurchases,
	GetPurchases,
	ConsumePurchase,
	CancelPurchaseNew,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Account',
				],
			},
		},
		options: [
			{
				name: 'getPlanPurchases',
				value: 'GET /accounts/plans/{planId}/purchases',
				description: 'Get a list of all app purchases made for the specified plan. - get /accounts/plans/{planId}/purchases',
			},
			{
				name: 'getPurchases',
				value: 'GET /accounts/purchases',
				description: 'This API should be used within the context of an OAuth-enabled application. - get /accounts/purchases',
			},
			{
				name: 'consumePurchase',
				value: 'POST /accounts/purchases/{pid}/consume',
				description: 'Mark a purchase as consumed by the current user. - post /accounts/purchases/{pid}/consume',
			},
			{
				name: 'cancelPurchaseNew',
				value: 'DELETE /accounts/{aid}/purchases/{pid}',
				description: 'Cancel a recurring subscription for the specified account ID and purchase ID. - delete /accounts/{aid}/purchases/{pid}',
			},
		],
		default: 'GET /accounts/plans/{planId}/purchases',
		description: 'The operation to perform',
	},
	...GetPlanPurchases.description,
	...GetPurchases.description,
	...ConsumePurchase.description,
	...CancelPurchaseNew.description,
];

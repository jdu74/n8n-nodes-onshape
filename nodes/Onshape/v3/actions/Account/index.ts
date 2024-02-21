import * as CancelPurchaseNew from './cancelPurchaseNew';
import * as ConsumePurchase from './consumePurchase';
import * as GetPlanPurchases from './getPlanPurchases';
import * as GetPurchases from './getPurchases';

import { INodeProperties } from 'n8n-workflow';

export {
	CancelPurchaseNew,
	ConsumePurchase,
	GetPlanPurchases,
	GetPurchases,
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
					'Account',
				],
			},
		},
		default: 'GET /accounts/plans/{planId}/purchases',
		options: [
			{
				name: 'cancelPurchaseNew',
				value: 'DELETE /accounts/{aid}/purchases/{pid}',
				description: 'Cancel a recurring subscription for the specified account ID and purchase ID. - delete /accounts/{aid}/purchases/{pid}',
				action: 'Cancel Purchase New',
			},
			{
				name: 'consumePurchase',
				value: 'POST /accounts/purchases/{pid}/consume',
				description: 'Mark a purchase as consumed by the current user. - post /accounts/purchases/{pid}/consume',
				action: 'Consume Purchase',
			},
			{
				name: 'getPlanPurchases',
				value: 'GET /accounts/plans/{planId}/purchases',
				description: 'Get a list of all app purchases made for the specified plan. - get /accounts/plans/{planId}/purchases',
				action: 'Get Plan Purchases',
			},
			{
				name: 'getPurchases',
				value: 'GET /accounts/purchases',
				description: 'Get a list of all app purchases made by the current user. - get /accounts/purchases',
				action: 'Get Purchases',
			},
		],
	},
	...CancelPurchaseNew.description,
	...ConsumePurchase.description,
	...GetPlanPurchases.description,
	...GetPurchases.description,
];

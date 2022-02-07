import * as getPlanPurchases from './getPlanPurchases';
import * as getPurchases from './getPurchases';
import * as consumePurchase from './consumePurchase';
import * as cancelPurchaseNew from './cancelPurchaseNew';

import { INodeProperties } from 'n8n-workflow';

export {
	getPlanPurchases,
	getPurchases,
	consumePurchase,
	cancelPurchaseNew,
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
				description: 'Retrieve an array of plan purchases for the account - get /accounts/plans/{planId}/purchases',
			},
			{
				name: 'getPurchases',
				value: 'GET /accounts/purchases',
				description: 'Retrieve an array of the user’s App Store purchases - get /accounts/purchases',
			},
			{
				name: 'consumePurchase',
				value: 'POST /accounts/purchases/{pid}/consume',
				description: 'Mark purchase consumed by the user - post /accounts/purchases/{pid}/consume',
			},
			{
				name: 'cancelPurchaseNew',
				value: 'DELETE /accounts/{aid}/purchases/{pid}',
				description: 'Cancel recurring subscription for the account - delete /accounts/{aid}/purchases/{pid}',
			},
		],
		default: 'GET /accounts/plans/{planId}/purchases',
		description: 'The operation to perform',
	},
	...getPlanPurchases.description,
	...getPurchases.description,
	...consumePurchase.description,
	...cancelPurchaseNew.description,
];

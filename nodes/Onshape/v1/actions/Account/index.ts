import * as cancelPurchaseNew from './cancelPurchaseNew';
import * as consumePurchase from './consumePurchase';
import * as getPlanPurchases from './getPlanPurchases';
import * as getPurchases from './getPurchases';

import { INodeProperties } from 'n8n-workflow';

export {
	cancelPurchaseNew,
	consumePurchase,
	getPlanPurchases,
	getPurchases,
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
				name: 'cancelPurchaseNew',
				value: 'DELETE /api/accounts/{aid}/purchases/{pid}',
				description: 'Cancel recurring subscription for the account - delete /api/accounts/{aid}/purchases/{pid}',
			},
			{
				name: 'consumePurchase',
				value: 'POST /api/accounts/purchases/{pid}/consume',
				description: 'Mark purchase consumed by the user - post /api/accounts/purchases/{pid}/consume',
			},
			{
				name: 'getPlanPurchases',
				value: 'GET /api/accounts/plans/{planId}/purchases',
				description: 'Retrieve an array of plan purchases for the account - get /api/accounts/plans/{planId}/purchases',
			},
			{
				name: 'getPurchases',
				value: 'GET /api/accounts/purchases',
				description: 'Retrieve an array of the user’s App Store purchases - get /api/accounts/purchases',
			},
		],
		default: 'DELETE /api/accounts/{aid}/purchases/{pid}',
		description: 'The operation to perform',
	},
	...cancelPurchaseNew.description,
	...consumePurchase.description,
	...getPlanPurchases.description,
	...getPurchases.description,
];

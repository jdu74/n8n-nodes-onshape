import { INodeProperties } from "n8n-workflow";

export const consumePurchaseDescription: INodeProperties[] = [
	{
		displayName: 'pid',
		name: 'pid-string(path)',
		description: 'pid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Account',
				],
				operation: [
					'POST /accounts/purchases/{pid}/consume',
				],
			},
		},
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		description: 'JSON Content-Type',
		type: 'options',
		default: 'application/json;charset=UTF-8; qs=0.09',
		displayOptions: {
			show: {
				resource: [
					'Account',
				],
				operation: [
					'POST /accounts/purchases/{pid}/consume',
				],
			},
		},
		options: [
			{
				name: 'application/json;charset=UTF-8; qs=0.09',
				value: 'application/json;charset=UTF-8; qs=0.09',
			},
		],
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'Account',
				],
				operation: [
					'POST /accounts/purchases/{pid}/consume',
				],
				jsonContentType: [
					'application/json;charset=UTF-8; qs=0.09',
				],
			},
		},
	},
	{
		displayName: 'JSON Object',
		name: 'jsonObject1-object (body)',
		description: 'jsonObject - collection',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'Account',
				],
				operation: [
					'POST /accounts/purchases/{pid}/consume',
				],
				jsonParameters: [
					false,
				],
				jsonContentType: [
					'application/json;charset=UTF-8; qs=0.09',
				],
			},
		},
		options: [
			{
				displayName: 'consumedQuantity',
				name: 'consumedQuantity',
				description: 'consumedQuantity - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'purchaseId',
				name: 'purchaseId',
				description: 'purchaseId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'userId',
				name: 'userId',
				description: 'userId - string',
				type: 'string',
				default: '',
			},
		],
	},
	{
		displayName: 'JSON Object',
		name: 'jsonObject2-json(body)',
		description: 'jsonObject - json',
		type: 'json',
		default: '',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'Account',
				],
				operation: [
					'POST /accounts/purchases/{pid}/consume',
				],
				jsonParameters: [
					true,
				],
				jsonContentType: [
					'application/json;charset=UTF-8; qs=0.09',
				],
			},
		},
	},
];

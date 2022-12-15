import * as getPublicationItems from './getPublicationItems';

import { INodeProperties } from 'n8n-workflow';

export {
	getPublicationItems,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Publication',
				],
			},
		},
		options: [
			{
				name: 'getPublicationItems',
				value: 'GET /publications/{pid}/items',
				description: 'Get items in a publication - get /publications/{pid}/items',
			},
		],
		default: 'GET /publications/{pid}/items',
		description: 'The operation to perform',
	},
	...getPublicationItems.description,
];

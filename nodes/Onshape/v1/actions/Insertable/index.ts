import * as getLatestInDocument from './getLatestInDocument';

import { INodeProperties } from 'n8n-workflow';

export {
	getLatestInDocument,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Insertable',
				],
			},
		},
		options: [
			{
				name: 'getLatestInDocument',
				value: 'GET /api/insertables/d/{did}/latest',
				description: 'Insertables for a document - get /api/insertables/d/{did}/latest',
			},
		],
		default: 'GET /api/insertables/d/{did}/latest',
		description: 'The operation to perform',
	},
	...getLatestInDocument.description,
];

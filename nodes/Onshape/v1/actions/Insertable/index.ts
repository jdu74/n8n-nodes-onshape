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
				value: 'GET /insertables/d/{did}/latest',
				description: 'Insertables for a document - get /insertables/d/{did}/latest',
			},
		],
		default: 'GET /insertables/d/{did}/latest',
		description: 'The operation to perform',
	},
	...getLatestInDocument.description,
];

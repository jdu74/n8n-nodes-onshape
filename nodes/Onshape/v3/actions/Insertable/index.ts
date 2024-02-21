import * as GetLatestInDocument from './getLatestInDocument';

import { INodeProperties } from 'n8n-workflow';

export {
	GetLatestInDocument,
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
					'Insertable',
				],
			},
		},
		default: 'GET /insertables/d/{did}/latest',
		options: [
			{
				name: 'getLatestInDocument',
				value: 'GET /insertables/d/{did}/latest',
				description: 'Get a list of things in this document that can be inserted elsewhere. - get /insertables/d/{did}/latest',
				action: 'Get Latest In Document',
			},
		],
	},
	...GetLatestInDocument.description,
];

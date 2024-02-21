import * as UpdateNextNumbers from './updateNextNumbers';

import { INodeProperties } from 'n8n-workflow';

export {
	UpdateNextNumbers,
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
					'PartNumber',
				],
			},
		},
		default: 'POST /partnumber/nextnumbers',
		options: [
			{
				name: 'updateNextNumbers',
				value: 'POST /partnumber/nextnumbers',
				description: 'Send the items to generate numbers for, and return the next valid available part numbers. - post /partnumber/nextnumbers',
				action: 'Update Next Numbers',
			},
		],
	},
	...UpdateNextNumbers.description,
];

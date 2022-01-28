import * as nextNumbers from './nextNumbers';

import { INodeProperties } from 'n8n-workflow';

export {
	nextNumbers,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'PartNumber',
				],
			},
		},
		options: [
			{
				name: 'nextNumbers',
				value: 'POST /api/partnumber/nextnumbers',
				description: 'post /api/partnumber/nextnumbers',
			},
		],
		default: 'POST /api/partnumber/nextnumbers',
		description: 'The operation to perform',
	},
	...nextNumbers.description,
];

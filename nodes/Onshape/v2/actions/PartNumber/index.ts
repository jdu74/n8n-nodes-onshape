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
				value: 'POST /partnumber/nextnumbers',
				description: 'Update a set of valid part numbers for the supplied parts. - post /partnumber/nextnumbers',
			},
		],
		default: 'POST /partnumber/nextnumbers',
		description: 'The operation to perform',
	},
	...nextNumbers.description,
];

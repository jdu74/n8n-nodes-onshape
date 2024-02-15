import * as NextNumbers from './nextNumbers';

import { INodeProperties } from 'n8n-workflow';

export {
	NextNumbers,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'NumberingScheme',
				],
			},
		},
		options: [
			{
				name: 'nextNumbers',
				value: 'POST /numberingscheme/nextnumbers',
				description: 'Send the items to generate numbers for, and return the next valid available part numbers. - post /numberingscheme/nextnumbers',
			},
		],
		default: 'POST /numberingscheme/nextnumbers',
		description: 'The operation to perform',
	},
	...NextNumbers.description,
];

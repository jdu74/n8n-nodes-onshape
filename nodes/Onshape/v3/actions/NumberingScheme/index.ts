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
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'NumberingScheme',
				],
			},
		},
		default: 'POST /numberingscheme/nextnumbers',
		options: [
			{
				name: 'nextNumbers',
				value: 'POST /numberingscheme/nextnumbers',
				description: 'Send the items to generate numbers for, and return the next valid available part numbers. - post /numberingscheme/nextnumbers',
				action: 'Next Numbers',
			},
		],
	},
	...NextNumbers.description,
];

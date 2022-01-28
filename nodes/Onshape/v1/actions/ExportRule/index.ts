import * as getValidRuleOptions from './getValidRuleOptions';

import { INodeProperties } from 'n8n-workflow';

export {
	getValidRuleOptions,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ExportRule',
				],
			},
		},
		options: [
			{
				name: 'getValidRuleOptions',
				value: 'GET /api/exportrules/options/{otype}/{oid}',
				description: 'get /api/exportrules/options/{otype}/{oid}',
			},
		],
		default: 'GET /api/exportrules/options/{otype}/{oid}',
		description: 'The operation to perform',
	},
	...getValidRuleOptions.description,
];

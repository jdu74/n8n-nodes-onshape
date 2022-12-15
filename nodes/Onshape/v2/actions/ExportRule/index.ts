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
				value: 'GET /exportrules/options/{otype}/{oid}',
				description: 'Retrieve a list of the valid export rule options by object type and owner ID. - get /exportrules/options/{otype}/{oid}',
			},
		],
		default: 'GET /exportrules/options/{otype}/{oid}',
		description: 'The operation to perform',
	},
	...getValidRuleOptions.description,
];

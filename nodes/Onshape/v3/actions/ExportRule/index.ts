import * as GetValidRuleOptions from './getValidRuleOptions';

import { INodeProperties } from 'n8n-workflow';

export {
	GetValidRuleOptions,
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
					'ExportRule',
				],
			},
		},
		default: 'GET /exportrules/options/{cu}/{cuid}',
		options: [
			{
				name: 'getValidRuleOptions',
				value: 'GET /exportrules/options/{cu}/{cuid}',
				description: ' Get a list of valid export rule options for the user or company. - get /exportrules/options/{cu}/{cuid}',
				action: 'Get Valid Rule Options',
			},
		],
	},
	...GetValidRuleOptions.description,
];

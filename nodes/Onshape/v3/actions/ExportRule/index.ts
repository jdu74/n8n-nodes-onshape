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
				value: 'GET /exportrules/options/{cu}/{cuid}',
				description: 'Does NOT get the rules themselves; it gets the information used to create them. - get /exportrules/options/{cu}/{cuid}',
			},
		],
		default: 'GET /exportrules/options/{cu}/{cuid}',
		description: 'The operation to perform',
	},
	...GetValidRuleOptions.description,
];

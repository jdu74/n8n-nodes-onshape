import * as CreateAlias from './createAlias';
import * as DeleteAlias from './deleteAlias';
import * as GetAlias from './getAlias';
import * as GetAliasesInCompany from './getAliasesInCompany';
import * as GetAliasMembers from './getAliasMembers';
import * as UpdateAlias from './updateAlias';

import { INodeProperties } from 'n8n-workflow';

export {
	CreateAlias,
	DeleteAlias,
	GetAlias,
	GetAliasesInCompany,
	GetAliasMembers,
	UpdateAlias,
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
					'Alias',
				],
			},
		},
		default: 'GET /aliases',
		options: [
			{
				name: 'createAlias',
				value: 'POST /aliases',
				description: 'Create an alias in your enterprise. - post /aliases',
				action: 'Create Alias',
			},
			{
				name: 'deleteAlias',
				value: 'DELETE /aliases/{aid}',
				description: 'Delete an alias from your enterprise. - delete /aliases/{aid}',
				action: 'Delete Alias',
			},
			{
				name: 'getAlias',
				value: 'GET /aliases/{aid}',
				description: 'Get an alias by ID. - get /aliases/{aid}',
				action: 'Get Alias',
			},
			{
				name: 'getAliasesInCompany',
				value: 'GET /aliases',
				description: 'Get a list of all aliases that exist for your enterprise. - get /aliases',
				action: 'Get Aliases In Company',
			},
			{
				name: 'getAliasMembers',
				value: 'GET /aliases/{aid}/members',
				description: 'Get all users and teams assigned to an alias. - get /aliases/{aid}/members',
				action: 'Get Alias Members',
			},
			{
				name: 'updateAlias',
				value: 'POST /aliases/{aid}',
				description: 'Add, remove, replace, or rename entries in an alias list. - post /aliases/{aid}',
				action: 'Update Alias',
			},
		],
	},
	...CreateAlias.description,
	...DeleteAlias.description,
	...GetAlias.description,
	...GetAliasesInCompany.description,
	...GetAliasMembers.description,
	...UpdateAlias.description,
];

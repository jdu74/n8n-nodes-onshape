import * as GetAliasesInCompany from './getAliasesInCompany';
import * as CreateAlias from './createAlias';
import * as GetAlias from './getAlias';
import * as UpdateAlias from './updateAlias';
import * as DeleteAlias from './deleteAlias';
import * as GetAliasMembers from './getAliasMembers';

import { INodeProperties } from 'n8n-workflow';

export {
	GetAliasesInCompany,
	CreateAlias,
	GetAlias,
	UpdateAlias,
	DeleteAlias,
	GetAliasMembers,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Alias',
				],
			},
		},
		options: [
			{
				name: 'getAliasesInCompany',
				value: 'GET /aliases',
				description: 'Get a list of all aliases that exist for your enterprise. - get /aliases',
			},
			{
				name: 'createAlias',
				value: 'POST /aliases',
				description: '`Manage users and teams` global permission is required to call this API. - post /aliases',
			},
			{
				name: 'getAlias',
				value: 'GET /aliases/{aid}',
				description: 'Get the information for an alias ID. - get /aliases/{aid}',
			},
			{
				name: 'updateAlias',
				value: 'POST /aliases/{aid}',
				description: "`Manage users and teams` global permission is required to call this API. \n* Add new users in the `additions` array. \n* Remove existing users in the `removals` array. Attempts to remove a user that does not exist in the Alias list will have no effect.\n* Replace the entire Alias list with the `entries` array. \n* You can also update the alias' `name` and `description`. \nFor example, given an Alias with members userA and userB: \n* `additions: [userC]` results in [userA, userB, userC] \n* `removals: [userB]` results in [userA] \n* `entries: [userC, user D]` results in [userC, userD] - post /aliases/{aid}",
			},
			{
				name: 'deleteAlias',
				value: 'DELETE /aliases/{aid}',
				description: '`Manage users and teams` global permission is required to call this API. - delete /aliases/{aid}',
			},
			{
				name: 'getAliasMembers',
				value: 'GET /aliases/{aid}/members',
				description: "This is a search-like endpoint that returns a subset of the member list. Use `getAlias` to return all members every time it's called. - get /aliases/{aid}/members",
			},
		],
		default: 'GET /aliases',
		description: 'The operation to perform',
	},
	...GetAliasesInCompany.description,
	...CreateAlias.description,
	...GetAlias.description,
	...UpdateAlias.description,
	...DeleteAlias.description,
	...GetAliasMembers.description,
];

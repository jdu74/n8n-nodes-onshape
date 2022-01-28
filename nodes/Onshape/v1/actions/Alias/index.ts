import * as getAliasesInCompany from './getAliasesInCompany';
import * as createAlias from './createAlias';
import * as getAlias from './getAlias';
import * as updateAlias from './updateAlias';
import * as deleteAlias from './deleteAlias';
import * as getAliasMembers from './getAliasMembers';

import { INodeProperties } from 'n8n-workflow';

export {
	getAliasesInCompany,
	createAlias,
	getAlias,
	updateAlias,
	deleteAlias,
	getAliasMembers,
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
				value: 'GET /api/aliases',
				description: 'Retrieve an array of aliases for the enterprise - get /api/aliases',
			},
			{
				name: 'createAlias',
				value: 'POST /api/aliases',
				description: 'Create an alias that contains users and/or teams - post /api/aliases',
			},
			{
				name: 'getAlias',
				value: 'GET /api/aliases/{aid}',
				description: 'Retrieve an alias by alias ID - get /api/aliases/{aid}',
			},
			{
				name: 'updateAlias',
				value: 'POST /api/aliases/{aid}',
				description: 'Update alias by alias ID - post /api/aliases/{aid}',
			},
			{
				name: 'deleteAlias',
				value: 'DELETE /api/aliases/{aid}',
				description: 'Delete alias by alias ID - delete /api/aliases/{aid}',
			},
			{
				name: 'getAliasMembers',
				value: 'GET /api/aliases/{aid}/members',
				description: 'Retreive all alias members by alias ID - get /api/aliases/{aid}/members',
			},
		],
		default: 'GET /api/aliases',
		description: 'The operation to perform',
	},
	...getAliasesInCompany.description,
	...createAlias.description,
	...getAlias.description,
	...updateAlias.description,
	...deleteAlias.description,
	...getAliasMembers.description,
];

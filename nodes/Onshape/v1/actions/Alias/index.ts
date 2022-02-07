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
				value: 'GET /aliases',
				description: 'Retrieve an array of aliases for the enterprise - get /aliases',
			},
			{
				name: 'createAlias',
				value: 'POST /aliases',
				description: 'Create an alias that contains users and/or teams - post /aliases',
			},
			{
				name: 'getAlias',
				value: 'GET /aliases/{aid}',
				description: 'Retrieve an alias by alias ID - get /aliases/{aid}',
			},
			{
				name: 'updateAlias',
				value: 'POST /aliases/{aid}',
				description: 'Update alias by alias ID - post /aliases/{aid}',
			},
			{
				name: 'deleteAlias',
				value: 'DELETE /aliases/{aid}',
				description: 'Delete alias by alias ID - delete /aliases/{aid}',
			},
			{
				name: 'getAliasMembers',
				value: 'GET /aliases/{aid}/members',
				description: 'Retreive all alias members by alias ID - get /aliases/{aid}/members',
			},
		],
		default: 'GET /aliases',
		description: 'The operation to perform',
	},
	...getAliasesInCompany.description,
	...createAlias.description,
	...getAlias.description,
	...updateAlias.description,
	...deleteAlias.description,
	...getAliasMembers.description,
];

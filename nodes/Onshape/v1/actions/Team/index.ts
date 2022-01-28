import * as getMembers from './getMembers';
import * as find from './find';
import * as getTeam from './getTeam';

import { INodeProperties } from 'n8n-workflow';

export {
	getMembers,
	find,
	getTeam,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Team',
				],
			},
		},
		options: [
			{
				name: 'getMembers',
				value: 'GET /api/teams/{tid}/members',
				description: 'get /api/teams/{tid}/members',
			},
			{
				name: 'find',
				value: 'GET /api/teams',
				description: 'get /api/teams',
			},
			{
				name: 'getTeam',
				value: 'GET /api/teams/{tid}',
				description: 'get /api/teams/{tid}',
			},
		],
		default: 'GET /api/teams/{tid}/members',
		description: 'The operation to perform',
	},
	...getMembers.description,
	...find.description,
	...getTeam.description,
];

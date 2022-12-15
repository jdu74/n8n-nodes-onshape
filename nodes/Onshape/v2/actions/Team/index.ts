import * as find from './find';
import * as getTeam from './getTeam';
import * as getMembers from './getMembers';

import { INodeProperties } from 'n8n-workflow';

export {
	find,
	getTeam,
	getMembers,
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
				name: 'find',
				value: 'GET /teams',
				description: 'Retrieve list of teams for current user. - get /teams',
			},
			{
				name: 'getTeam',
				value: 'GET /teams/{tid}',
				description: 'Retrieve team information by team ID. - get /teams/{tid}',
			},
			{
				name: 'getMembers',
				value: 'GET /teams/{tid}/members',
				description: 'Retrieve team members by team ID. - get /teams/{tid}/members',
			},
		],
		default: 'GET /teams',
		description: 'The operation to perform',
	},
	...find.description,
	...getTeam.description,
	...getMembers.description,
];

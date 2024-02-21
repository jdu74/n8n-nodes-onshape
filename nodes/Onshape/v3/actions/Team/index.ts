import * as Find from './find';
import * as GetMembers from './getMembers';
import * as GetTeam from './getTeam';

import { INodeProperties } from 'n8n-workflow';

export {
	Find,
	GetMembers,
	GetTeam,
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
					'Team',
				],
			},
		},
		default: 'GET /teams',
		options: [
			{
				name: 'find',
				value: 'GET /teams',
				description: 'Get a list of all teams the current user belongs to. - get /teams',
				action: 'Find',
			},
			{
				name: 'getMembers',
				value: 'GET /teams/{tid}/members',
				description: "Get a list of a team's members. - get /teams/{tid}/members",
				action: 'Get Members',
			},
			{
				name: 'getTeam',
				value: 'GET /teams/{tid}',
				description: 'Get team information by team ID. - get /teams/{tid}',
				action: 'Get Team',
			},
		],
	},
	...Find.description,
	...GetMembers.description,
	...GetTeam.description,
];

import * as Find from './find';
import * as GetTeam from './getTeam';
import * as GetMembers from './getMembers';

import { INodeProperties } from 'n8n-workflow';

export {
	Find,
	GetTeam,
	GetMembers,
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
				description: 'Get a list of all teams the current user belongs to. - get /teams',
			},
			{
				name: 'getTeam',
				value: 'GET /teams/{tid}',
				description: 'Get team information by team ID. - get /teams/{tid}',
			},
			{
				name: 'getMembers',
				value: 'GET /teams/{tid}/members',
				description: 'Returns a maximum of 20 per page. - get /teams/{tid}/members',
			},
		],
		default: 'GET /teams',
		description: 'The operation to perform',
	},
	...Find.description,
	...GetTeam.description,
	...GetMembers.description,
];

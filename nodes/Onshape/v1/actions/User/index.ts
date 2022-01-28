import * as session from './session';
import * as getUserSettings from './getUserSettings';
import * as getUserSettingsCurrentLoggedInUser from './getUserSettingsCurrentLoggedInUser';
import * as sessionInfo from './sessionInfo';

import { INodeProperties } from 'n8n-workflow';

export {
	session,
	getUserSettings,
	getUserSettingsCurrentLoggedInUser,
	sessionInfo,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'User',
				],
			},
		},
		options: [
			{
				name: 'session',
				value: 'POST /api/users/session',
				description: 'post /api/users/session',
			},
			{
				name: 'getUserSettings',
				value: 'GET /api/users/{uid}/settings',
				description: 'get /api/users/{uid}/settings',
			},
			{
				name: 'getUserSettingsCurrentLoggedInUser',
				value: 'GET /api/users/settings',
				description: 'get /api/users/settings',
			},
			{
				name: 'sessionInfo',
				value: 'GET /api/users/sessioninfo',
				description: 'get /api/users/sessioninfo',
			},
		],
		default: 'POST /api/users/session',
		description: 'The operation to perform',
	},
	...session.description,
	...getUserSettings.description,
	...getUserSettingsCurrentLoggedInUser.description,
	...sessionInfo.description,
];

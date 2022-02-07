import * as session from './session';
import * as sessionInfo from './sessionInfo';
import * as getUserSettingsCurrentLoggedInUser from './getUserSettingsCurrentLoggedInUser';
import * as getUserSettings from './getUserSettings';

import { INodeProperties } from 'n8n-workflow';

export {
	session,
	sessionInfo,
	getUserSettingsCurrentLoggedInUser,
	getUserSettings,
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
				value: 'POST /users/session',
				description: 'post /users/session',
			},
			{
				name: 'sessionInfo',
				value: 'GET /users/sessioninfo',
				description: 'get /users/sessioninfo',
			},
			{
				name: 'getUserSettingsCurrentLoggedInUser',
				value: 'GET /users/settings',
				description: 'get /users/settings',
			},
			{
				name: 'getUserSettings',
				value: 'GET /users/{uid}/settings',
				description: 'get /users/{uid}/settings',
			},
		],
		default: 'POST /users/session',
		description: 'The operation to perform',
	},
	...session.description,
	...sessionInfo.description,
	...getUserSettingsCurrentLoggedInUser.description,
	...getUserSettings.description,
];

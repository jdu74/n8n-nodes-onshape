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
				description: 'Check if current user is signed-in.Information returned depends on OAuth2ReadPII scope. - post /users/session',
			},
			{
				name: 'sessionInfo',
				value: 'GET /users/sessioninfo',
				description: 'Check if current user is signed-in. Information returned depends on OAuth2ReadPII scope. - get /users/sessioninfo',
			},
			{
				name: 'getUserSettingsCurrentLoggedInUser',
				value: 'GET /users/settings',
				description: 'Get user settings for the currently signed-in user if there is one, or else return the default settings. - get /users/settings',
			},
			{
				name: 'getUserSettings',
				value: 'GET /users/{uid}/settings',
				description: 'Retrieve user settings by user ID. - get /users/{uid}/settings',
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

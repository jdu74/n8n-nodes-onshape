import * as GetUserSettings from './getUserSettings';
import * as GetUserSettingsCurrentLoggedInUser from './getUserSettingsCurrentLoggedInUser';
import * as Session from './session';
import * as SessionInfo from './sessionInfo';

import { INodeProperties } from 'n8n-workflow';

export {
	GetUserSettings,
	GetUserSettingsCurrentLoggedInUser,
	Session,
	SessionInfo,
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
					'User',
				],
			},
		},
		default: 'POST /users/session',
		options: [
			{
				name: 'getUserSettings',
				value: 'GET /users/{uid}/settings',
				description: 'Get the user settings for any user in your organization (admins only). - get /users/{uid}/settings',
				action: 'Get User Settings',
			},
			{
				name: 'getUserSettingsCurrentLoggedInUser',
				value: 'GET /users/settings',
				description: 'Get the user settings for the signed-in user (i.e., you) for the current session. - get /users/settings',
				action: 'Get User Settings Current Logged In User',
			},
			{
				name: 'session',
				value: 'POST /users/session',
				description: "Authenticate a user's Onshape credentials, and create a session. - post /users/session",
				action: 'Session',
			},
			{
				name: 'sessionInfo',
				value: 'GET /users/sessioninfo',
				description: 'Get the session information for an authenticated (signed-in) user. - get /users/sessioninfo',
				action: 'Session Info',
			},
		],
	},
	...GetUserSettings.description,
	...GetUserSettingsCurrentLoggedInUser.description,
	...Session.description,
	...SessionInfo.description,
];

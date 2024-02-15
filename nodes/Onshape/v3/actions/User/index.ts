import * as Session from './session';
import * as SessionInfo from './sessionInfo';
import * as GetUserSettingsCurrentLoggedInUser from './getUserSettingsCurrentLoggedInUser';
import * as GetUserSettings from './getUserSettings';

import { INodeProperties } from 'n8n-workflow';

export {
	Session,
	SessionInfo,
	GetUserSettingsCurrentLoggedInUser,
	GetUserSettings,
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
				description: "Returned information depends on caller's `OAuth2ReadPll` scope. - post /users/session",
			},
			{
				name: 'sessionInfo',
				value: 'GET /users/sessioninfo',
				description: "Returned information depends on caller's `OAuth2ReadPll` scope. - get /users/sessioninfo",
			},
			{
				name: 'getUserSettingsCurrentLoggedInUser',
				value: 'GET /users/settings',
				description: '* Non-admins can call this API for their own user ID. \n* Mouse button settings are contained in `reverseScrollWheelZoomDirection` and `viewManipulationMouseKeyMapping`. \n* For each action in `viewManipulationMouseKeyMapping`, an array of modifier key/mouse combos is provided that performs that action. \n* Possible modifier keys include `SHIFT` and `CTRL`. \n* Possible mouse buttons include `MMB` (middle mouse button), `RMB` (right mouse button), and `SCROLLWHEEL`. \n* Scrolling forward zooms in, unless `reverseScrollWheelZoomDirection` is set to `true`. - get /users/settings',
			},
			{
				name: 'getUserSettings',
				value: 'GET /users/{uid}/settings',
				description: '* Mouse button settings are contained in `reverseScrollWheelZoomDirection` and `viewManipulationMouseKeyMapping`. \n* For each action in `viewManipulationMouseKeyMapping`, an array of modifier key/mouse combos is provided that performs that action. \n* Possible modifier keys include `SHIFT` and `CTRL`. \n* Possible mouse buttons include `MMB` (middle mouse button), `RMB` (right mouse button), and `SCROLLWHEEL`. \n* Scrolling forward zooms in, unless `reverseScrollWheelZoomDirection` is set to `true`. - get /users/{uid}/settings',
			},
		],
		default: 'POST /users/session',
		description: 'The operation to perform',
	},
	...Session.description,
	...SessionInfo.description,
	...GetUserSettingsCurrentLoggedInUser.description,
	...GetUserSettings.description,
];

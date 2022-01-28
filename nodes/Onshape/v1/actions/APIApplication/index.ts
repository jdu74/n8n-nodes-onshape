import * as getUserAppSettings from './getUserAppSettings';
import * as updateAppSettings from './updateAppSettings';
import * as deleteAppSettings from './deleteAppSettings';
import * as getCompanyAppSettings from './getCompanyAppSettings';
import * as updateAppCompanySettings from './updateAppCompanySettings';
import * as deleteCompanyAppSettings from './deleteCompanyAppSettings';

import { INodeProperties } from 'n8n-workflow';

export {
	getUserAppSettings,
	updateAppSettings,
	deleteAppSettings,
	getCompanyAppSettings,
	updateAppCompanySettings,
	deleteCompanyAppSettings,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'APIApplication',
				],
			},
		},
		options: [
			{
				name: 'getUserAppSettings',
				value: 'GET /api/applications/clients/{cid}/settings/users/{uid}',
				description: 'Retrieve application settings for a user by client ID and user ID. This API may only be used with an OAuth token and only by the current user. - get /api/applications/clients/{cid}/settings/users/{uid}',
			},
			{
				name: 'updateAppSettings',
				value: 'POST /api/applications/clients/{cid}/settings/users/{uid}',
				description: 'Update or create application settings for a user by client ID and user ID. This API may only be used with an OAuth token and only by the current user. - post /api/applications/clients/{cid}/settings/users/{uid}',
			},
			{
				name: 'deleteAppSettings',
				value: 'DELETE /api/applications/clients/{cid}/settings/users/{uid}',
				description: 'Delete application settings for a user by client ID and user ID. This API may only be used with an OAuth token and only by the current user. - delete /api/applications/clients/{cid}/settings/users/{uid}',
			},
			{
				name: 'getCompanyAppSettings',
				value: 'GET /api/applications/clients/{cid}/settings/companies/{cpid}',
				description: 'Retrieve company level settings for this application by client ID and company ID. This API may only be used with an OAuth token and only by the current user. - get /api/applications/clients/{cid}/settings/companies/{cpid}',
			},
			{
				name: 'updateAppCompanySettings',
				value: 'POST /api/applications/clients/{cid}/settings/companies/{cpid}',
				description: 'Update or create company level settings for this application by client ID and company ID. This API may only be used with an OAuth token and only by the current user. - post /api/applications/clients/{cid}/settings/companies/{cpid}',
			},
			{
				name: 'deleteCompanyAppSettings',
				value: 'DELETE /api/applications/clients/{cid}/settings/companies/{cpid}',
				description: 'Delete company level settings for this application by client ID and company ID. This API may only be used with an OAuth token and only by the current user. - delete /api/applications/clients/{cid}/settings/companies/{cpid}',
			},
		],
		default: 'GET /api/applications/clients/{cid}/settings/users/{uid}',
		description: 'The operation to perform',
	},
	...getUserAppSettings.description,
	...updateAppSettings.description,
	...deleteAppSettings.description,
	...getCompanyAppSettings.description,
	...updateAppCompanySettings.description,
	...deleteCompanyAppSettings.description,
];

import * as getCompanyAppSettings from './getCompanyAppSettings';
import * as updateAppCompanySettings from './updateAppCompanySettings';
import * as deleteCompanyAppSettings from './deleteCompanyAppSettings';
import * as getUserAppSettings from './getUserAppSettings';
import * as updateAppSettings from './updateAppSettings';
import * as deleteAppSettings from './deleteAppSettings';

import { INodeProperties } from 'n8n-workflow';

export {
	getCompanyAppSettings,
	updateAppCompanySettings,
	deleteCompanyAppSettings,
	getUserAppSettings,
	updateAppSettings,
	deleteAppSettings,
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
				name: 'getCompanyAppSettings',
				value: 'GET /applications/clients/{cid}/settings/companies/{cpid}',
				description: 'Retrieve company level settings for this application by client ID and company ID. This API may only be used with an OAuth token and only by the current user. - get /applications/clients/{cid}/settings/companies/{cpid}',
			},
			{
				name: 'updateAppCompanySettings',
				value: 'POST /applications/clients/{cid}/settings/companies/{cpid}',
				description: 'Update or create company level settings for this application by client ID and company ID. This API may only be used with an OAuth token and only by the current user. - post /applications/clients/{cid}/settings/companies/{cpid}',
			},
			{
				name: 'deleteCompanyAppSettings',
				value: 'DELETE /applications/clients/{cid}/settings/companies/{cpid}',
				description: 'Delete company level settings for this application by client ID and company ID. This API may only be used with an OAuth token and only by the current user. - delete /applications/clients/{cid}/settings/companies/{cpid}',
			},
			{
				name: 'getUserAppSettings',
				value: 'GET /applications/clients/{cid}/settings/users/{uid}',
				description: 'Retrieve application settings for a user by client ID and user ID. This API may only be used with an OAuth token and only by the current user. - get /applications/clients/{cid}/settings/users/{uid}',
			},
			{
				name: 'updateAppSettings',
				value: 'POST /applications/clients/{cid}/settings/users/{uid}',
				description: 'Update or create application settings for a user by client ID and user ID. This API may only be used with an OAuth token and only by the current user. - post /applications/clients/{cid}/settings/users/{uid}',
			},
			{
				name: 'deleteAppSettings',
				value: 'DELETE /applications/clients/{cid}/settings/users/{uid}',
				description: 'Delete application settings for a user by client ID and user ID. This API may only be used with an OAuth token and only by the current user. - delete /applications/clients/{cid}/settings/users/{uid}',
			},
		],
		default: 'GET /applications/clients/{cid}/settings/companies/{cpid}',
		description: 'The operation to perform',
	},
	...getCompanyAppSettings.description,
	...updateAppCompanySettings.description,
	...deleteCompanyAppSettings.description,
	...getUserAppSettings.description,
	...updateAppSettings.description,
	...deleteAppSettings.description,
];

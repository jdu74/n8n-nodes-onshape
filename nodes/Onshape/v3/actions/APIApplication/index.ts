import * as DeleteAppSettings from './deleteAppSettings';
import * as DeleteCompanyAppSettings from './deleteCompanyAppSettings';
import * as GetApplicableExtensionsForClient from './getApplicableExtensionsForClient';
import * as GetCompanyAppSettings from './getCompanyAppSettings';
import * as GetUserAppSettings from './getUserAppSettings';
import * as UpdateAppCompanySettings from './updateAppCompanySettings';
import * as UpdateAppSettings from './updateAppSettings';

import { INodeProperties } from 'n8n-workflow';

export {
	DeleteAppSettings,
	DeleteCompanyAppSettings,
	GetApplicableExtensionsForClient,
	GetCompanyAppSettings,
	GetUserAppSettings,
	UpdateAppCompanySettings,
	UpdateAppSettings,
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
					'APIApplication',
				],
			},
		},
		default: 'GET /applications/clients/{cid}/settings/companies/{cpid}',
		options: [
			{
				name: 'deleteAppSettings',
				value: 'DELETE /applications/clients/{cid}/settings/users/{uid}',
				description: "Delete a user's application preference settings. - delete /applications/clients/{cid}/settings/users/{uid}",
				action: 'Delete App Settings',
			},
			{
				name: 'deleteCompanyAppSettings',
				value: 'DELETE /applications/clients/{cid}/settings/companies/{cpid}',
				description: "Delete a company's application preference settings. - delete /applications/clients/{cid}/settings/companies/{cpid}",
				action: 'Delete Company App Settings',
			},
			{
				name: 'getApplicableExtensionsForClient',
				value: 'GET /applications/extensions/user/{uid}/client/{cid}',
				description: 'Get a list of the client extensions the specified user has granted/accepted terms for. - get /applications/extensions/user/{uid}/client/{cid}',
				action: 'Get Applicable Extensions For Client',
			},
			{
				name: 'getCompanyAppSettings',
				value: 'GET /applications/clients/{cid}/settings/companies/{cpid}',
				description: 'Get company-level preference settings for an application. - get /applications/clients/{cid}/settings/companies/{cpid}',
				action: 'Get Company App Settings',
			},
			{
				name: 'getUserAppSettings',
				value: 'GET /applications/clients/{cid}/settings/users/{uid}',
				description: 'Get user-level preference settings for an application. - get /applications/clients/{cid}/settings/users/{uid}',
				action: 'Get User App Settings',
			},
			{
				name: 'updateAppCompanySettings',
				value: 'POST /applications/clients/{cid}/settings/companies/{cpid}',
				description: 'Update company preference settings for an application. - post /applications/clients/{cid}/settings/companies/{cpid}',
				action: 'Update App Company Settings',
			},
			{
				name: 'updateAppSettings',
				value: 'POST /applications/clients/{cid}/settings/users/{uid}',
				description: "Update a user's application preference settings. - post /applications/clients/{cid}/settings/users/{uid}",
				action: 'Update App Settings',
			},
		],
	},
	...DeleteAppSettings.description,
	...DeleteCompanyAppSettings.description,
	...GetApplicableExtensionsForClient.description,
	...GetCompanyAppSettings.description,
	...GetUserAppSettings.description,
	...UpdateAppCompanySettings.description,
	...UpdateAppSettings.description,
];

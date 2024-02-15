import * as GetCompanyAppSettings from './getCompanyAppSettings';
import * as UpdateAppCompanySettings from './updateAppCompanySettings';
import * as DeleteCompanyAppSettings from './deleteCompanyAppSettings';
import * as GetUserAppSettings from './getUserAppSettings';
import * as UpdateAppSettings from './updateAppSettings';
import * as DeleteAppSettings from './deleteAppSettings';
import * as GetApplicableExtensionsForClient from './getApplicableExtensionsForClient';

import { INodeProperties } from 'n8n-workflow';

export {
	GetCompanyAppSettings,
	UpdateAppCompanySettings,
	DeleteCompanyAppSettings,
	GetUserAppSettings,
	UpdateAppSettings,
	DeleteAppSettings,
	GetApplicableExtensionsForClient,
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
				description: 'This API is only usable with an OAuth token and only by the current user or admin. - get /applications/clients/{cid}/settings/companies/{cpid}',
			},
			{
				name: 'updateAppCompanySettings',
				value: 'POST /applications/clients/{cid}/settings/companies/{cpid}',
				description: 'This API is only usable with an OAuth token and only by the current user or admin. - post /applications/clients/{cid}/settings/companies/{cpid}',
			},
			{
				name: 'deleteCompanyAppSettings',
				value: 'DELETE /applications/clients/{cid}/settings/companies/{cpid}',
				description: 'This API is only usable with an OAuth token and only by the current user or admin. - delete /applications/clients/{cid}/settings/companies/{cpid}',
			},
			{
				name: 'getUserAppSettings',
				value: 'GET /applications/clients/{cid}/settings/users/{uid}',
				description: 'This API is only usable with an OAuth token and only by the current user or admin. - get /applications/clients/{cid}/settings/users/{uid}',
			},
			{
				name: 'updateAppSettings',
				value: 'POST /applications/clients/{cid}/settings/users/{uid}',
				description: 'This API is only usable with an OAuth token and only by the current user or admin. - post /applications/clients/{cid}/settings/users/{uid}',
			},
			{
				name: 'deleteAppSettings',
				value: 'DELETE /applications/clients/{cid}/settings/users/{uid}',
				description: 'This API is only usable with an OAuth token and only by the current user or admin. - delete /applications/clients/{cid}/settings/users/{uid}',
			},
			{
				name: 'getApplicableExtensionsForClient',
				value: 'GET /applications/extensions/user/{uid}/client/{cid}',
				description: 'Get a list of the client extensions the specified user has granted/accepted terms for. - get /applications/extensions/user/{uid}/client/{cid}',
			},
		],
		default: 'GET /applications/clients/{cid}/settings/companies/{cpid}',
		description: 'The operation to perform',
	},
	...GetCompanyAppSettings.description,
	...UpdateAppCompanySettings.description,
	...DeleteCompanyAppSettings.description,
	...GetUserAppSettings.description,
	...UpdateAppSettings.description,
	...DeleteAppSettings.description,
	...GetApplicableExtensionsForClient.description,
];

import * as FindCompany from './findCompany';
import * as GetCompany from './getCompany';
import * as GetDocumentsByName from './getDocumentsByName';
import * as AddUserToCompany from './addUserToCompany';
import * as UpdateCompanyUser from './updateCompanyUser';
import * as RemoveUserFromCompany from './removeUserFromCompany';

import { INodeProperties } from 'n8n-workflow';

export {
	FindCompany,
	GetCompany,
	GetDocumentsByName,
	AddUserToCompany,
	UpdateCompanyUser,
	RemoveUserFromCompany,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Company',
				],
			},
		},
		options: [
			{
				name: 'findCompany',
				value: 'GET /companies',
				description: 'If no user is specified, will return all companies associated with the current user. - get /companies',
			},
			{
				name: 'getCompany',
				value: 'GET /companies/{cid}',
				description: 'Get company information by company ID. - get /companies/{cid}',
			},
			{
				name: 'getDocumentsByName',
				value: 'GET /companies/{cid}/documentsbyname',
				description: 'This API can only be called by company admins. Use the `name` field for the exact document name string. - get /companies/{cid}/documentsbyname',
			},
			{
				name: 'addUserToCompany',
				value: 'POST /companies/{cid}/users',
				description: 'Returns the company user info. - post /companies/{cid}/users',
			},
			{
				name: 'updateCompanyUser',
				value: 'POST /companies/{cid}/users/{uid}',
				description: 'Returns updated company user info. Global permissions can only be updated by the company admin. - post /companies/{cid}/users/{uid}',
			},
			{
				name: 'removeUserFromCompany',
				value: 'DELETE /companies/{cid}/users/{uid}',
				description: 'Remove a user from a company, company teams, and all the direct shares. - delete /companies/{cid}/users/{uid}',
			},
		],
		default: 'GET /companies',
		description: 'The operation to perform',
	},
	...FindCompany.description,
	...GetCompany.description,
	...GetDocumentsByName.description,
	...AddUserToCompany.description,
	...UpdateCompanyUser.description,
	...RemoveUserFromCompany.description,
];

import * as AddUserToCompany from './addUserToCompany';
import * as FindCompany from './findCompany';
import * as GetCompany from './getCompany';
import * as GetDocumentsByName from './getDocumentsByName';
import * as RemoveUserFromCompany from './removeUserFromCompany';
import * as UpdateCompanyUser from './updateCompanyUser';

import { INodeProperties } from 'n8n-workflow';

export {
	AddUserToCompany,
	FindCompany,
	GetCompany,
	GetDocumentsByName,
	RemoveUserFromCompany,
	UpdateCompanyUser,
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
					'Company',
				],
			},
		},
		default: 'GET /companies',
		options: [
			{
				name: 'addUserToCompany',
				value: 'POST /companies/{cid}/users',
				description: 'Add a user to a company. - post /companies/{cid}/users',
				action: 'Add User To Company',
			},
			{
				name: 'findCompany',
				value: 'GET /companies',
				description: 'Get all companies to which the specified user belongs. - get /companies',
				action: 'Find Company',
			},
			{
				name: 'getCompany',
				value: 'GET /companies/{cid}',
				description: 'Get company information by company ID. - get /companies/{cid}',
				action: 'Get Company',
			},
			{
				name: 'getDocumentsByName',
				value: 'GET /companies/{cid}/documentsbyname',
				description: 'Get document by exact document name. - get /companies/{cid}/documentsbyname',
				action: 'Get Documents By Name',
			},
			{
				name: 'removeUserFromCompany',
				value: 'DELETE /companies/{cid}/users/{uid}',
				description: 'Remove a user from a company, company teams, and all the direct shares. - delete /companies/{cid}/users/{uid}',
				action: 'Remove User From Company',
			},
			{
				name: 'updateCompanyUser',
				value: 'POST /companies/{cid}/users/{uid}',
				description: "Update the company's information for a user. - post /companies/{cid}/users/{uid}",
				action: 'Update Company User',
			},
		],
	},
	...AddUserToCompany.description,
	...FindCompany.description,
	...GetCompany.description,
	...GetDocumentsByName.description,
	...RemoveUserFromCompany.description,
	...UpdateCompanyUser.description,
];

import * as CreateTableTemplate from './createTableTemplate';
import * as DeleteTableTemplate from './deleteTableTemplate';
import * as GetByCompanyId from './getByCompanyId';
import * as GetByDocumentId from './getByDocumentId';
import * as GetTableTemplate from './getTableTemplate';

import { INodeProperties } from 'n8n-workflow';

export {
	CreateTableTemplate,
	DeleteTableTemplate,
	GetByCompanyId,
	GetByDocumentId,
	GetTableTemplate,
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
					'PropertiesTableTemplate',
				],
			},
		},
		default: 'POST /tabletemplates',
		options: [
			{
				name: 'createTableTemplate',
				value: 'POST /tabletemplates',
				description: 'Create a new properties table template. - post /tabletemplates',
				action: 'Create Table Template',
			},
			{
				name: 'deleteTableTemplate',
				value: 'DELETE /tabletemplates/{tid}',
				description: 'Delete a properties table template. - delete /tabletemplates/{tid}',
				action: 'Delete Table Template',
			},
			{
				name: 'getByCompanyId',
				value: 'GET /tabletemplates/companies/{cid}',
				description: 'Get all properties table templates available for a company. - get /tabletemplates/companies/{cid}',
				action: 'Get By Company Id',
			},
			{
				name: 'getByDocumentId',
				value: 'GET /tabletemplates/d/{did}',
				description: 'Get all table templates that are available to use on the provided document. - get /tabletemplates/d/{did}',
				action: 'Get By Document Id',
			},
			{
				name: 'getTableTemplate',
				value: 'GET /tabletemplates/{tid}',
				description: 'Get a properties table template by template ID. - get /tabletemplates/{tid}',
				action: 'Get Table Template',
			},
		],
	},
	...CreateTableTemplate.description,
	...DeleteTableTemplate.description,
	...GetByCompanyId.description,
	...GetByDocumentId.description,
	...GetTableTemplate.description,
];

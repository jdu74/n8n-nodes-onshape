import * as CreateTableTemplate from './createTableTemplate';
import * as GetByCompanyId from './getByCompanyId';
import * as GetByDocumentId from './getByDocumentId';
import * as GetTableTemplate from './getTableTemplate';
import * as DeleteTableTemplate from './deleteTableTemplate';

import { INodeProperties } from 'n8n-workflow';

export {
	CreateTableTemplate,
	GetByCompanyId,
	GetByDocumentId,
	GetTableTemplate,
	DeleteTableTemplate,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'PropertiesTableTemplate',
				],
			},
		},
		options: [
			{
				name: 'createTableTemplate',
				value: 'POST /tabletemplates',
				description: 'Create a new properties table template. - post /tabletemplates',
			},
			{
				name: 'getByCompanyId',
				value: 'GET /tabletemplates/companies/{cid}',
				description: 'Get all properties table templates available for a company. - get /tabletemplates/companies/{cid}',
			},
			{
				name: 'getByDocumentId',
				value: 'GET /tabletemplates/d/{did}',
				description: 'Get all table templates that are available to use on the provided document. - get /tabletemplates/d/{did}',
			},
			{
				name: 'getTableTemplate',
				value: 'GET /tabletemplates/{tid}',
				description: 'Get a properties table template by template ID. - get /tabletemplates/{tid}',
			},
			{
				name: 'deleteTableTemplate',
				value: 'DELETE /tabletemplates/{tid}',
				description: 'Delete a properties table template. - delete /tabletemplates/{tid}',
			},
		],
		default: 'POST /tabletemplates',
		description: 'The operation to perform',
	},
	...CreateTableTemplate.description,
	...GetByCompanyId.description,
	...GetByDocumentId.description,
	...GetTableTemplate.description,
	...DeleteTableTemplate.description,
];

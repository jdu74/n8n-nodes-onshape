import * as findCompany from './findCompany';
import * as getCompany from './getCompany';
import * as getDocumentsByName from './getDocumentsByName';

import { INodeProperties } from 'n8n-workflow';

export {
	findCompany,
	getCompany,
	getDocumentsByName,
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
				value: 'GET /api/companies',
				description: 'Get User companies. - get /api/companies',
			},
			{
				name: 'getCompany',
				value: 'GET /api/companies/{cid}',
				description: 'Get company. - get /api/companies/{cid}',
			},
			{
				name: 'getDocumentsByName',
				value: 'GET /api/companies/{cid}/documentsbyname',
				description: 'get /api/companies/{cid}/documentsbyname',
			},
		],
		default: 'GET /api/companies',
		description: 'The operation to perform',
	},
	...findCompany.description,
	...getCompany.description,
	...getDocumentsByName.description,
];

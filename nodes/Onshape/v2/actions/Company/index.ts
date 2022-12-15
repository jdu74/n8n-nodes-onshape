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
				value: 'GET /companies',
				description: 'Retrieve user companies. - get /companies',
			},
			{
				name: 'getCompany',
				value: 'GET /companies/{cid}',
				description: 'Retrieve company by company ID. - get /companies/{cid}',
			},
			{
				name: 'getDocumentsByName',
				value: 'GET /companies/{cid}/documentsbyname',
				description: 'Retrieve a list of company owned documents by document name. Accessible only by company admins. - get /companies/{cid}/documentsbyname',
			},
		],
		default: 'GET /companies',
		description: 'The operation to perform',
	},
	...findCompany.description,
	...getCompany.description,
	...getDocumentsByName.description,
];

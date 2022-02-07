import * as enumerateRevisions from './enumerateRevisions';
import * as getRevisionHistoryInCompanyByElementId from './getRevisionHistoryInCompanyByElementId';
import * as getRevisionHistoryInCompanyByPartId from './getRevisionHistoryInCompanyByPartId';
import * as getRevisionHistoryInCompanyByPartNumber from './getRevisionHistoryInCompanyByPartNumber';
import * as deleteRevisionHistory from './deleteRevisionHistory';
import * as getLatestInDocumentOrCompany from './getLatestInDocumentOrCompany';

import { INodeProperties } from 'n8n-workflow';

export {
	enumerateRevisions,
	getRevisionHistoryInCompanyByElementId,
	getRevisionHistoryInCompanyByPartId,
	getRevisionHistoryInCompanyByPartNumber,
	deleteRevisionHistory,
	getLatestInDocumentOrCompany,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Revision',
				],
			},
		},
		options: [
			{
				name: 'enumerateRevisions',
				value: 'GET /revisions/companies/{cid}',
				description: 'get /revisions/companies/{cid}',
			},
			{
				name: 'getRevisionHistoryInCompanyByElementId',
				value: 'GET /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}',
				description: 'get /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}',
			},
			{
				name: 'getRevisionHistoryInCompanyByPartId',
				value: 'GET /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}/p/{pid}',
				description: 'get /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}/p/{pid}',
			},
			{
				name: 'getRevisionHistoryInCompanyByPartNumber',
				value: 'GET /revisions/companies/{cid}/partnumber/{pnum}',
				description: 'get /revisions/companies/{cid}/partnumber/{pnum}',
			},
			{
				name: 'deleteRevisionHistory',
				value: 'DELETE /revisions/companies/{cid}/partnumber/{pnum}/elementType/{et}',
				description: 'delete /revisions/companies/{cid}/partnumber/{pnum}/elementType/{et}',
			},
			{
				name: 'getLatestInDocumentOrCompany',
				value: 'GET /revisions/{cd}/{cdid}/p/{pnum}/latest',
				description: 'get /revisions/{cd}/{cdid}/p/{pnum}/latest',
			},
		],
		default: 'GET /revisions/companies/{cid}',
		description: 'The operation to perform',
	},
	...enumerateRevisions.description,
	...getRevisionHistoryInCompanyByElementId.description,
	...getRevisionHistoryInCompanyByPartId.description,
	...getRevisionHistoryInCompanyByPartNumber.description,
	...deleteRevisionHistory.description,
	...getLatestInDocumentOrCompany.description,
];

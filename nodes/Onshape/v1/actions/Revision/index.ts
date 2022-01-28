import * as deleteRevisionHistory from './deleteRevisionHistory';
import * as enumerateRevisions from './enumerateRevisions';
import * as getLatestInDocumentOrCompany from './getLatestInDocumentOrCompany';
import * as getRevisionHistoryInCompanyByElementId from './getRevisionHistoryInCompanyByElementId';
import * as getRevisionHistoryInCompanyByPartId from './getRevisionHistoryInCompanyByPartId';
import * as getRevisionHistoryInCompanyByPartNumber from './getRevisionHistoryInCompanyByPartNumber';

import { INodeProperties } from 'n8n-workflow';

export {
	deleteRevisionHistory,
	enumerateRevisions,
	getLatestInDocumentOrCompany,
	getRevisionHistoryInCompanyByElementId,
	getRevisionHistoryInCompanyByPartId,
	getRevisionHistoryInCompanyByPartNumber,
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
				name: 'deleteRevisionHistory',
				value: 'DELETE /api/revisions/companies/{cid}/partnumber/{pnum}/elementType/{et}',
				description: 'delete /api/revisions/companies/{cid}/partnumber/{pnum}/elementType/{et}',
			},
			{
				name: 'enumerateRevisions',
				value: 'GET /api/revisions/companies/{cid}',
				description: 'get /api/revisions/companies/{cid}',
			},
			{
				name: 'getLatestInDocumentOrCompany',
				value: 'GET /api/revisions/{cd}/{cdid}/p/{pnum}/latest',
				description: 'get /api/revisions/{cd}/{cdid}/p/{pnum}/latest',
			},
			{
				name: 'getRevisionHistoryInCompanyByElementId',
				value: 'GET /api/revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}',
				description: 'get /api/revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}',
			},
			{
				name: 'getRevisionHistoryInCompanyByPartId',
				value: 'GET /api/revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}/p/{pid}',
				description: 'get /api/revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}/p/{pid}',
			},
			{
				name: 'getRevisionHistoryInCompanyByPartNumber',
				value: 'GET /api/revisions/companies/{cid}/partnumber/{pnum}',
				description: 'get /api/revisions/companies/{cid}/partnumber/{pnum}',
			},
		],
		default: 'DELETE /api/revisions/companies/{cid}/partnumber/{pnum}/elementType/{et}',
		description: 'The operation to perform',
	},
	...deleteRevisionHistory.description,
	...enumerateRevisions.description,
	...getLatestInDocumentOrCompany.description,
	...getRevisionHistoryInCompanyByElementId.description,
	...getRevisionHistoryInCompanyByPartId.description,
	...getRevisionHistoryInCompanyByPartNumber.description,
];

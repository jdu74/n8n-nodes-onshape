import * as getRevisionByPartNumber from './getRevisionByPartNumber';
import * as enumerateRevisions from './enumerateRevisions';
import * as getRevisionHistoryInCompanyByElementId from './getRevisionHistoryInCompanyByElementId';
import * as getRevisionHistoryInCompanyByPartId from './getRevisionHistoryInCompanyByPartId';
import * as getRevisionHistoryInCompanyByPartNumber from './getRevisionHistoryInCompanyByPartNumber';
import * as deleteRevisionHistory from './deleteRevisionHistory';
import * as getAllInDocumentVersion from './getAllInDocumentVersion';
import * as getLatestInDocumentOrCompany from './getLatestInDocumentOrCompany';

import { INodeProperties } from 'n8n-workflow';

export {
	getRevisionByPartNumber,
	enumerateRevisions,
	getRevisionHistoryInCompanyByElementId,
	getRevisionHistoryInCompanyByPartId,
	getRevisionHistoryInCompanyByPartNumber,
	deleteRevisionHistory,
	getAllInDocumentVersion,
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
				name: 'getRevisionByPartNumber',
				value: 'GET /revisions/c/{cid}/partnumber/{pnum}',
				description: 'Get Navigation URL for part number and revision. - get /revisions/c/{cid}/partnumber/{pnum}',
			},
			{
				name: 'enumerateRevisions',
				value: 'GET /revisions/companies/{cid}',
				description: 'Enumerate all revisions released in a company by company ID. - get /revisions/companies/{cid}',
			},
			{
				name: 'getRevisionHistoryInCompanyByElementId',
				value: 'GET /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}',
				description: 'Retrieve a list of all revisions for a part in a company by company ID, document ID, workspace or version ID, and tab ID. - get /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}',
			},
			{
				name: 'getRevisionHistoryInCompanyByPartId',
				value: 'GET /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}/p/{pid}',
				description: 'Retrieve a list of all revisions for a part in a company by company ID, document ID, workspace or version ID, tab ID, and part ID. - get /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}/p/{pid}',
			},
			{
				name: 'getRevisionHistoryInCompanyByPartNumber',
				value: 'GET /revisions/companies/{cid}/partnumber/{pnum}',
				description: 'Retrieve a list of all revisions for a part number in a company by company ID. - get /revisions/companies/{cid}/partnumber/{pnum}',
			},
			{
				name: 'deleteRevisionHistory',
				value: 'DELETE /revisions/companies/{cid}/partnumber/{pnum}/elementType/{et}',
				description: 'delete /revisions/companies/{cid}/partnumber/{pnum}/elementType/{et}',
			},
			{
				name: 'getAllInDocumentVersion',
				value: 'GET /revisions/d/{did}/v/{vid}',
				description: "Retrieve a list of all revisions that exist in a document version and are owned by the document's owning company. - get /revisions/d/{did}/v/{vid}",
			},
			{
				name: 'getLatestInDocumentOrCompany',
				value: 'GET /revisions/{cd}/{cdid}/p/{pnum}/latest',
				description: 'Retrieve latest revisions for a part number in a document or company by document ID, workspace or version or microversion ID, and tab ID. - get /revisions/{cd}/{cdid}/p/{pnum}/latest',
			},
		],
		default: 'GET /revisions/c/{cid}/partnumber/{pnum}',
		description: 'The operation to perform',
	},
	...getRevisionByPartNumber.description,
	...enumerateRevisions.description,
	...getRevisionHistoryInCompanyByElementId.description,
	...getRevisionHistoryInCompanyByPartId.description,
	...getRevisionHistoryInCompanyByPartNumber.description,
	...deleteRevisionHistory.description,
	...getAllInDocumentVersion.description,
	...getLatestInDocumentOrCompany.description,
];

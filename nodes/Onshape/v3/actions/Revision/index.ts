import * as DeleteRevisionHistory from './deleteRevisionHistory';
import * as EnumerateRevisions from './enumerateRevisions';
import * as GetAllInDocument from './getAllInDocument';
import * as GetAllInDocumentVersion from './getAllInDocumentVersion';
import * as GetLatestInDocumentOrCompany from './getLatestInDocumentOrCompany';
import * as GetRevisionByPartNumber from './getRevisionByPartNumber';
import * as GetRevisionHistoryInCompanyByElementId from './getRevisionHistoryInCompanyByElementId';
import * as GetRevisionHistoryInCompanyByPartId from './getRevisionHistoryInCompanyByPartId';
import * as GetRevisionHistoryInCompanyByPartNumber from './getRevisionHistoryInCompanyByPartNumber';

import { INodeProperties } from 'n8n-workflow';

export {
	DeleteRevisionHistory,
	EnumerateRevisions,
	GetAllInDocument,
	GetAllInDocumentVersion,
	GetLatestInDocumentOrCompany,
	GetRevisionByPartNumber,
	GetRevisionHistoryInCompanyByElementId,
	GetRevisionHistoryInCompanyByPartId,
	GetRevisionHistoryInCompanyByPartNumber,
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
					'Revision',
				],
			},
		},
		default: 'GET /revisions/c/{cid}/partnumber/{pnum}',
		options: [
			{
				name: 'deleteRevisionHistory',
				value: 'DELETE /revisions/companies/{cid}/partnumber/{pnum}/elementType/{et}',
				description: 'Delete all revisions for a part number. - delete /revisions/companies/{cid}/partnumber/{pnum}/elementType/{et}',
				action: 'Delete Revision History',
			},
			{
				name: 'enumerateRevisions',
				value: 'GET /revisions/companies/{cid}',
				description: "Enumerate all of a company's revisions. - get /revisions/companies/{cid}",
				action: 'Enumerate Revisions',
			},
			{
				name: 'getAllInDocument',
				value: 'GET /revisions/d/{did}',
				description: 'Get all revisions for the specified document. - get /revisions/d/{did}',
				action: 'Get All In Document',
			},
			{
				name: 'getAllInDocumentVersion',
				value: 'GET /revisions/d/{did}/v/{vid}',
				description: 'Get all revisions for a version. - get /revisions/d/{did}/v/{vid}',
				action: 'Get All In Document Version',
			},
			{
				name: 'getLatestInDocumentOrCompany',
				value: 'GET /revisions/{cd}/{cdid}/p/{pnum}/latest',
				description: 'Get the latest revision for a part number in a document or company. - get /revisions/{cd}/{cdid}/p/{pnum}/latest',
				action: 'Get Latest In Document Or Company',
			},
			{
				name: 'getRevisionByPartNumber',
				value: 'GET /revisions/c/{cid}/partnumber/{pnum}',
				description: 'Get a list of revisions by part number. - get /revisions/c/{cid}/partnumber/{pnum}',
				action: 'Get Revision By Part Number',
			},
			{
				name: 'getRevisionHistoryInCompanyByElementId',
				value: 'GET /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}',
				description: 'Get a list of all revisions for an element in a company-owned document. - get /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}',
				action: 'Get Revision History In Company By Element Id',
			},
			{
				name: 'getRevisionHistoryInCompanyByPartId',
				value: 'GET /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}/p/{pid}',
				description: 'Get a list of all revisions for a part in a company-owned document by part ID. - get /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}/p/{pid}',
				action: 'Get Revision History In Company By Part Id',
			},
			{
				name: 'getRevisionHistoryInCompanyByPartNumber',
				value: 'GET /revisions/companies/{cid}/partnumber/{pnum}',
				description: 'Get a list of all revisions for a part or element in a company-owned document by part number. - get /revisions/companies/{cid}/partnumber/{pnum}',
				action: 'Get Revision History In Company By Part Number',
			},
		],
	},
	...DeleteRevisionHistory.description,
	...EnumerateRevisions.description,
	...GetAllInDocument.description,
	...GetAllInDocumentVersion.description,
	...GetLatestInDocumentOrCompany.description,
	...GetRevisionByPartNumber.description,
	...GetRevisionHistoryInCompanyByElementId.description,
	...GetRevisionHistoryInCompanyByPartId.description,
	...GetRevisionHistoryInCompanyByPartNumber.description,
];

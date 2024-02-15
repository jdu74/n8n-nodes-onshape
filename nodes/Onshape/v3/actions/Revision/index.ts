import * as GetRevisionByPartNumber from './getRevisionByPartNumber';
import * as EnumerateRevisions from './enumerateRevisions';
import * as GetRevisionHistoryInCompanyByElementId from './getRevisionHistoryInCompanyByElementId';
import * as GetRevisionHistoryInCompanyByPartId from './getRevisionHistoryInCompanyByPartId';
import * as GetRevisionHistoryInCompanyByPartNumber from './getRevisionHistoryInCompanyByPartNumber';
import * as DeleteRevisionHistory from './deleteRevisionHistory';
import * as GetAllInDocument from './getAllInDocument';
import * as GetAllInDocumentVersion from './getAllInDocumentVersion';
import * as GetLatestInDocumentOrCompany from './getLatestInDocumentOrCompany';

import { INodeProperties } from 'n8n-workflow';

export {
	GetRevisionByPartNumber,
	EnumerateRevisions,
	GetRevisionHistoryInCompanyByElementId,
	GetRevisionHistoryInCompanyByPartId,
	GetRevisionHistoryInCompanyByPartNumber,
	DeleteRevisionHistory,
	GetAllInDocument,
	GetAllInDocumentVersion,
	GetLatestInDocumentOrCompany,
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
				description: 'Get a list of revisions by part number. - get /revisions/c/{cid}/partnumber/{pnum}',
			},
			{
				name: 'enumerateRevisions',
				value: 'GET /revisions/companies/{cid}',
				description: '* Returns a slice of all revisions per API call. \n* To get the next set of results, use the `next` URL from the response body. \n* This API can only be called by company admins. - get /revisions/companies/{cid}',
			},
			{
				name: 'getRevisionHistoryInCompanyByElementId',
				value: 'GET /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}',
				description: 'Get a list of all revisions for an element in a company-owned document. - get /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}',
			},
			{
				name: 'getRevisionHistoryInCompanyByPartId',
				value: 'GET /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}/p/{pid}',
				description: 'Get a list of all revisions for a part in a company-owned document by part ID. - get /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}/p/{pid}',
			},
			{
				name: 'getRevisionHistoryInCompanyByPartNumber',
				value: 'GET /revisions/companies/{cid}/partnumber/{pnum}',
				description: 'You can also request `elementType` in addition to `partNumber` since companies may or may not allow drawings to share part numbers with their parts/assemblies.  - get /revisions/companies/{cid}/partnumber/{pnum}',
			},
			{
				name: 'deleteRevisionHistory',
				value: 'DELETE /revisions/companies/{cid}/partnumber/{pnum}/elementType/{et}',
				description: 'Only company admins can call this API. All documents that contain or use the part number must be deleted first. This operation cannot be undone. - delete /revisions/companies/{cid}/partnumber/{pnum}/elementType/{et}',
			},
			{
				name: 'getAllInDocument',
				value: 'GET /revisions/d/{did}',
				description: "Retrieve a list of all revisions that exist in a document and are owned by the document's owning company. - get /revisions/d/{did}",
			},
			{
				name: 'getAllInDocumentVersion',
				value: 'GET /revisions/d/{did}/v/{vid}',
				description: "Retrieve a list of all revisions that exist in a document version and are owned by the document's owning company. - get /revisions/d/{did}/v/{vid}",
			},
			{
				name: 'getLatestInDocumentOrCompany',
				value: 'GET /revisions/{cd}/{cdid}/p/{pnum}/latest',
				description: 'Returns 204 if no revisions are found. - get /revisions/{cd}/{cdid}/p/{pnum}/latest',
			},
		],
		default: 'GET /revisions/c/{cid}/partnumber/{pnum}',
		description: 'The operation to perform',
	},
	...GetRevisionByPartNumber.description,
	...EnumerateRevisions.description,
	...GetRevisionHistoryInCompanyByElementId.description,
	...GetRevisionHistoryInCompanyByPartId.description,
	...GetRevisionHistoryInCompanyByPartNumber.description,
	...DeleteRevisionHistory.description,
	...GetAllInDocument.description,
	...GetAllInDocumentVersion.description,
	...GetLatestInDocumentOrCompany.description,
];

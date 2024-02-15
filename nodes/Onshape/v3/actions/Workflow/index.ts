import * as GetActiveWorkflows from './getActiveWorkflows';
import * as GetAllowedApprovers from './getAllowedApprovers';
import * as EnumerateObjectWorkflows from './enumerateObjectWorkflows';
import * as GetAuditLog from './getAuditLog';

import { INodeProperties } from 'n8n-workflow';

export {
	GetActiveWorkflows,
	GetAllowedApprovers,
	EnumerateObjectWorkflows,
	GetAuditLog,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Workflow',
				],
			},
		},
		options: [
			{
				name: 'getActiveWorkflows',
				value: 'GET /workflow/active',
				description: "Optionally takes a document ID to return all workflows for that document's owning company. - get /workflow/active",
			},
			{
				name: 'getAllowedApprovers',
				value: 'GET /workflow/c/{companyId}/approvers',
				description: '* Identities can be users and/or teams. \n* For Enterprise accounts, also includes roles and any aliases that contain allowed users/teams. \n* Not object- or property-specific. \n* Used for delegation and company settings. - get /workflow/c/{companyId}/approvers',
			},
			{
				name: 'enumerateObjectWorkflows',
				value: 'GET /workflow/companies/{cid}/objects',
				description: '* For example, you can enumerate RELEASES, TASKS, etc in a company by last modified time. \n* Caller must be a company admin. \n* Specify `modifiedAfter` and use the `next` URI for complete enumeration. - get /workflow/companies/{cid}/objects',
			},
			{
				name: 'getAuditLog',
				value: 'GET /workflow/obj/{objectId}/auditlog',
				description: 'Get identities (users and/or teams) allowed to be approvers on a workflow object for the company. Not object- or property-specific; used for delegation and company settings - get /workflow/obj/{objectId}/auditlog',
			},
		],
		default: 'GET /workflow/active',
		description: 'The operation to perform',
	},
	...GetActiveWorkflows.description,
	...GetAllowedApprovers.description,
	...EnumerateObjectWorkflows.description,
	...GetAuditLog.description,
];

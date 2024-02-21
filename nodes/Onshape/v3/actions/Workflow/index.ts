import * as EnumerateObjectWorkflows from './enumerateObjectWorkflows';
import * as GetActiveWorkflows from './getActiveWorkflows';
import * as GetAllowedApprovers from './getAllowedApprovers';
import * as GetAuditLog from './getAuditLog';

import { INodeProperties } from 'n8n-workflow';

export {
	EnumerateObjectWorkflows,
	GetActiveWorkflows,
	GetAllowedApprovers,
	GetAuditLog,
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
					'Workflow',
				],
			},
		},
		default: 'GET /workflow/active',
		options: [
			{
				name: 'enumerateObjectWorkflows',
				value: 'GET /workflow/companies/{cid}/objects',
				description: "Enumerate all of a company's workflowable objects. - get /workflow/companies/{cid}/objects",
				action: 'Enumerate Object Workflows',
			},
			{
				name: 'getActiveWorkflows',
				value: 'GET /workflow/active',
				description: "Get all active workflows for the currently logged in user's company. - get /workflow/active",
				action: 'Get Active Workflows',
			},
			{
				name: 'getAllowedApprovers',
				value: 'GET /workflow/c/{companyId}/approvers',
				description: 'Get all identities allowed to be approvers on a workflow object. - get /workflow/c/{companyId}/approvers',
				action: 'Get Allowed Approvers',
			},
			{
				name: 'getAuditLog',
				value: 'GET /workflow/obj/{objectId}/auditlog',
				description: 'Get all audit log entries for a workflowable object. - get /workflow/obj/{objectId}/auditlog',
				action: 'Get Audit Log',
			},
		],
	},
	...EnumerateObjectWorkflows.description,
	...GetActiveWorkflows.description,
	...GetAllowedApprovers.description,
	...GetAuditLog.description,
];

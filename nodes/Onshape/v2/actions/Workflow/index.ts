import * as getActiveWorkflows from './getActiveWorkflows';
import * as getAllowedApprovers from './getAllowedApprovers';
import * as getAuditLog from './getAuditLog';

import { INodeProperties } from 'n8n-workflow';

export {
	getActiveWorkflows,
	getAllowedApprovers,
	getAuditLog,
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
				description: 'Retrieve active workflow. - get /workflow/active',
			},
			{
				name: 'getAllowedApprovers',
				value: 'GET /workflow/c/{companyId}/approvers',
				description: 'get /workflow/c/{companyId}/approvers',
			},
			{
				name: 'getAuditLog',
				value: 'GET /workflow/obj/{objectId}/auditlog',
				description: 'get /workflow/obj/{objectId}/auditlog',
			},
		],
		default: 'GET /workflow/active',
		description: 'The operation to perform',
	},
	...getActiveWorkflows.description,
	...getAllowedApprovers.description,
	...getAuditLog.description,
];

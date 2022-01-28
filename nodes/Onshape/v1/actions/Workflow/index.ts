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
				value: 'GET /api/workflow/active',
				description: 'get /api/workflow/active',
			},
			{
				name: 'getAllowedApprovers',
				value: 'GET /api/workflow/c/{companyId}/approvers',
				description: 'get /api/workflow/c/{companyId}/approvers',
			},
			{
				name: 'getAuditLog',
				value: 'GET /api/workflow/obj/{objectId}/auditlog',
				description: 'get /api/workflow/obj/{objectId}/auditlog',
			},
		],
		default: 'GET /api/workflow/active',
		description: 'The operation to perform',
	},
	...getActiveWorkflows.description,
	...getAllowedApprovers.description,
	...getAuditLog.description,
];

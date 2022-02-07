import { INodeProperties } from "n8n-workflow";

export const getAuditLogDescription: INodeProperties[] = [
	{
		name: 'objectId-string(path)',
		displayName: 'objectId',
		description: 'objectId - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Workflow',
				],
				operation: [
					'GET /workflow/obj/{objectId}/auditlog',
				],
			},
		},
	},
];

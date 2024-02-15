import { INodeProperties } from "n8n-workflow";

export const GetAuditLogDescription: INodeProperties[] = [
	{
		displayName: 'objectId',
		name: 'objectId-string(path)',
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

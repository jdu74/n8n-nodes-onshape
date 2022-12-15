import { INodeProperties } from "n8n-workflow";

export const getWorkflowableTestObjectDescription: INodeProperties[] = [
	{
		displayName: 'oid',
		name: 'oid-string(path)',
		description: 'oid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'WorkflowableTestObject',
				],
				operation: [
					'GET /workflowabletestobject/{oid}',
				],
			},
		},
	},
];

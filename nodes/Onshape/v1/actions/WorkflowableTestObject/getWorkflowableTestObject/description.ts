import { INodeProperties } from "n8n-workflow";

export const getWorkflowableTestObjectDescription: INodeProperties[] = [
	{
		name: 'oid-string(path)',
		displayName: 'oid',
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

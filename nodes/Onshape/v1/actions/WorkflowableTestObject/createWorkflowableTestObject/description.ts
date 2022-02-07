import { INodeProperties } from "n8n-workflow";

export const createWorkflowableTestObjectDescription: INodeProperties[] = [
	{
		name: 'wfid-string(path)',
		displayName: 'wfid',
		description: 'wfid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'WorkflowableTestObject',
				],
				operation: [
					'POST /workflowabletestobject/testobject/{wfid}',
				],
			},
		},
	},
];

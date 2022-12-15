import { INodeProperties } from "n8n-workflow";

export const createWorkflowableTestObjectDescription: INodeProperties[] = [
	{
		displayName: 'wfid',
		name: 'wfid-string(path)',
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

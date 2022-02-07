import { INodeProperties } from "n8n-workflow";

export const transitionWorkflowableTestObjectDescription: INodeProperties[] = [
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
					'POST /workflowabletestobject/{oid}/{transition}',
				],
			},
		},
	},
	{
		name: 'transition-string(path)',
		displayName: 'transition',
		description: 'transition - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'WorkflowableTestObject',
				],
				operation: [
					'POST /workflowabletestobject/{oid}/{transition}',
				],
			},
		},
	},
];

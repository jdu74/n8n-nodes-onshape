import { INodeProperties } from "n8n-workflow";

export const transitionWorkflowableTestObjectDescription: INodeProperties[] = [
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
					'POST /workflowabletestobject/{oid}/{transition}',
				],
			},
		},
	},
	{
		displayName: 'transition',
		name: 'transition-string(path)',
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

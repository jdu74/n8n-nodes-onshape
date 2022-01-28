import * as createWorkflowableTestObject from './createWorkflowableTestObject';
import * as getWorkflowableTestObject from './getWorkflowableTestObject';
import * as updateWorkflowableTestObject from './updateWorkflowableTestObject';
import * as transitionWorkflowableTestObject from './transitionWorkflowableTestObject';

import { INodeProperties } from 'n8n-workflow';

export {
	createWorkflowableTestObject,
	getWorkflowableTestObject,
	updateWorkflowableTestObject,
	transitionWorkflowableTestObject,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'WorkflowableTestObject',
				],
			},
		},
		options: [
			{
				name: 'createWorkflowableTestObject',
				value: 'POST /api/workflowabletestobject/testobject/{wfid}',
				description: 'post /api/workflowabletestobject/testobject/{wfid}',
			},
			{
				name: 'getWorkflowableTestObject',
				value: 'GET /api/workflowabletestobject/{oid}',
				description: 'get /api/workflowabletestobject/{oid}',
			},
			{
				name: 'updateWorkflowableTestObject',
				value: 'POST /api/workflowabletestobject/{oid}',
				description: 'post /api/workflowabletestobject/{oid}',
			},
			{
				name: 'transitionWorkflowableTestObject',
				value: 'POST /api/workflowabletestobject/{oid}/{transition}',
				description: 'post /api/workflowabletestobject/{oid}/{transition}',
			},
		],
		default: 'POST /api/workflowabletestobject/testobject/{wfid}',
		description: 'The operation to perform',
	},
	...createWorkflowableTestObject.description,
	...getWorkflowableTestObject.description,
	...updateWorkflowableTestObject.description,
	...transitionWorkflowableTestObject.description,
];

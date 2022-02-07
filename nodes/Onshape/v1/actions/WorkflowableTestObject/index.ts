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
				value: 'POST /workflowabletestobject/testobject/{wfid}',
				description: 'post /workflowabletestobject/testobject/{wfid}',
			},
			{
				name: 'getWorkflowableTestObject',
				value: 'GET /workflowabletestobject/{oid}',
				description: 'get /workflowabletestobject/{oid}',
			},
			{
				name: 'updateWorkflowableTestObject',
				value: 'POST /workflowabletestobject/{oid}',
				description: 'post /workflowabletestobject/{oid}',
			},
			{
				name: 'transitionWorkflowableTestObject',
				value: 'POST /workflowabletestobject/{oid}/{transition}',
				description: 'post /workflowabletestobject/{oid}/{transition}',
			},
		],
		default: 'POST /workflowabletestobject/testobject/{wfid}',
		description: 'The operation to perform',
	},
	...createWorkflowableTestObject.description,
	...getWorkflowableTestObject.description,
	...updateWorkflowableTestObject.description,
	...transitionWorkflowableTestObject.description,
];

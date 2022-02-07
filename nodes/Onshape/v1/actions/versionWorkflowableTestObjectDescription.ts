import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as WorkflowableTestObject from './WorkflowableTestObject';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - WorkflowableTestObject',
	name: 'onshapeworkflowabletestobject',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'WorkflowableTestObject - 1.142.3474-2cce0e0bb830',
	version: 1,
	defaults: {
		name: 'Onshape - WorkflowableTestObject'
	},
	inputs: ['main'],
	outputs: ['main'],
	credentials: 
	[
		{
			name: 'onshapeApiKeys',
			required: true,
			displayOptions: {
				show: {
					authentication: [
						'apiKeys',
					],
				},
			},
		},
		{
			name: 'onshapeOAuth2',
			required: true,
			displayOptions: {
				show: {
					authentication: [
						'oAuth2',
					],
				},
			},
		},
	],
	properties: [
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'options',
			options: [
				{
					name: 'ApiKeys',
					value: 'apiKeys',
				},
				{
					name: 'OAuth2',
					value: 'oAuth2',
				},
			],
			default: 'apiKeys',
		},
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'hidden',
			default: 'WorkflowableTestObject',
			options: [
				{
					name: 'WorkflowableTestObject',
					description: 'WorkflowableTestObject',
					value: 'WorkflowableTestObject',
				},
			],
		},
		...WorkflowableTestObject.descriptions
	],
};

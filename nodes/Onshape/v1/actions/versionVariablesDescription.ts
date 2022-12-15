import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as Variables from './Variables';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - Variables',
	name: 'onshapevariables',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Variables REST API - 1.157.8642-f6ac639739bc',
	version: 2,
	defaults: {
		name: 'Onshape - Variables'
	},
	inputs: ['main'],
	outputs: ['main'],
	credentials: 
	[
		{
			name: 'onshapeApiKeysApi',
			required: true,
		},
		{
			name: 'onshapeOAuth2Api',
			required: true,
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
			default: 'Variables',
			options: [
				{
					name: 'Variables',
					description: 'Variables REST API',
					value: 'Variables',
				},
			],
		},
	],
};

import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as APIApplication from './APIApplication';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - APIApplication',
	name: 'onshapeapiapplication',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Manage application settings - 1.157.8642-f6ac639739bc',
	version: 2,
	defaults: {
		name: 'Onshape - APIApplication'
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
			default: 'APIApplication',
			options: [
				{
					name: 'APIApplication',
					description: 'Manage application settings',
					value: 'APIApplication',
				},
			],
		},
	],
};

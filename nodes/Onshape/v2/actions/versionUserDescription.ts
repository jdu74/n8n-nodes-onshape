import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as User from './User';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - User',
	name: 'onshapeuser',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Get details about users. - 1.157.8642-f6ac639739bc',
	version: 2,
	defaults: {
		name: 'Onshape - User'
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
			default: 'User',
			options: [
				{
					name: 'User',
					description: 'Get details about users.',
					value: 'User',
				},
			],
		},
	],
};

import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as AppElement from './AppElement';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - AppElement',
	name: 'onshapeappelement',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Modify and access application elements. - 1.157.8642-f6ac639739bc',
	version: 2,
	defaults: {
		name: 'Onshape - AppElement'
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
			default: 'AppElement',
			options: [
				{
					name: 'AppElement',
					description: 'Modify and access application elements.',
					value: 'AppElement',
				},
			],
		},
	],
};

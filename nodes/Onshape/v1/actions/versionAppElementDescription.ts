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
	description: 'Modify, change, and get AppElements. - 1.142.3474-2cce0e0bb830',
	version: 1,
	defaults: {
		name: 'Onshape - AppElement'
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
			default: 'AppElement',
			options: [
				{
					name: 'AppElement',
					description: 'Modify, change, and get AppElements.',
					value: 'AppElement',
				},
			],
		},
		...AppElement.descriptions
	],
};

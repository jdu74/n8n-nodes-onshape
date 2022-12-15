import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as Account from './Account';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - Account',
	name: 'onshapeaccount',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Modify and access user account information, such as plan subscription and App Store purchases. Cancel recurring subscriptions. Mark purchases consumed by the user. - 1.157.8642-f6ac639739bc',
	version: 2,
	defaults: {
		name: 'Onshape - Account'
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
			default: 'Account',
			options: [
				{
					name: 'Account',
					description: 'Modify and access user account information, such as plan subscription and App Store purchases. Cancel recurring subscriptions. Mark purchases consumed by the user.',
					value: 'Account',
				},
			],
		},
	],
};

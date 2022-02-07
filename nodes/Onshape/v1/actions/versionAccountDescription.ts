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
	description: 'Modify and access user account information, such as plan subscription and App Store purchases. Cancel recurring subscriptions. Mark purchases consumed by the user. - 1.142.3474-2cce0e0bb830',
	version: 1,
	defaults: {
		name: 'Onshape - Account'
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
			default: 'Account',
			options: [
				{
					name: 'Account',
					description: 'Modify and access user account information, such as plan subscription and App Store purchases. Cancel recurring subscriptions. Mark purchases consumed by the user.',
					value: 'Account',
				},
			],
		},
		...Account.descriptions
	],
};

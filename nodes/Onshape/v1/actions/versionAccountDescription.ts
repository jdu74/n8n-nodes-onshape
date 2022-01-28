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
	description: 'Modify and access user account information, such as plan subscription and App Store purchases. Cancel recurring subscriptions. Mark purchases consumed by the user. - 1.141.3124-86273aed0a97',
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
					name: 'onshapeApiKeys',
					value: 'apiKeys',
				},
				{
					name: 'onshapeOAuth2',
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

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
	description: 'Manage user purchases, subscriptions, and consumables. - 1.176.30682-6f8b76b680d2',
	version: 3,
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
			displayOptions: {
				show: {
					authentication: [
						'apiKeys',
					],
				},
			},
		},
		{
			name: 'onshapeOAuth2Api',
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
			noDataExpression: true,
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
					description: 'Manage user purchases, subscriptions, and consumables.',
					value: 'Account',
				},
			],
		},
		...Account.descriptions,
	],
};

import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as Company from './Company';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - Company',
	name: 'onshapecompany',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Access company information. - 1.157.8642-f6ac639739bc',
	version: 2,
	defaults: {
		name: 'Onshape - Company'
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
			default: 'Company',
			options: [
				{
					name: 'Company',
					description: 'Access company information.',
					value: 'Company',
				},
			],
		},
		...Company.descriptions,
	],
};

import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as ReleasePackage from './ReleasePackage';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - ReleasePackage',
	name: 'onshapereleasepackage',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Manage Release Management workflows. - 1.141.3299-c9756493fe75',
	version: 1,
	defaults: {
		name: 'Onshape - ReleasePackage'
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
			default: 'ReleasePackage',
			options: [
				{
					name: 'ReleasePackage',
					description: 'Manage Release Management workflows.',
					value: 'ReleasePackage',
				},
			],
		},
		...ReleasePackage.descriptions
	],
};

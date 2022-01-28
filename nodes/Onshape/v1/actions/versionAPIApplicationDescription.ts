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
	description: 'Manage application settings - 1.141.3124-86273aed0a97',
	version: 1,
	defaults: {
		name: 'Onshape - APIApplication'
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
			default: 'APIApplication',
			options: [
				{
					name: 'APIApplication',
					description: 'Manage application settings',
					value: 'APIApplication',
				},
			],
		},
		...APIApplication.descriptions
	],
};

import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as AppAssociativeData from './AppAssociativeData';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - AppAssociativeData',
	name: 'onshapeappassociativedata',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Manage application-specific metadata that is used to associate application data to Onshape data - 1.142.3474-2cce0e0bb830',
	version: 1,
	defaults: {
		name: 'Onshape - AppAssociativeData'
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
			default: 'AppAssociativeData',
			options: [
				{
					name: 'AppAssociativeData',
					description: 'Manage application-specific metadata that is used to associate application data to Onshape data',
					value: 'AppAssociativeData',
				},
			],
		},
		...AppAssociativeData.descriptions
	],
};

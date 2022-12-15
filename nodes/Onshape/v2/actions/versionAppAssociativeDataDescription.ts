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
	description: 'Manage application-specific metadata that is used to associate application data to Onshape data - 1.157.8642-f6ac639739bc',
	version: 2,
	defaults: {
		name: 'Onshape - AppAssociativeData'
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
			default: 'AppAssociativeData',
			options: [
				{
					name: 'AppAssociativeData',
					description: 'Manage application-specific metadata that is used to associate application data to Onshape data',
					value: 'AppAssociativeData',
				},
			],
		},
	],
};

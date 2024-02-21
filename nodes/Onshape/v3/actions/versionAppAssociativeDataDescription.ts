import {
	INodeTypeDescription,
} from 'n8n-workflow';

import * as AppAssociativeData from './AppAssociativeData';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - AppAssociativeData',
	name: 'onshapeappassociativedata',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'undefined - 1.176.30682-6f8b76b680d2',
	version: 3,
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
			default: 'AppAssociativeData',
			options: [
				{
					name: 'App Associative Data',
					value: 'AppAssociativeData',
				},
			],
		},
		...AppAssociativeData.descriptions,
	],
};

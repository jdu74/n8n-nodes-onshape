import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as FeatureStudio from './FeatureStudio';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - FeatureStudio',
	name: 'onshapefeaturestudio',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Access and manage Feature Studio Elements. - 1.176.30682-6f8b76b680d2',
	version: 3,
	defaults: {
		name: 'Onshape - FeatureStudio'
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
			default: 'FeatureStudio',
			options: [
				{
					name: 'FeatureStudio',
					description: 'Access and manage Feature Studio Elements.',
					value: 'FeatureStudio',
				},
			],
		},
		...FeatureStudio.descriptions,
	],
};

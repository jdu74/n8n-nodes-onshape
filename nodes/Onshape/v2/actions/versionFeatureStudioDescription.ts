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
	description: 'Access and write to Feature Studio Elements. - 1.157.8642-f6ac639739bc',
	version: 2,
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
			default: 'FeatureStudio',
			options: [
				{
					name: 'FeatureStudio',
					description: 'Access and write to Feature Studio Elements.',
					value: 'FeatureStudio',
				},
			],
		},
	],
};

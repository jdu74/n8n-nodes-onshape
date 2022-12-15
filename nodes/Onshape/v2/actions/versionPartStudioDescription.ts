import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as PartStudio from './PartStudio';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - PartStudio',
	name: 'onshapepartstudio',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Modify, change, and get PartStudios. - 1.157.8642-f6ac639739bc',
	version: 2,
	defaults: {
		name: 'Onshape - PartStudio'
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
			default: 'PartStudio',
			options: [
				{
					name: 'PartStudio',
					description: 'Modify, change, and get PartStudios.',
					value: 'PartStudio',
				},
			],
		},
	],
};

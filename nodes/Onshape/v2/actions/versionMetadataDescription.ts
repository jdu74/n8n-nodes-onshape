import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as Metadata from './Metadata';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - Metadata',
	name: 'onshapemetadata',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Manipulate and access metadata. - 1.157.8642-f6ac639739bc',
	version: 2,
	defaults: {
		name: 'Onshape - Metadata'
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
			default: 'Metadata',
			options: [
				{
					name: 'Metadata',
					description: 'Manipulate and access metadata.',
					value: 'Metadata',
				},
			],
		},
	],
};
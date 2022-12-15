import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as Comment from './Comment';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - Comment',
	name: 'onshapecomment',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'CRUD for comments. - 1.157.8642-f6ac639739bc',
	version: 2,
	defaults: {
		name: 'Onshape - Comment'
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
			default: 'Comment',
			options: [
				{
					name: 'Comment',
					description: 'CRUD for comments.',
					value: 'Comment',
				},
			],
		},
	],
};

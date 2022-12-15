import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as Thumbnail from './Thumbnail';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - Thumbnail',
	name: 'onshapethumbnail',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Get Thumbnails. - 1.157.8642-f6ac639739bc',
	version: 2,
	defaults: {
		name: 'Onshape - Thumbnail'
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
			default: 'Thumbnail',
			options: [
				{
					name: 'Thumbnail',
					description: 'Get Thumbnails.',
					value: 'Thumbnail',
				},
			],
		},
	],
};

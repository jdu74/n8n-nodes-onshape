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
	description: 'Get Thumbnails. - 1.141.3299-c9756493fe75',
	version: 1,
	defaults: {
		name: 'Onshape - Thumbnail'
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
			default: 'Thumbnail',
			options: [
				{
					name: 'Thumbnail',
					description: 'Get Thumbnails.',
					value: 'Thumbnail',
				},
			],
		},
		...Thumbnail.descriptions
	],
};

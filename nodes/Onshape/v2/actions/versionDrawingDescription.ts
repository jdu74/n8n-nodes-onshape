import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as Drawing from './Drawing';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - Drawing',
	name: 'onshapedrawing',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Access and manipulate drawing elements. - 1.157.8642-f6ac639739bc',
	version: 2,
	defaults: {
		name: 'Onshape - Drawing'
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
			default: 'Drawing',
			options: [
				{
					name: 'Drawing',
					description: 'Access and manipulate drawing elements.',
					value: 'Drawing',
				},
			],
		},
		...Drawing.descriptions,
	],
};

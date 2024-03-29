import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as Sketch from './Sketch';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - Sketch',
	name: 'onshapesketch',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Sketch - 1.142.3474-2cce0e0bb830',
	version: 1,
	defaults: {
		name: 'Onshape - Sketch'
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
			displayName: 'A newer version of this node type is available',
			name: 'notice',
			type: 'notice',
			default: '',
		},
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
			default: 'Sketch',
			options: [
				{
					name: 'Sketch',
					description: 'Sketch',
					value: 'Sketch',
				},
			],
		},
		...Sketch.descriptions
	],
};

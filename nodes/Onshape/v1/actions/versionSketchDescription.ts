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
	description: 'Sketch - 1.141.3124-86273aed0a97',
	version: 1,
	defaults: {
		name: 'Onshape - Sketch'
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
					name: 'onshapeApiKeys',
					value: 'apiKeys',
				},
				{
					name: 'onshapeOAuth2',
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

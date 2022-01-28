import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as BlobElement from './BlobElement';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - BlobElement',
	name: 'onshapeblobelement',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Save and access Blob Elements. - 1.141.3124-86273aed0a97',
	version: 1,
	defaults: {
		name: 'Onshape - BlobElement'
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
			default: 'BlobElement',
			options: [
				{
					name: 'BlobElement',
					description: 'Save and access Blob Elements.',
					value: 'BlobElement',
				},
			],
		},
		...BlobElement.descriptions
	],
};

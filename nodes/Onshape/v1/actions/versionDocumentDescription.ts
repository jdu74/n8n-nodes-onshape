import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as Document from './Document';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - Document',
	name: 'onshapedocument',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Manage documents. - 1.141.3124-86273aed0a97',
	version: 1,
	defaults: {
		name: 'Onshape - Document'
	},
	inputs: ['main'],
	outputs: ['main'],
	credentials: 
	[
		{
			name: 'APIKeys',
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
			name: 'OAuth2',
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
					name: 'APIKeys',
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
			default: 'Document',
			options: [
				{
					name: 'Document',
					description: 'Manage documents.',
					value: 'Document',
				},
			],
		},
		...Document.descriptions
	],
};

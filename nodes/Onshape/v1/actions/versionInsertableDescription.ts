import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as Insertable from './Insertable';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - Insertable',
	name: 'onshapeinsertable',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Insertable - 1.141.3124-86273aed0a97',
	version: 1,
	defaults: {
		name: 'Onshape - Insertable'
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
			default: 'Insertable',
			options: [
				{
					name: 'Insertable',
					description: 'Insertable',
					value: 'Insertable',
				},
			],
		},
		...Insertable.descriptions
	],
};
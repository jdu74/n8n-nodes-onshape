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
	description: 'Access the list of things that can be inserted into a document. - 1.176.30682-6f8b76b680d2',
	version: 3,
	defaults: {
		name: 'Onshape - Insertable'
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
			noDataExpression: true,
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
			default: 'Insertable',
			options: [
				{
					name: 'Insertable',
					description: 'Access the list of things that can be inserted into a document.',
					value: 'Insertable',
				},
			],
		},
		...Insertable.descriptions,
	],
};

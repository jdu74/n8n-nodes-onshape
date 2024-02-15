import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as OpenApi from './OpenApi';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - OpenApi',
	name: 'onshapeopenapi',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Get the OpenAPI specification for the Onshape API. - 1.176.30682-6f8b76b680d2',
	version: 3,
	defaults: {
		name: 'Onshape - OpenApi'
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
			default: 'OpenApi',
			options: [
				{
					name: 'OpenApi',
					description: 'Get the OpenAPI specification for the Onshape API.',
					value: 'OpenApi',
				},
			],
		},
		...OpenApi.descriptions,
	],
};

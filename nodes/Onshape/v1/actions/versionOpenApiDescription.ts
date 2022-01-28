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
	description: 'Endpoints for getting the OpenAPI specification for the Onshape API. - 1.141.3124-86273aed0a97',
	version: 1,
	defaults: {
		name: 'Onshape - OpenApi'
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
			default: 'OpenApi',
			options: [
				{
					name: 'OpenApi',
					description: 'Endpoints for getting the OpenAPI specification for the Onshape API.',
					value: 'OpenApi',
				},
			],
		},
		...OpenApi.descriptions
	],
};

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
	description: 'Endpoints for getting the OpenAPI specification for the Onshape API. - 1.157.8642-f6ac639739bc',
	version: 2,
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
		},
		{
			name: 'onshapeOAuth2Api',
			required: true,
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
			default: 'OpenApi',
			options: [
				{
					name: 'OpenApi',
					description: 'Endpoints for getting the OpenAPI specification for the Onshape API.',
					value: 'OpenApi',
				},
			],
		},
	],
};

import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as Alias from './Alias';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - Alias',
	name: 'onshapealias',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Create and manage enterprise aliases. Aliases are distribution lists for the Release management workflow. They are defined and managed by administrators at the enterprise level only. Users and Teams can be assigned to an alias. - 1.157.8642-f6ac639739bc',
	version: 2,
	defaults: {
		name: 'Onshape - Alias'
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
			default: 'Alias',
			options: [
				{
					name: 'Alias',
					description: 'Create and manage enterprise aliases. Aliases are distribution lists for the Release management workflow. They are defined and managed by administrators at the enterprise level only. Users and Teams can be assigned to an alias.',
					value: 'Alias',
				},
			],
		},
	],
};

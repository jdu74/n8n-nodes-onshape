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
	description: 'Create and manage enterprise aliases. Aliases are distribution lists for the Release management workflow. They are defined and managed by administrators at the enterprise level only. Users and Teams can be assigned to an alias. - 1.142.3474-2cce0e0bb830',
	version: 1,
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
			default: 'Alias',
			options: [
				{
					name: 'Alias',
					description: 'Create and manage enterprise aliases. Aliases are distribution lists for the Release management workflow. They are defined and managed by administrators at the enterprise level only. Users and Teams can be assigned to an alias.',
					value: 'Alias',
				},
			],
		},
		...Alias.descriptions
	],
};

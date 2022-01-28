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
	description: 'Create and manage enterprise aliases. Aliases are distribution lists for the Release management workflow. They are defined and managed by administrators at the enterprise level only. Users and Teams can be assigned to an alias. - 1.141.3124-86273aed0a97',
	version: 1,
	defaults: {
		name: 'Onshape - Alias'
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

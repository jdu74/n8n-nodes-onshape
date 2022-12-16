import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as ExportRule from './ExportRule';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - ExportRule',
	name: 'onshapeexportrule',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'ExportRule - 1.142.3474-2cce0e0bb830',
	version: 1,
	defaults: {
		name: 'Onshape - ExportRule'
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
			default: 'ExportRule',
			options: [
				{
					name: 'ExportRule',
					description: 'ExportRule',
					value: 'ExportRule',
				},
			],
		},
		...ExportRule.descriptions
	],
};

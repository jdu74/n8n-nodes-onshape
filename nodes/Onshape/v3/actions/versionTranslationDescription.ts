import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as Translation from './Translation';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - Translation',
	name: 'onshapetranslation',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Import and export Onshape surfaces, parts, Part Studios, Assemblies, and subassemblies to/from other file formats (STL, PARASOLID, SOLIDWORKS, etc). - 1.176.30682-6f8b76b680d2',
	version: 3,
	defaults: {
		name: 'Onshape - Translation'
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
			default: 'Translation',
			options: [
				{
					name: 'Translation',
					description: 'Import and export Onshape surfaces, parts, Part Studios, Assemblies, and subassemblies to/from other file formats (STL, PARASOLID, SOLIDWORKS, etc).',
					value: 'Translation',
				},
			],
		},
		...Translation.descriptions,
	],
};

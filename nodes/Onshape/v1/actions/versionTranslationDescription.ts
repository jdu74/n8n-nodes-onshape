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
	description: 'Export an Onshape surface, part, Part Studio, Assembly, or subassembly to a supported file format, such as STL, PARASOLID, or SOLIDWORKS - 1.141.3124-86273aed0a97',
	version: 1,
	defaults: {
		name: 'Onshape - Translation'
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
			default: 'Translation',
			options: [
				{
					name: 'Translation',
					description: 'Export an Onshape surface, part, Part Studio, Assembly, or subassembly to a supported file format, such as STL, PARASOLID, or SOLIDWORKS',
					value: 'Translation',
				},
			],
		},
		...Translation.descriptions
	],
};

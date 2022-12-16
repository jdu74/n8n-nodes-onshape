import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as MetadataCategory from './MetadataCategory';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - MetadataCategory',
	name: 'onshapemetadatacategory',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'MetadataCategory - 1.157.8642-f6ac639739bc',
	version: 2,
	defaults: {
		name: 'Onshape - MetadataCategory'
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
			default: 'MetadataCategory',
			options: [
				{
					name: 'MetadataCategory',
					description: 'MetadataCategory',
					value: 'MetadataCategory',
				},
			],
		},
		...MetadataCategory.descriptions,
	],
};

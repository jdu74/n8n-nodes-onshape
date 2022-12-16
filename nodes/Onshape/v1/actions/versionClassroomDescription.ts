import {
	INodeProperties,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as Classroom from './Classroom';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Onshape - Classroom',
	name: 'onshapeclassroom',
	icon: 'file:onshape.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Modify and access classroom information. - 1.142.3474-2cce0e0bb830',
	version: 1,
	defaults: {
		name: 'Onshape - Classroom'
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
			default: 'Classroom',
			options: [
				{
					name: 'Classroom',
					description: 'Modify and access classroom information.',
					value: 'Classroom',
				},
			],
		},
		...Classroom.descriptions
	],
};

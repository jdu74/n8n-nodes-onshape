import * as GetAllVersions from './getAllVersions';

import { INodeProperties } from 'n8n-workflow';

export {
	GetAllVersions,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'Version',
				],
			},
		},
		default: 'GET /versions',
		options: [
			{
				name: 'getAllVersions',
				value: 'GET /versions',
				description: 'Get all versions of the Onshape REST APIs. - get /versions',
				action: 'Get All Versions',
			},
		],
	},
	...GetAllVersions.description,
];

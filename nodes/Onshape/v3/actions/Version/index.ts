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
		displayOptions: {
			show: {
				resource: [
					'Version',
				],
			},
		},
		options: [
			{
				name: 'getAllVersions',
				value: 'GET /versions',
				description: 'Get all versions of the Onshape REST APIs. - get /versions',
			},
		],
		default: 'GET /versions',
		description: 'The operation to perform',
	},
	...GetAllVersions.description,
];

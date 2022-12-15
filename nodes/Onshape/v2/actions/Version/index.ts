import * as getAllVersions from './getAllVersions';

import { INodeProperties } from 'n8n-workflow';

export {
	getAllVersions,
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
				description: 'get /versions',
			},
		],
		default: 'GET /versions',
		description: 'The operation to perform',
	},
	...getAllVersions.description,
];

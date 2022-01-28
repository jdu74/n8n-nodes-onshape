import * as getOpenApi from './getOpenApi';
import * as getTags from './getTags';

import { INodeProperties } from 'n8n-workflow';

export {
	getOpenApi,
	getTags,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'OpenApi',
				],
			},
		},
		options: [
			{
				name: 'getOpenApi',
				value: 'GET /api/openapi',
				description: 'OpenAPI spec documentation for the Onshape REST API. - get /api/openapi',
			},
			{
				name: 'getTags',
				value: 'GET /api/openapi/tags',
				description: 'get /api/openapi/tags',
			},
		],
		default: 'GET /api/openapi',
		description: 'The operation to perform',
	},
	...getOpenApi.description,
	...getTags.description,
];

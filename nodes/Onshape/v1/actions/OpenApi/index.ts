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
				value: 'GET /openapi',
				description: 'OpenAPI spec documentation for the Onshape REST API. - get /openapi',
			},
			{
				name: 'getTags',
				value: 'GET /openapi/tags',
				description: 'get /openapi/tags',
			},
		],
		default: 'GET /openapi',
		description: 'The operation to perform',
	},
	...getOpenApi.description,
	...getTags.description,
];

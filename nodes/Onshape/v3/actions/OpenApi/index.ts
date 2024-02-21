import * as GetOpenApi from './getOpenApi';
import * as GetTags from './getTags';

import { INodeProperties } from 'n8n-workflow';

export {
	GetOpenApi,
	GetTags,
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
					'OpenApi',
				],
			},
		},
		default: 'GET /openapi',
		options: [
			{
				name: 'getOpenApi',
				value: 'GET /openapi',
				description: 'Get the OpenAPI specification for the Onshape REST API. - get /openapi',
				action: 'Get Open Api',
			},
			{
				name: 'getTags',
				value: 'GET /openapi/tags',
				description: 'Get the list of tags in the Onshape OpenAPI specification. - get /openapi/tags',
				action: 'Get Tags',
			},
		],
	},
	...GetOpenApi.description,
	...GetTags.description,
];

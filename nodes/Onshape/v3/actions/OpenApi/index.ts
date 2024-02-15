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
				description: 'The Onshape API OpenAPI specification is returned in the JSON format. - get /openapi',
			},
			{
				name: 'getTags',
				value: 'GET /openapi/tags',
				description: 'Tags are used to group operations. For example, `Document` groups operations on documents. - get /openapi/tags',
			},
		],
		default: 'GET /openapi',
		description: 'The operation to perform',
	},
	...GetOpenApi.description,
	...GetTags.description,
];

import * as testVersionsGet from './testVersionsGet';
import * as testVersionsPost from './testVersionsPost';

import { INodeProperties } from 'n8n-workflow';

export {
	testVersionsGet,
	testVersionsPost,
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
				name: 'testVersionsGet',
				value: 'GET /api/versions/test',
				description: 'get /api/versions/test',
			},
			{
				name: 'testVersionsPost',
				value: 'POST /api/versions/test',
				description: 'post /api/versions/test',
			},
		],
		default: 'GET /api/versions/test',
		description: 'The operation to perform',
	},
	...testVersionsGet.description,
	...testVersionsPost.description,
];

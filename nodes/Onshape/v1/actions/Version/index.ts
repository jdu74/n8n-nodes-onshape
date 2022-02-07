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
				value: 'GET /versions/test',
				description: 'get /versions/test',
			},
			{
				name: 'testVersionsPost',
				value: 'POST /versions/test',
				description: 'post /versions/test',
			},
		],
		default: 'GET /versions/test',
		description: 'The operation to perform',
	},
	...testVersionsGet.description,
	...testVersionsPost.description,
];

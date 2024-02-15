import * as GetLatestInDocument from './getLatestInDocument';

import { INodeProperties } from 'n8n-workflow';

export {
	GetLatestInDocument,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Insertable',
				],
			},
		},
		options: [
			{
				name: 'getLatestInDocument',
				value: 'GET /insertables/d/{did}/latest',
				description: '* Returns only the latest revision of released insertables. \n* Use the document ID (`did`) parameter to specify the source document, not the insertion target. \n* For example, you can insert a custom Feature library into another custom Feature library, insert Parts into an Assembly or a Drawing, etc. - get /insertables/d/{did}/latest',
			},
		],
		default: 'GET /insertables/d/{did}/latest',
		description: 'The operation to perform',
	},
	...GetLatestInDocument.description,
];

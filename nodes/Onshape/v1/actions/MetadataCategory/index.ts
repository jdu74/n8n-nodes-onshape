import * as getCategoryProperties from './getCategoryProperties';

import { INodeProperties } from 'n8n-workflow';

export {
	getCategoryProperties,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'MetadataCategory',
				],
			},
		},
		options: [
			{
				name: 'getCategoryProperties',
				value: 'GET /api/metadatacategory/categoryproperties',
				description: 'get /api/metadatacategory/categoryproperties',
			},
		],
		default: 'GET /api/metadatacategory/categoryproperties',
		description: 'The operation to perform',
	},
	...getCategoryProperties.description,
];

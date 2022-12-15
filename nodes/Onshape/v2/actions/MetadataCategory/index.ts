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
				value: 'GET /metadatacategory/categoryproperties',
				description: 'Retrieve category properties for metadata. - get /metadatacategory/categoryproperties',
			},
		],
		default: 'GET /metadatacategory/categoryproperties',
		description: 'The operation to perform',
	},
	...getCategoryProperties.description,
];

import * as GetCategoryProperties from './getCategoryProperties';

import { INodeProperties } from 'n8n-workflow';

export {
	GetCategoryProperties,
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
					'MetadataCategory',
				],
			},
		},
		default: 'GET /metadatacategory/categoryproperties',
		options: [
			{
				name: 'getCategoryProperties',
				value: 'GET /metadatacategory/categoryproperties',
				description: 'Get properties associated with the specified metadata categories. - get /metadatacategory/categoryproperties',
				action: 'Get Category Properties',
			},
		],
	},
	...GetCategoryProperties.description,
];

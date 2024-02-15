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
				description: "An object's category specifies its type: Part, Assembly, Drawing, etc. Available properties depend on the object's category. - get /metadatacategory/categoryproperties",
			},
		],
		default: 'GET /metadatacategory/categoryproperties',
		description: 'The operation to perform',
	},
	...GetCategoryProperties.description,
];

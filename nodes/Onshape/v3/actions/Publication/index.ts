import * as AddItemsToPublication from './addItemsToPublication';
import * as AddItemToPublication from './addItemToPublication';
import * as CreatePublication from './createPublication';
import * as DeletePublicationItem from './deletePublicationItem';
import * as GetPublicationItems from './getPublicationItems';
import * as UpdatePublicationAttributes from './updatePublicationAttributes';

import { INodeProperties } from 'n8n-workflow';

export {
	AddItemsToPublication,
	AddItemToPublication,
	CreatePublication,
	DeletePublicationItem,
	GetPublicationItems,
	UpdatePublicationAttributes,
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
					'Publication',
				],
			},
		},
		default: 'POST /publications',
		options: [
			{
				name: 'addItemsToPublication',
				value: 'POST /publications/{pid}/items',
				description: 'Add publication items in bulk. - post /publications/{pid}/items',
				action: 'Add Items To Publication',
			},
			{
				name: 'addItemToPublication',
				value: 'POST /publications/{pid}/item',
				description: 'Add an item in a publication. - post /publications/{pid}/item',
				action: 'Add Item To Publication',
			},
			{
				name: 'createPublication',
				value: 'POST /publications',
				description: 'Create a new publication. - post /publications',
				action: 'Create Publication',
			},
			{
				name: 'deletePublicationItem',
				value: 'DELETE /publications/{pid}/item/{iid}',
				description: 'Remove an item from a publication. - delete /publications/{pid}/item/{iid}',
				action: 'Delete Publication Item',
			},
			{
				name: 'getPublicationItems',
				value: 'GET /publications/{pid}/items',
				description: 'Get all items in a publication. - get /publications/{pid}/items',
				action: 'Get Publication Items',
			},
			{
				name: 'updatePublicationAttributes',
				value: 'POST /publications/{pid}',
				description: "Update publication's attributes name, description, and notes. - post /publications/{pid}",
				action: 'Update Publication Attributes',
			},
		],
	},
	...AddItemsToPublication.description,
	...AddItemToPublication.description,
	...CreatePublication.description,
	...DeletePublicationItem.description,
	...GetPublicationItems.description,
	...UpdatePublicationAttributes.description,
];

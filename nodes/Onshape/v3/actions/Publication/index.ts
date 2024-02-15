import * as CreatePublication from './createPublication';
import * as UpdatePublicationAttributes from './updatePublicationAttributes';
import * as AddItemToPublication from './addItemToPublication';
import * as DeletePublicationItem from './deletePublicationItem';
import * as GetPublicationItems from './getPublicationItems';
import * as AddItemsToPublication from './addItemsToPublication';

import { INodeProperties } from 'n8n-workflow';

export {
	CreatePublication,
	UpdatePublicationAttributes,
	AddItemToPublication,
	DeletePublicationItem,
	GetPublicationItems,
	AddItemsToPublication,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Publication',
				],
			},
		},
		options: [
			{
				name: 'createPublication',
				value: 'POST /publications',
				description: 'Create a new publication. - post /publications',
			},
			{
				name: 'updatePublicationAttributes',
				value: 'POST /publications/{pid}',
				description: "Update publication's attributes name, description, and notes. - post /publications/{pid}",
			},
			{
				name: 'addItemToPublication',
				value: 'POST /publications/{pid}/item',
				description: 'Add an item in a publication. - post /publications/{pid}/item',
			},
			{
				name: 'deletePublicationItem',
				value: 'DELETE /publications/{pid}/item/{iid}',
				description: 'Remove an item from a publication. - delete /publications/{pid}/item/{iid}',
			},
			{
				name: 'getPublicationItems',
				value: 'GET /publications/{pid}/items',
				description: 'Get all items in a publication. - get /publications/{pid}/items',
			},
			{
				name: 'addItemsToPublication',
				value: 'POST /publications/{pid}/items',
				description: 'Add publication items in bulk. - post /publications/{pid}/items',
			},
		],
		default: 'POST /publications',
		description: 'The operation to perform',
	},
	...CreatePublication.description,
	...UpdatePublicationAttributes.description,
	...AddItemToPublication.description,
	...DeletePublicationItem.description,
	...GetPublicationItems.description,
	...AddItemsToPublication.description,
];

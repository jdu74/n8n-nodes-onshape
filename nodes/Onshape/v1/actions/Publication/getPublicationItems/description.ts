import { INodeProperties } from "n8n-workflow";

export const getPublicationItemsDescription: INodeProperties[] = [
	{
		name: 'pid-string(path)',
		displayName: 'pid',
		description: 'pid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Publication',
				],
				operation: [
					'GET /publications/{pid}/items',
				],
			},
		},
	},
];

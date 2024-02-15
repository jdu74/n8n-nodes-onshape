import { INodeProperties } from "n8n-workflow";

export const GetPublicationItemsDescription: INodeProperties[] = [
	{
		displayName: 'pid',
		name: 'pid-string(path)',
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

import { INodeProperties } from "n8n-workflow";

export const DeletePublicationItemDescription: INodeProperties[] = [
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
					'DELETE /publications/{pid}/item/{iid}',
				],
			},
		},
	},
	{
		displayName: 'iid',
		name: 'iid-string(path)',
		description: 'iid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Publication',
				],
				operation: [
					'DELETE /publications/{pid}/item/{iid}',
				],
			},
		},
	},
];

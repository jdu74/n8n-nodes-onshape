import { INodeProperties } from "n8n-workflow";

export const ResolveDescription: INodeProperties[] = [
	{
		displayName: 'cid',
		name: 'cid-string(path)',
		description: 'cid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Comment',
				],
				operation: [
					'POST /comments/{cid}/resolve',
				],
			},
		},
	},
];

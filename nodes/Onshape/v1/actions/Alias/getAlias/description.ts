import { INodeProperties } from "n8n-workflow";

export const getAliasDescription: INodeProperties[] = [
	{
		name: 'aid-string(path)',
		displayName: 'aid',
		description: 'aid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Alias',
				],
				operation: [
					'GET /api/aliases/{aid}',
				],
			},
		},
	},
];

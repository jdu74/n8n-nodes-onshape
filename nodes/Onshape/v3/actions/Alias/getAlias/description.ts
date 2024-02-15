import { INodeProperties } from "n8n-workflow";

export const GetAliasDescription: INodeProperties[] = [
	{
		displayName: 'aid',
		name: 'aid-string(path)',
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
					'GET /aliases/{aid}',
				],
			},
		},
	},
];

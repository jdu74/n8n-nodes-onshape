import { INodeProperties } from "n8n-workflow";

export const DeleteAliasDescription: INodeProperties[] = [
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
					'DELETE /aliases/{aid}',
				],
			},
		},
	},
];

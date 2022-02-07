import { INodeProperties } from "n8n-workflow";

export const deleteAliasDescription: INodeProperties[] = [
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
					'DELETE /aliases/{aid}',
				],
			},
		},
	},
];

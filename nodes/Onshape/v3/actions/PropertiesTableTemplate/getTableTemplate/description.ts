import { INodeProperties } from "n8n-workflow";

export const GetTableTemplateDescription: INodeProperties[] = [
	{
		displayName: 'tid',
		name: 'tid-string(path)',
		description: 'tid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'PropertiesTableTemplate',
				],
				operation: [
					'GET /tabletemplates/{tid}',
				],
			},
		},
	},
];

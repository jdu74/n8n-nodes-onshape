import { INodeProperties } from "n8n-workflow";

export const GetValidRuleOptionsDescription: INodeProperties[] = [
	{
		displayName: 'cu',
		name: 'cu-string(path)',
		description: 'cu - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'ExportRule',
				],
				operation: [
					'GET /exportrules/options/{cu}/{cuid}',
				],
			},
		},
	},
	{
		displayName: 'cuid',
		name: 'cuid-string(path)',
		description: 'cuid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'ExportRule',
				],
				operation: [
					'GET /exportrules/options/{cu}/{cuid}',
				],
			},
		},
	},
];

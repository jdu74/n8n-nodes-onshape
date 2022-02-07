import { INodeProperties } from "n8n-workflow";

export const getValidRuleOptionsDescription: INodeProperties[] = [
	{
		name: 'otype-string(path)',
		displayName: 'otype',
		description: 'otype - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'ExportRule',
				],
				operation: [
					'GET /exportrules/options/{otype}/{oid}',
				],
			},
		},
	},
	{
		name: 'oid-string(path)',
		displayName: 'oid',
		description: 'oid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'ExportRule',
				],
				operation: [
					'GET /exportrules/options/{otype}/{oid}',
				],
			},
		},
	},
];

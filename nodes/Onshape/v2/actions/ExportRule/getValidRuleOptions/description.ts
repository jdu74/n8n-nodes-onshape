import { INodeProperties } from "n8n-workflow";

export const getValidRuleOptionsDescription: INodeProperties[] = [
	{
		displayName: 'otype',
		name: 'otype-string(path)',
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
		displayName: 'oid',
		name: 'oid-string(path)',
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

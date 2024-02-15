import { INodeProperties } from "n8n-workflow";

export const GetModificationStatusDescription: INodeProperties[] = [
	{
		displayName: 'mrid',
		name: 'mrid-string(path)',
		description: 'mrid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Drawing',
				],
				operation: [
					'GET /drawings/modify/status/{mrid}',
				],
			},
		},
	},
];

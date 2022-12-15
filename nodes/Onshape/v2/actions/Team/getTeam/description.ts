import { INodeProperties } from "n8n-workflow";

export const getTeamDescription: INodeProperties[] = [
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
					'Team',
				],
				operation: [
					'GET /teams/{tid}',
				],
			},
		},
	},
];

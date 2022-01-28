import { INodeProperties } from "n8n-workflow";

export const getTeamDescription: INodeProperties[] = [
	{
		name: 'tid-string(path)',
		displayName: 'tid',
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
					'GET /api/teams/{tid}',
				],
			},
		},
	},
];

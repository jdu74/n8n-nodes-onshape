import { INodeProperties } from "n8n-workflow";

export const findDescription: INodeProperties[] = [
	{
		displayName: 'additionalFields',
		name: 'additionalFields',
		description: 'additionalFields - fixedCollection',
		type: 'fixedCollection',
		default: '',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: [
					'Team',
				],
				operation: [
					'GET /api/teams',
				],
			},
		},
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				name: 'metadataValues',
				displayName: 'Metadata',
				default: '',
				values: [
					{
						name: 'prefix-string(query)',
						displayName: 'prefix',
						description: 'prefix - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'uid-string(query)',
						displayName: 'uid',
						description: 'uid - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'companyId-string(query)',
						displayName: 'companyId',
						description: 'companyId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'includeCompanyOwnedTeams-boolean(query)',
						displayName: 'includeCompanyOwnedTeams',
						description: 'includeCompanyOwnedTeams - boolean (query)',
						type: 'boolean',
						default: true,
					},
				],
			},
		],
	},
];

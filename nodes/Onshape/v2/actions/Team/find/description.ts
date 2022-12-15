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
					'GET /teams',
				],
			},
		},
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: 'prefix',
						name: 'prefix-string(query)',
						description: 'prefix - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'uid',
						name: 'uid-string(query)',
						description: 'uid - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'companyId',
						name: 'companyId-string(query)',
						description: 'companyId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'includeCompanyOwnedTeams',
						name: 'includeCompanyOwnedTeams-boolean(query)',
						description: 'includeCompanyOwnedTeams - boolean (query)',
						type: 'boolean',
						default: true,
					},
				],
			},
		],
	},
];

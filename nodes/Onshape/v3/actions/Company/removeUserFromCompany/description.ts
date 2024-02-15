import { INodeProperties } from "n8n-workflow";

export const RemoveUserFromCompanyDescription: INodeProperties[] = [
	{
		displayName: 'cid',
		name: 'cid-string(path)',
		description: 'cid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Company',
				],
				operation: [
					'DELETE /companies/{cid}/users/{uid}',
				],
			},
		},
	},
	{
		displayName: 'uid',
		name: 'uid-string(path)',
		description: 'uid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Company',
				],
				operation: [
					'DELETE /companies/{cid}/users/{uid}',
				],
			},
		},
	},
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
					'Company',
				],
				operation: [
					'DELETE /companies/{cid}/users/{uid}',
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
						displayName: 'removeFromTeams',
						name: 'removeFromTeams-boolean(query)',
						description: 'removeFromTeams - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						displayName: 'removeDirectShares',
						name: 'removeDirectShares-boolean(query)',
						description: 'removeDirectShares - boolean (query)',
						type: 'boolean',
						default: true,
					},
				],
			},
		],
	},
];

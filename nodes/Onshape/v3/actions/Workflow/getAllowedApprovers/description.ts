import { INodeProperties } from "n8n-workflow";

export const GetAllowedApproversDescription: INodeProperties[] = [
	{
		displayName: 'companyId',
		name: 'companyId-string(path)',
		description: 'companyId - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Workflow',
				],
				operation: [
					'GET /workflow/c/{companyId}/approvers',
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
					'Workflow',
				],
				operation: [
					'GET /workflow/c/{companyId}/approvers',
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
						displayName: 'q',
						name: 'q-string(query)',
						description: 'q - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'expandTeams',
						name: 'expandTeams-boolean(query)',
						description: 'expandTeams - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						displayName: 'includeSelf',
						name: 'includeSelf-boolean(query)',
						description: 'includeSelf - boolean (query)',
						type: 'boolean',
						default: true,
					},
				],
			},
		],
	},
];

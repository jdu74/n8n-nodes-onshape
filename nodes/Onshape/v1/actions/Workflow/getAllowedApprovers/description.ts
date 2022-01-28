import { INodeProperties } from "n8n-workflow";

export const getAllowedApproversDescription: INodeProperties[] = [
	{
		name: 'companyId-string(path)',
		displayName: 'companyId',
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
					'GET /api/workflow/c/{companyId}/approvers',
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
					'GET /api/workflow/c/{companyId}/approvers',
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
						name: 'q-string(query)',
						displayName: 'q',
						description: 'q - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'expandTeams-boolean(query)',
						displayName: 'expandTeams',
						description: 'expandTeams - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						name: 'includeSelf-boolean(query)',
						displayName: 'includeSelf',
						description: 'includeSelf - boolean (query)',
						type: 'boolean',
						default: true,
					},
				],
			},
		],
	},
];

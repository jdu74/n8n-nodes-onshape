import { INodeProperties } from "n8n-workflow";

export const EnumerateObjectWorkflowsDescription: INodeProperties[] = [
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
					'Workflow',
				],
				operation: [
					'GET /workflow/companies/{cid}/objects',
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
					'GET /workflow/companies/{cid}/objects',
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
						displayName: 'objectTypes',
						name: 'objectTypes-array(query)',
						description: 'objectTypes - array (query)',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'objectTypesProperties',
								name: 'objectTypesProperties',
								values: [
									{
										displayName: 'objectTypes',
										name: 'objectTypes',
										description: 'objectTypes - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						displayName: 'states',
						name: 'states-array(query)',
						description: 'states - array (query)',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'statesProperties',
								name: 'statesProperties',
								values: [
									{
										displayName: 'states',
										name: 'states',
										description: 'states - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						displayName: 'limit',
						name: 'limit-integer(query)',
						description: 'limit - integer (query)',
						type: 'number',
						default: 20,
					},
					{
						displayName: 'modifiedAfter',
						name: 'modifiedAfter-string(query)',
						description: 'modifiedAfter - string (query)',
						type: 'string',
						default: '2000-01-01T00:00:00Z',
					},
				],
			},
		],
	},
];

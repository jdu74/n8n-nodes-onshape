import { INodeProperties } from "n8n-workflow";

export const getActiveWorkflowsDescription: INodeProperties[] = [
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
					'GET /workflow/active',
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
						displayName: 'documentId',
						name: 'documentId-string(query)',
						description: 'documentId - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
];

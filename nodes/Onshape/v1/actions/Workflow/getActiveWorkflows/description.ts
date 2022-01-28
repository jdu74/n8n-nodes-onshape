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
					'GET /api/workflow/active',
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
						name: 'documentId-string(query)',
						displayName: 'documentId',
						description: 'documentId - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
];

import { INodeProperties } from "n8n-workflow";

export const GetCompanyReleaseWorkflowDescription: INodeProperties[] = [
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
					'ReleasePackage',
				],
				operation: [
					'GET /releasepackages/companyreleaseworkflow',
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

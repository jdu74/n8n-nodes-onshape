import { INodeProperties } from "n8n-workflow";

export const getDocumentsDescription: INodeProperties[] = [
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
					'Document',
				],
				operation: [
					'GET /documents',
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
						name: 'filter-integer(query)',
						displayName: 'filter',
						description: 'filter - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						name: 'owner-string(query)',
						displayName: 'owner',
						description: 'owner - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'ownerType-integer(query)',
						displayName: 'ownerType',
						description: 'ownerType - integer (query)',
						type: 'number',
						default: 1,
					},
					{
						name: 'sortColumn-string(query)',
						displayName: 'sortColumn',
						description: 'sortColumn - string (query)',
						type: 'string',
						default: 'createdAt',
					},
					{
						name: 'sortOrder-string(query)',
						displayName: 'sortOrder',
						description: 'sortOrder - string (query)',
						type: 'string',
						default: 'desc',
					},
					{
						name: 'offset-integer(query)',
						displayName: 'offset',
						description: 'offset - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						name: 'limit-integer(query)',
						displayName: 'limit',
						description: 'limit - integer (query)',
						type: 'number',
						default: 20,
					},
					{
						name: 'label-string(query)',
						displayName: 'label',
						description: 'label - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'project-string(query)',
						displayName: 'project',
						description: 'project - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'parentId-string(query)',
						displayName: 'parentId',
						description: 'parentId - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
];

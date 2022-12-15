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
						displayName: 'filter',
						name: 'filter-integer(query)',
						description: 'filter - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						displayName: 'owner',
						name: 'owner-string(query)',
						description: 'owner - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'ownerType',
						name: 'ownerType-integer(query)',
						description: 'ownerType - integer (query)',
						type: 'number',
						default: 1,
					},
					{
						displayName: 'sortColumn',
						name: 'sortColumn-string(query)',
						description: 'sortColumn - string (query)',
						type: 'string',
						default: 'createdAt',
					},
					{
						displayName: 'sortOrder',
						name: 'sortOrder-string(query)',
						description: 'sortOrder - string (query)',
						type: 'string',
						default: 'desc',
					},
					{
						displayName: 'offset',
						name: 'offset-integer(query)',
						description: 'offset - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						displayName: 'limit',
						name: 'limit-integer(query)',
						description: 'limit - integer (query)',
						type: 'number',
						default: 20,
					},
					{
						displayName: 'label',
						name: 'label-string(query)',
						description: 'label - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'project',
						name: 'project-string(query)',
						description: 'project - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'parentId',
						name: 'parentId-string(query)',
						description: 'parentId - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
];

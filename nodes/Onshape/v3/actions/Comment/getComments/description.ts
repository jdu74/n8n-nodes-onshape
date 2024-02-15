import { INodeProperties } from "n8n-workflow";

export const GetCommentsDescription: INodeProperties[] = [
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
					'Comment',
				],
				operation: [
					'GET /comments',
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
						displayName: 'did',
						name: 'did-string(query)',
						description: 'did - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'objectType',
						name: 'objectType-integer(query)',
						description: 'objectType - integer (query)',
						type: 'number',
						default: 6,
					},
					{
						displayName: 'pid',
						name: 'pid-string(query)',
						description: 'pid - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'eid',
						name: 'eid-string(query)',
						description: 'eid - string (query)',
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
						displayName: 'resolved',
						name: 'resolved-boolean(query)',
						description: 'resolved - boolean (query)',
						type: 'boolean',
						default: true,
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
						default: 'asc',
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
				],
			},
		],
	},
];

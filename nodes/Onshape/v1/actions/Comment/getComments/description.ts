import { INodeProperties } from "n8n-workflow";

export const getCommentsDescription: INodeProperties[] = [
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
					'GET /api/comments',
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
						name: 'did-string(query)',
						displayName: 'did',
						description: 'did - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'objectType-integer(query)',
						displayName: 'objectType',
						description: 'objectType - integer (query)',
						type: 'number',
						default: 6,
					},
					{
						name: 'pid-string(query)',
						displayName: 'pid',
						description: 'pid - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'eid-string(query)',
						displayName: 'eid',
						description: 'eid - string (query)',
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
						name: 'resolved-boolean(query)',
						displayName: 'resolved',
						description: 'resolved - boolean (query)',
						type: 'boolean',
						default: true,
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
				],
			},
		],
	},
];

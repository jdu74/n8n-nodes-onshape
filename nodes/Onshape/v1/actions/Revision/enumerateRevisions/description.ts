import { INodeProperties } from "n8n-workflow";

export const enumerateRevisionsDescription: INodeProperties[] = [
	{
		name: 'cid-string(path)',
		displayName: 'cid',
		description: 'cid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Revision',
				],
				operation: [
					'GET /revisions/companies/{cid}',
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
					'Revision',
				],
				operation: [
					'GET /revisions/companies/{cid}',
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
						name: 'elementType-integer(query)',
						displayName: 'elementType',
						description: 'elementType - integer (query)',
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
						name: 'offset-integer(query)',
						displayName: 'offset',
						description: 'offset - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						name: 'latestOnly-boolean(query)',
						displayName: 'latestOnly',
						description: 'latestOnly - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'after-string(query)',
						displayName: 'after',
						description: 'after - string (query)',
						type: 'string',
						default: '2000-01-01T00:00:00Z',
					},
				],
			},
		],
	},
];

import { INodeProperties } from "n8n-workflow";

export const enumerateRevisionsDescription: INodeProperties[] = [
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
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: 'elementType',
						name: 'elementType-integer(query)',
						description: 'elementType - integer (query)',
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
						displayName: 'offset',
						name: 'offset-integer(query)',
						description: 'offset - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						displayName: 'latestOnly',
						name: 'latestOnly-boolean(query)',
						description: 'latestOnly - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'after',
						name: 'after-string(query)',
						description: 'after - string (query)',
						type: 'string',
						default: '2000-01-01T00:00:00Z',
					},
				],
			},
		],
	},
];

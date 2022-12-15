import { INodeProperties } from "n8n-workflow";

export const getAliasMembersDescription: INodeProperties[] = [
	{
		displayName: 'aid',
		name: 'aid-string(path)',
		description: 'aid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Alias',
				],
				operation: [
					'GET /aliases/{aid}/members',
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
					'Alias',
				],
				operation: [
					'GET /aliases/{aid}/members',
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
						displayName: 'prefix',
						name: 'prefix-string(query)',
						description: 'prefix - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'sortColumn',
						name: 'sortColumn-string(query)',
						description: 'sortColumn - string (query)',
						type: 'string',
						default: 'name',
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

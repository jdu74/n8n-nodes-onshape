import { INodeProperties } from "n8n-workflow";

export const getAliasMembersDescription: INodeProperties[] = [
	{
		name: 'aid-string(path)',
		displayName: 'aid',
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
				name: 'metadataValues',
				displayName: 'Metadata',
				default: '',
				values: [
					{
						name: 'prefix-string(query)',
						displayName: 'prefix',
						description: 'prefix - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'sortColumn-string(query)',
						displayName: 'sortColumn',
						description: 'sortColumn - string (query)',
						type: 'string',
						default: 'name',
					},
					{
						name: 'sortOrder-string(query)',
						displayName: 'sortOrder',
						description: 'sortOrder - string (query)',
						type: 'string',
						default: 'asc',
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

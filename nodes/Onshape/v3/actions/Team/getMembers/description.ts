import { INodeProperties } from "n8n-workflow";

export const GetMembersDescription: INodeProperties[] = [
	{
		displayName: 'tid',
		name: 'tid-string(path)',
		description: 'tid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Team',
				],
				operation: [
					'GET /teams/{tid}/members',
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
					'Team',
				],
				operation: [
					'GET /teams/{tid}/members',
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
						displayName: 'sortColumn',
						name: 'sortColumn-string(query)',
						description: 'sortColumn - string (query)',
						type: 'string',
						default: '',
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
					{
						displayName: 'q',
						name: 'q-string(query)',
						description: 'q - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
];

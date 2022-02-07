import { INodeProperties } from "n8n-workflow";

export const getClassroomMembersDescription: INodeProperties[] = [
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
					'Classroom',
				],
				operation: [
					'GET /classrooms/{cid}/members',
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
					'Classroom',
				],
				operation: [
					'GET /classrooms/{cid}/members',
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
						name: 'sortColumn-string(query)',
						displayName: 'sortColumn',
						description: 'sortColumn - string (query)',
						type: 'string',
						default: '',
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
					{
						name: 'q-string(query)',
						displayName: 'q',
						description: 'q - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
];

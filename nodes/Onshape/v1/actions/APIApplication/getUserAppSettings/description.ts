import { INodeProperties } from "n8n-workflow";

export const getUserAppSettingsDescription: INodeProperties[] = [
	{
		name: 'uid-string(path)',
		displayName: 'uid',
		description: 'uid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'APIApplication',
				],
				operation: [
					'GET /api/applications/clients/{cid}/settings/users/{uid}',
				],
			},
		},
	},
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
					'APIApplication',
				],
				operation: [
					'GET /api/applications/clients/{cid}/settings/users/{uid}',
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
					'APIApplication',
				],
				operation: [
					'GET /api/applications/clients/{cid}/settings/users/{uid}',
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
						displayName: 'key',
						name: 'key-array(query)',
						description: 'key - array (query)',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'keyProperties',
								name: 'keyProperties',
								values: [
									{
										name: 'key',
										displayName: 'key',
										description: 'key - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
				],
			},
		],
	},
];

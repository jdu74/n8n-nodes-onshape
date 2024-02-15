import { INodeProperties } from "n8n-workflow";

export const DeleteAppSettingsDescription: INodeProperties[] = [
	{
		displayName: 'uid',
		name: 'uid-string(path)',
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
					'DELETE /applications/clients/{cid}/settings/users/{uid}',
				],
			},
		},
	},
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
					'APIApplication',
				],
				operation: [
					'DELETE /applications/clients/{cid}/settings/users/{uid}',
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
					'DELETE /applications/clients/{cid}/settings/users/{uid}',
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
										displayName: 'key',
										name: 'key',
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

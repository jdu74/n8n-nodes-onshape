import { INodeProperties } from "n8n-workflow";

export const getUserSettingsDescription: INodeProperties[] = [
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
					'User',
				],
				operation: [
					'GET /users/{uid}/settings',
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
					'User',
				],
				operation: [
					'GET /users/{uid}/settings',
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
						name: 'includematerials-boolean(query)',
						displayName: 'includematerials',
						description: 'includematerials - boolean (query)',
						type: 'boolean',
						default: true,
					},
				],
			},
		],
	},
];

import { INodeProperties } from "n8n-workflow";

export const getUserSettingsDescription: INodeProperties[] = [
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
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: 'includematerials',
						name: 'includematerials-boolean(query)',
						description: 'includematerials - boolean (query)',
						type: 'boolean',
						default: true,
					},
				],
			},
		],
	},
];

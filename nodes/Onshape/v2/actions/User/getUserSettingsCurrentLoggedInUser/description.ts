import { INodeProperties } from "n8n-workflow";

export const getUserSettingsCurrentLoggedInUserDescription: INodeProperties[] = [
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
					'GET /users/settings',
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

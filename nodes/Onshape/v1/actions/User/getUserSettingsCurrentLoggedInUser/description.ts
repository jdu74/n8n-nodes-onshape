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
					'GET /api/users/settings',
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

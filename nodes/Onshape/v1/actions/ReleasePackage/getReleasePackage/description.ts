import { INodeProperties } from "n8n-workflow";

export const getReleasePackageDescription: INodeProperties[] = [
	{
		name: 'rpid-string(path)',
		displayName: 'rpid',
		description: 'rpid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'ReleasePackage',
				],
				operation: [
					'GET /api/releasepackages/{rpid}',
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
					'ReleasePackage',
				],
				operation: [
					'GET /api/releasepackages/{rpid}',
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
						name: 'detailed-boolean(query)',
						displayName: 'detailed',
						description: 'detailed - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

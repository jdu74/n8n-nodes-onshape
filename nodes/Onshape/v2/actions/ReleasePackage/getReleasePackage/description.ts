import { INodeProperties } from "n8n-workflow";

export const getReleasePackageDescription: INodeProperties[] = [
	{
		displayName: 'rpid',
		name: 'rpid-string(path)',
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
					'GET /releasepackages/{rpid}',
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
					'GET /releasepackages/{rpid}',
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
						displayName: 'detailed',
						name: 'detailed-boolean(query)',
						description: 'detailed - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

import { INodeProperties } from "n8n-workflow";

export const createObsoletionPackageDescription: INodeProperties[] = [
	{
		displayName: 'wfid',
		name: 'wfid-string(path)',
		description: 'wfid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'ReleasePackage',
				],
				operation: [
					'POST /releasepackages/obsoletion/{wfid}',
				],
			},
		},
	},
	{
		displayName: 'revisionId',
		name: 'revisionId-string(query)',
		description: 'revisionId - string (query)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'ReleasePackage',
				],
				operation: [
					'POST /releasepackages/obsoletion/{wfid}',
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
					'POST /releasepackages/obsoletion/{wfid}',
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
						displayName: 'debugMode',
						name: 'debugMode-boolean(query)',
						description: 'debugMode - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

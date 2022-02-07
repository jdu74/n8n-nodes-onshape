import { INodeProperties } from "n8n-workflow";

export const createObsoletionPackageDescription: INodeProperties[] = [
	{
		name: 'wfid-string(path)',
		displayName: 'wfid',
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
		name: 'revisionId-string(query)',
		displayName: 'revisionId',
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
				name: 'metadataValues',
				displayName: 'Metadata',
				default: '',
				values: [
					{
						name: 'debugMode-boolean(query)',
						displayName: 'debugMode',
						description: 'debugMode - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

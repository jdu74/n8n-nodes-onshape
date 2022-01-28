import { INodeProperties } from "n8n-workflow";

export const getOpenApiDescription: INodeProperties[] = [
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
					'OpenApi',
				],
				operation: [
					'GET /api/openapi',
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
						name: 'forceReload-boolean(query)',
						displayName: 'forceReload',
						description: 'forceReload - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'version-string(query)',
						displayName: 'version',
						description: 'version - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'versionAlias-string(query)',
						displayName: 'versionAlias',
						description: 'versionAlias - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'includedTags',
						name: 'includedTags-array(query)',
						description: 'includedTags - array (query)',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'includedTagsProperties',
								name: 'includedTagsProperties',
								values: [
									{
										name: 'includedTags',
										displayName: 'includedTags',
										description: 'includedTags - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						displayName: 'excludedTags',
						name: 'excludedTags-array(query)',
						description: 'excludedTags - array (query)',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'excludedTagsProperties',
								name: 'excludedTagsProperties',
								values: [
									{
										name: 'excludedTags',
										displayName: 'excludedTags',
										description: 'excludedTags - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						name: 'includeDeprecated-boolean(query)',
						displayName: 'includeDeprecated',
						description: 'includeDeprecated - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'documentationStatuses',
						name: 'documentationStatuses-array(query)',
						description: 'documentationStatuses - array (query)',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'documentationStatusesProperties',
								name: 'documentationStatusesProperties',
								values: [
									{
										name: 'documentationStatuses',
										displayName: 'documentationStatuses',
										description: 'documentationStatuses - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						name: 'restUserRole-string(query)',
						displayName: 'restUserRole',
						description: 'restUserRole - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'operationIds',
						name: 'operationIds-array(query)',
						description: 'operationIds - array (query)',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'operationIdsProperties',
								name: 'operationIdsProperties',
								values: [
									{
										name: 'operationIds',
										displayName: 'operationIds',
										description: 'operationIds - string',
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

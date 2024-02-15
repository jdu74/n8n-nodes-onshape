import { INodeProperties } from "n8n-workflow";

export const GetOpenApiDescription: INodeProperties[] = [
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
					'GET /openapi',
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
						displayName: 'forceReload',
						name: 'forceReload-boolean(query)',
						description: 'forceReload - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'version',
						name: 'version-string(query)',
						description: 'version - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'versionAlias',
						name: 'versionAlias-string(query)',
						description: 'versionAlias - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'noFilter',
						name: 'noFilter-boolean(query)',
						description: 'noFilter - boolean (query)',
						type: 'boolean',
						default: false,
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
										displayName: 'includedTags',
										name: 'includedTags',
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
										displayName: 'excludedTags',
										name: 'excludedTags',
										description: 'excludedTags - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						displayName: 'includeDeprecated',
						name: 'includeDeprecated-boolean(query)',
						description: 'includeDeprecated - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'onlyDeprecated',
						name: 'onlyDeprecated-boolean(query)',
						description: 'onlyDeprecated - boolean (query)',
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
										displayName: 'documentationStatuses',
										name: 'documentationStatuses',
										description: 'documentationStatuses - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						displayName: 'restUserRole',
						name: 'restUserRole-string(query)',
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
										displayName: 'operationIds',
										name: 'operationIds',
										description: 'operationIds - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						displayName: 'excludedOperationIds',
						name: 'excludedOperationIds-array(query)',
						description: 'excludedOperationIds - array (query)',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'excludedOperationIdsProperties',
								name: 'excludedOperationIdsProperties',
								values: [
									{
										displayName: 'excludedOperationIds',
										name: 'excludedOperationIds',
										description: 'excludedOperationIds - string',
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

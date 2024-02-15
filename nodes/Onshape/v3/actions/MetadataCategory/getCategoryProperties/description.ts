import { INodeProperties } from "n8n-workflow";

export const GetCategoryPropertiesDescription: INodeProperties[] = [
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
					'MetadataCategory',
				],
				operation: [
					'GET /metadatacategory/categoryproperties',
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
						displayName: 'ownerId',
						name: 'ownerId-string(query)',
						description: 'ownerId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'ownerType',
						name: 'ownerType-integer(query)',
						description: 'ownerType - integer (query)',
						type: 'number',
						default: 1,
					},
					{
						displayName: 'documentId',
						name: 'documentId-string(query)',
						description: 'documentId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'categoryIds',
						name: 'categoryIds-array(query)',
						description: 'categoryIds - array (query)',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'categoryIdsProperties',
								name: 'categoryIdsProperties',
								values: [
									{
										displayName: 'categoryIds',
										name: 'categoryIds',
										description: 'categoryIds - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						displayName: 'objectType',
						name: 'objectType-integer(query)',
						description: 'objectType - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						displayName: 'strict',
						name: 'strict-boolean(query)',
						description: 'strict - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						displayName: 'includeObjectTypeDefaults',
						name: 'includeObjectTypeDefaults-boolean(query)',
						description: 'includeObjectTypeDefaults - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeComputedProperties',
						name: 'includeComputedProperties-boolean(query)',
						description: 'includeComputedProperties - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						displayName: 'includePartPropertiesTableOnlyProperties',
						name: 'includePartPropertiesTableOnlyProperties-boolean(query)',
						description: 'includePartPropertiesTableOnlyProperties - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						displayName: 'onlyActive',
						name: 'onlyActive-boolean(query)',
						description: 'onlyActive - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'onlyObjectTypeDefaults',
						name: 'onlyObjectTypeDefaults-boolean(query)',
						description: 'onlyObjectTypeDefaults - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

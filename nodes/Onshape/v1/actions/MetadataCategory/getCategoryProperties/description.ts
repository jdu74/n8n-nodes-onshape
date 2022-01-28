import { INodeProperties } from "n8n-workflow";

export const getCategoryPropertiesDescription: INodeProperties[] = [
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
					'GET /api/metadatacategory/categoryproperties',
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
						name: 'ownerId-string(query)',
						displayName: 'ownerId',
						description: 'ownerId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'ownerType-integer(query)',
						displayName: 'ownerType',
						description: 'ownerType - integer (query)',
						type: 'number',
						default: 1,
					},
					{
						name: 'documentId-string(query)',
						displayName: 'documentId',
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
										name: 'categoryIds',
										displayName: 'categoryIds',
										description: 'categoryIds - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						name: 'objectType-integer(query)',
						displayName: 'objectType',
						description: 'objectType - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						name: 'strict-boolean(query)',
						displayName: 'strict',
						description: 'strict - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						name: 'includeObjectTypeDefaults-boolean(query)',
						displayName: 'includeObjectTypeDefaults',
						description: 'includeObjectTypeDefaults - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeComputedProperties-boolean(query)',
						displayName: 'includeComputedProperties',
						description: 'includeComputedProperties - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						name: 'includePartPropertiesTableOnlyProperties-boolean(query)',
						displayName: 'includePartPropertiesTableOnlyProperties',
						description: 'includePartPropertiesTableOnlyProperties - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						name: 'onlyActive-boolean(query)',
						displayName: 'onlyActive',
						description: 'onlyActive - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'onlyObjectTypeDefaults-boolean(query)',
						displayName: 'onlyObjectTypeDefaults',
						description: 'onlyObjectTypeDefaults - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

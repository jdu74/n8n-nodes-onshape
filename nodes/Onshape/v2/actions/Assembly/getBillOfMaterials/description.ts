import { INodeProperties } from "n8n-workflow";

export const getBillOfMaterialsDescription: INodeProperties[] = [
	{
		displayName: 'did',
		name: 'did-string(path)',
		description: 'did - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Assembly',
				],
				operation: [
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/bom',
				],
			},
		},
	},
	{
		displayName: 'wvm',
		name: 'wvm-string(path)',
		description: 'wvm - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Assembly',
				],
				operation: [
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/bom',
				],
			},
		},
	},
	{
		displayName: 'wvmid',
		name: 'wvmid-string(path)',
		description: 'wvmid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Assembly',
				],
				operation: [
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/bom',
				],
			},
		},
	},
	{
		displayName: 'eid',
		name: 'eid-string(path)',
		description: 'eid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Assembly',
				],
				operation: [
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/bom',
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
					'Assembly',
				],
				operation: [
					'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/bom',
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
						displayName: 'linkDocumentId',
						name: 'linkDocumentId-string(query)',
						description: 'linkDocumentId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'configuration',
						name: 'configuration-string(query)',
						description: 'configuration - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'bomColumnIds',
						name: 'bomColumnIds-array(query)',
						description: 'bomColumnIds - array (query)',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'bomColumnIdsProperties',
								name: 'bomColumnIdsProperties',
								values: [
									{
										displayName: 'bomColumnIds',
										name: 'bomColumnIds',
										description: 'bomColumnIds - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						displayName: 'indented',
						name: 'indented-boolean(query)',
						description: 'indented - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						displayName: 'multiLevel',
						name: 'multiLevel-boolean(query)',
						description: 'multiLevel - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'generateIfAbsent',
						name: 'generateIfAbsent-boolean(query)',
						description: 'generateIfAbsent - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'templateId',
						name: 'templateId-string(query)',
						description: 'templateId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'includeExcluded',
						name: 'includeExcluded-boolean(query)',
						description: 'includeExcluded - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'onlyVisibleColumns',
						name: 'onlyVisibleColumns-boolean(query)',
						description: 'onlyVisibleColumns - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'ignoreSubassemblyBomBehavior',
						name: 'ignoreSubassemblyBomBehavior-boolean(query)',
						description: 'ignoreSubassemblyBomBehavior - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeItemMicroversions',
						name: 'includeItemMicroversions-boolean(query)',
						description: 'includeItemMicroversions - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeTopLevelAssemblyRow',
						name: 'includeTopLevelAssemblyRow-boolean(query)',
						description: 'includeTopLevelAssemblyRow - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'thumbnail',
						name: 'thumbnail-boolean(query)',
						description: 'thumbnail - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

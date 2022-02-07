import { INodeProperties } from "n8n-workflow";

export const getBillOfMaterialsDescription: INodeProperties[] = [
	{
		name: 'did-string(path)',
		displayName: 'did',
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
		name: 'wvm-string(path)',
		displayName: 'wvm',
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
		name: 'wvmid-string(path)',
		displayName: 'wvmid',
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
		name: 'eid-string(path)',
		displayName: 'eid',
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
				name: 'metadataValues',
				displayName: 'Metadata',
				default: '',
				values: [
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
										name: 'bomColumnIds',
										displayName: 'bomColumnIds',
										description: 'bomColumnIds - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						name: 'indented-boolean(query)',
						displayName: 'indented',
						description: 'indented - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						name: 'multiLevel-boolean(query)',
						displayName: 'multiLevel',
						description: 'multiLevel - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'generateIfAbsent-boolean(query)',
						displayName: 'generateIfAbsent',
						description: 'generateIfAbsent - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'linkDocumentId-string(query)',
						displayName: 'linkDocumentId',
						description: 'linkDocumentId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'configuration-string(query)',
						displayName: 'configuration',
						description: 'configuration - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'templateId-string(query)',
						displayName: 'templateId',
						description: 'templateId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'includeExcluded-boolean(query)',
						displayName: 'includeExcluded',
						description: 'includeExcluded - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'onlyVisibleColumns-boolean(query)',
						displayName: 'onlyVisibleColumns',
						description: 'onlyVisibleColumns - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

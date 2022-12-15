import { INodeProperties } from "n8n-workflow";

export const getPartStudioMassPropertiesDescription: INodeProperties[] = [
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
					'PartStudio',
				],
				operation: [
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
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
					'PartStudio',
				],
				operation: [
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
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
					'PartStudio',
				],
				operation: [
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
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
					'PartStudio',
				],
				operation: [
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
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
					'PartStudio',
				],
				operation: [
					'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
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
						displayName: 'rollbackBarIndex',
						name: 'rollbackBarIndex-integer(query)',
						description: 'rollbackBarIndex - integer (query)',
						type: 'number',
						default: -1,
					},
					{
						displayName: 'elementMicroversionId',
						name: 'elementMicroversionId-string(query)',
						description: 'elementMicroversionId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'partId',
						name: 'partId-array(query)',
						description: 'partId - array (query)',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'partIdProperties',
								name: 'partIdProperties',
								values: [
									{
										displayName: 'partId',
										name: 'partId',
										description: 'partId - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						displayName: 'massAsGroup',
						name: 'massAsGroup-boolean(query)',
						description: 'massAsGroup - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						displayName: 'useMassPropertyOverrides',
						name: 'useMassPropertyOverrides-boolean(query)',
						description: 'useMassPropertyOverrides - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

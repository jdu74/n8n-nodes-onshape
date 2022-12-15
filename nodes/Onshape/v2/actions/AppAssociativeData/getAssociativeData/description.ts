import { INodeProperties } from "n8n-workflow";

export const getAssociativeDataDescription: INodeProperties[] = [
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
					'AppAssociativeData',
				],
				operation: [
					'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
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
					'AppAssociativeData',
				],
				operation: [
					'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
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
					'AppAssociativeData',
				],
				operation: [
					'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
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
					'AppAssociativeData',
				],
				operation: [
					'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
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
					'AppAssociativeData',
				],
				operation: [
					'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
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
						displayName: 'transactionId',
						name: 'transactionId-string(query)',
						description: 'transactionId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'changeId',
						name: 'changeId-string(query)',
						description: 'changeId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'associativeDataId',
						name: 'associativeDataId-array(query)',
						description: 'associativeDataId - array (query)',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'associativeDataIdProperties',
								name: 'associativeDataIdProperties',
								values: [
									{
										displayName: 'associativeDataId',
										name: 'associativeDataId',
										description: 'associativeDataId - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						displayName: 'elementId',
						name: 'elementId-string(query)',
						description: 'elementId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'viewId',
						name: 'viewId-string(query)',
						description: 'viewId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'microversionId',
						name: 'microversionId-string(query)',
						description: 'microversionId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'documentMicroversion',
						name: 'documentMicroversion-string(query)',
						description: 'documentMicroversion - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'deterministicId',
						name: 'deterministicId-string(query)',
						description: 'deterministicId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'featureId',
						name: 'featureId-string(query)',
						description: 'featureId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'entityId',
						name: 'entityId-string(query)',
						description: 'entityId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'occurrenceId',
						name: 'occurrenceId-string(query)',
						description: 'occurrenceId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'returnIdTags',
						name: 'returnIdTags-boolean(query)',
						description: 'returnIdTags - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

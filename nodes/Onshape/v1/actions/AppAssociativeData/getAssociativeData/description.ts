import { INodeProperties } from "n8n-workflow";

export const getAssociativeDataDescription: INodeProperties[] = [
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
					'AppAssociativeData',
				],
				operation: [
					'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
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
					'AppAssociativeData',
				],
				operation: [
					'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
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
					'AppAssociativeData',
				],
				operation: [
					'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
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
				name: 'metadataValues',
				displayName: 'Metadata',
				default: '',
				values: [
					{
						name: 'transactionId-string(query)',
						displayName: 'transactionId',
						description: 'transactionId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'changeId-string(query)',
						displayName: 'changeId',
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
										name: 'associativeDataId',
										displayName: 'associativeDataId',
										description: 'associativeDataId - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						name: 'elementId-string(query)',
						displayName: 'elementId',
						description: 'elementId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'viewId-string(query)',
						displayName: 'viewId',
						description: 'viewId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'microversionId-string(query)',
						displayName: 'microversionId',
						description: 'microversionId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'documentMicroversion-string(query)',
						displayName: 'documentMicroversion',
						description: 'documentMicroversion - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'deterministicId-string(query)',
						displayName: 'deterministicId',
						description: 'deterministicId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'featureId-string(query)',
						displayName: 'featureId',
						description: 'featureId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'entityId-string(query)',
						displayName: 'entityId',
						description: 'entityId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'occurrenceId-string(query)',
						displayName: 'occurrenceId',
						description: 'occurrenceId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'returnIdTags-boolean(query)',
						displayName: 'returnIdTags',
						description: 'returnIdTags - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

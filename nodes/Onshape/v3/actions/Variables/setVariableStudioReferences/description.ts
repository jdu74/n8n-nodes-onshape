import { INodeProperties } from "n8n-workflow";

export const SetVariableStudioReferencesDescription: INodeProperties[] = [
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
					'Variables',
				],
				operation: [
					'POST /variables/d/{did}/w/{wid}/e/{eid}/variablestudioreferences',
				],
			},
		},
	},
	{
		displayName: 'wid',
		name: 'wid-string(path)',
		description: 'wid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Variables',
				],
				operation: [
					'POST /variables/d/{did}/w/{wid}/e/{eid}/variablestudioreferences',
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
					'Variables',
				],
				operation: [
					'POST /variables/d/{did}/w/{wid}/e/{eid}/variablestudioreferences',
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
					'Variables',
				],
				operation: [
					'POST /variables/d/{did}/w/{wid}/e/{eid}/variablestudioreferences',
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
				],
			},
		],
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		description: 'JSON Content-Type',
		type: 'options',
		default: 'application/json;charset=UTF-8; qs=0.09',
		displayOptions: {
			show: {
				resource: [
					'Variables',
				],
				operation: [
					'POST /variables/d/{did}/w/{wid}/e/{eid}/variablestudioreferences',
				],
			},
		},
		options: [
			{
				name: 'application/json;charset=UTF-8; qs=0.09',
				value: 'application/json;charset=UTF-8; qs=0.09',
			},
		],
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'Variables',
				],
				operation: [
					'POST /variables/d/{did}/w/{wid}/e/{eid}/variablestudioreferences',
				],
				jsonContentType: [
					'application/json;charset=UTF-8; qs=0.09',
				],
			},
		},
	},
	{
		displayName: 'JSON Object',
		name: 'jsonObject1-object (body)',
		description: 'jsonObject - collection',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'Variables',
				],
				operation: [
					'POST /variables/d/{did}/w/{wid}/e/{eid}/variablestudioreferences',
				],
				jsonParameters: [
					false,
				],
				jsonContentType: [
					'application/json;charset=UTF-8; qs=0.09',
				],
			},
		},
		options: [
			{
				displayName: 'references',
				name: 'references',
				description: 'references - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'referencesProperties',
						name: 'referencesProperties',
						values: [
							{
								displayName: 'references',
								name: 'references',
								description: 'references - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
									{
										displayName: 'entireVariableStudio',
										name: 'entireVariableStudio',
										description: 'entireVariableStudio - boolean',
										type: 'boolean',
										default: false,
									},
									{
										displayName: 'referenceDocumentId',
										name: 'referenceDocumentId',
										description: 'referenceDocumentId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'referenceElementId',
										name: 'referenceElementId',
										description: 'referenceElementId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'referenceVersionId',
										name: 'referenceVersionId',
										description: 'referenceVersionId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'variableNames',
										name: 'variableNames',
										description: 'variableNames - array',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true,
										},
										default: '',
										options: [
											{
												displayName: 'variableNamesProperties',
												name: 'variableNamesProperties',
												values: [
													{
														displayName: 'variableNames',
														name: 'variableNames',
														description: 'variableNames - string',
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
				],
			},
		],
	},
	{
		displayName: 'JSON Object',
		name: 'jsonObject2-json(body)',
		description: 'jsonObject - json',
		type: 'json',
		default: '',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'Variables',
				],
				operation: [
					'POST /variables/d/{did}/w/{wid}/e/{eid}/variablestudioreferences',
				],
				jsonParameters: [
					true,
				],
				jsonContentType: [
					'application/json;charset=UTF-8; qs=0.09',
				],
			},
		},
	},
];

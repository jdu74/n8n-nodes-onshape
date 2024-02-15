import { INodeProperties } from "n8n-workflow";

export const UpdateAppElementDescription: INodeProperties[] = [
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
				],
			},
		},
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
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
				displayName: 'changes',
				name: 'changes',
				description: 'changes - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'changesProperties',
						name: 'changesProperties',
						values: [
							{
								displayName: 'changes',
								name: 'changes',
								description: 'changes - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
									{
										displayName: 'baseContent',
										name: 'baseContent',
										description: 'baseContent - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'delta',
										name: 'delta',
										description: 'delta - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'subelementId',
										name: 'subelementId',
										description: 'subelementId - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
				],
			},
			{
				displayName: 'description',
				name: 'description',
				description: 'description - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'jsonPatch',
				name: 'jsonPatch',
				description: 'jsonPatch - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'jsonTreeEdit',
				name: 'jsonTreeEdit',
				description: 'jsonTreeEdit - object',
				type: 'collection',
				default: '',
				placeholder: 'Add Field',
				options: [
					{
						displayName: 'btType',
						name: 'btType',
						description: 'btType - string',
						type: 'string',
						default: '',
					},
				],
			},
			{
				displayName: 'parentChangeId',
				name: 'parentChangeId',
				description: 'parentChangeId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'propertyUpdates',
				name: 'propertyUpdates',
				description: 'propertyUpdates - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'propertyUpdatesProperties',
						name: 'propertyUpdatesProperties',
						values: [
							{
								displayName: 'propertyUpdates',
								name: 'propertyUpdates',
								description: 'propertyUpdates - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
									{
										displayName: 'propertyId',
										name: 'propertyId',
										description: 'propertyId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'value',
										name: 'value',
										description: 'value - object',
										type: 'json',
										default: '',
									},
								],
							},
						],
					},
				],
			},
			{
				displayName: 'returnError',
				name: 'returnError',
				description: 'returnError - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'returnJsonDifferenceFormat',
				name: 'returnJsonDifferenceFormat',
				description: 'returnJsonDifferenceFormat - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'transactionId',
				name: 'transactionId',
				description: 'transactionId - string',
				type: 'string',
				default: '',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
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

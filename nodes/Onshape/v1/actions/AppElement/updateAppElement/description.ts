import { INodeProperties } from "n8n-workflow";

export const updateAppElementDescription: INodeProperties[] = [
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content',
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
		default: 'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
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
				name: 'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
				value: 'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
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
					'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
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
					'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
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
										name: 'baseContent',
										displayName: 'baseContent',
										description: 'baseContent - string',
										type: 'string',
										default: '',
									},
									{
										name: 'delta',
										displayName: 'delta',
										description: 'delta - string',
										type: 'string',
										default: '',
									},
									{
										name: 'subelementId',
										displayName: 'subelementId',
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
				name: 'description',
				displayName: 'description',
				description: 'description - string',
				type: 'string',
				default: '',
			},
			{
				name: 'jsonTreeEdit',
				displayName: 'jsonTreeEdit',
				description: 'jsonTreeEdit - object',
				type: 'json',
				default: '',
			},
			{
				name: 'parentChangeId',
				displayName: 'parentChangeId',
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
										name: 'onlyUpdateIfNullOrBlank',
										displayName: 'onlyUpdateIfNullOrBlank',
										description: 'onlyUpdateIfNullOrBlank - boolean',
										type: 'boolean',
										default: false,
									},
									{
										name: 'propertyId',
										displayName: 'propertyId',
										description: 'propertyId - string',
										type: 'string',
										default: '',
									},
									{
										name: 'value',
										displayName: 'value',
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
				name: 'returnError',
				displayName: 'returnError',
				description: 'returnError - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'transactionId',
				displayName: 'transactionId',
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
					'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
				],
			},
		},
	},
];

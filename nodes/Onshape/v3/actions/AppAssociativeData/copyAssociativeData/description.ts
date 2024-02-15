import { INodeProperties } from "n8n-workflow";

export const CopyAssociativeDataDescription: INodeProperties[] = [
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
					'POST /appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
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
					'AppAssociativeData',
				],
				operation: [
					'POST /appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
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
					'POST /appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
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
					'AppAssociativeData',
				],
				operation: [
					'POST /appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
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
					'AppAssociativeData',
				],
				operation: [
					'POST /appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
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
					'AppAssociativeData',
				],
				operation: [
					'POST /appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
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
				displayName: 'description',
				name: 'description',
				description: 'description - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'items',
				name: 'items',
				description: 'items - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'itemsProperties',
						name: 'itemsProperties',
						values: [
							{
								displayName: 'items',
								name: 'items',
								description: 'items - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
									{
										displayName: 'associativeDataIds',
										name: 'associativeDataIds',
										description: 'associativeDataIds - array',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true,
										},
										default: '',
										options: [
											{
												displayName: 'associativeDataIdsProperties',
												name: 'associativeDataIdsProperties',
												values: [
													{
														displayName: 'associativeDataIds',
														name: 'associativeDataIds',
														description: 'associativeDataIds - string',
														type: 'string',
														default: '',
													},
												],
											},
										],
									},
									{
										displayName: 'destinationViewId',
										name: 'destinationViewId',
										description: 'destinationViewId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'sourceElementId',
										name: 'sourceElementId',
										description: 'sourceElementId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'sourceViewId',
										name: 'sourceViewId',
										description: 'sourceViewId - string',
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
				displayName: 'parentChangeId',
				name: 'parentChangeId',
				description: 'parentChangeId - string',
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
					'AppAssociativeData',
				],
				operation: [
					'POST /appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
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

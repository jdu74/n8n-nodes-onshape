import { INodeProperties } from "n8n-workflow";

export const copyAssociativeDataDescription: INodeProperties[] = [
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
					'POST /api/appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
				],
			},
		},
	},
	{
		name: 'wid-string(path)',
		displayName: 'wid',
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
					'POST /api/appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
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
					'POST /api/appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
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
					'POST /api/appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
				],
			},
		},
		options: [
			{
				name: 'application/json;charset=UTF-8; qs=0.09',
				value: 'application/json;charset=UTF-8; qs=0.09',
			},
			{
				name: 'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
				value: 'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
			},
			{
				name: 'application/vnd.onshape.v1+json;charset=UTF-8;qs=0.1',
				value: 'application/vnd.onshape.v1+json;charset=UTF-8;qs=0.1',
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
					'POST /api/appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
				],
				jsonContentType: [
					'application/json;charset=UTF-8; qs=0.09',
					'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
					'application/vnd.onshape.v1+json;charset=UTF-8;qs=0.1',
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
					'POST /api/appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
				],
				jsonParameters: [
					false,
				],
				jsonContentType: [
					'application/json;charset=UTF-8; qs=0.09',
					'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
					'application/vnd.onshape.v1+json;charset=UTF-8;qs=0.1',
				],
			},
		},
		options: [
			{
				name: 'description',
				displayName: 'description',
				description: 'description - string',
				type: 'string',
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
										name: 'sourceElementId',
										displayName: 'sourceElementId',
										description: 'sourceElementId - string',
										type: 'string',
										default: '',
									},
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
														name: 'associativeDataIds',
														displayName: 'associativeDataIds',
														description: 'associativeDataIds - string',
														type: 'string',
														default: '',
													},
												],
											},
										],
									},
									{
										name: 'sourceViewId',
										displayName: 'sourceViewId',
										description: 'sourceViewId - string',
										type: 'string',
										default: '',
									},
									{
										name: 'destinationViewId',
										displayName: 'destinationViewId',
										description: 'destinationViewId - string',
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
					'AppAssociativeData',
				],
				operation: [
					'POST /api/appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
				],
				jsonParameters: [
					true,
				],
				jsonContentType: [
					'application/json;charset=UTF-8; qs=0.09',
					'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
					'application/vnd.onshape.v1+json;charset=UTF-8;qs=0.1',
				],
			},
		},
	},
];

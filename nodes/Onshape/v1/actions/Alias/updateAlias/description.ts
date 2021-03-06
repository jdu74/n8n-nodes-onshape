import { INodeProperties } from "n8n-workflow";

export const updateAliasDescription: INodeProperties[] = [
	{
		name: 'aid-string(path)',
		displayName: 'aid',
		description: 'aid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Alias',
				],
				operation: [
					'POST /aliases/{aid}',
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
					'Alias',
				],
				operation: [
					'POST /aliases/{aid}',
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
					'Alias',
				],
				operation: [
					'POST /aliases/{aid}',
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
					'Alias',
				],
				operation: [
					'POST /aliases/{aid}',
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
				displayName: 'additions',
				name: 'additions',
				description: 'additions - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'additionsProperties',
						name: 'additionsProperties',
						values: [
							{
								displayName: 'additions',
								name: 'additions',
								description: 'additions - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
									{
										name: 'email',
										displayName: 'email',
										description: 'email - string',
										type: 'string',
										default: '',
									},
									{
										name: 'teamId',
										displayName: 'teamId',
										description: 'teamId - string',
										type: 'string',
										default: '',
									},
									{
										name: 'userId',
										displayName: 'userId',
										description: 'userId - string',
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
				displayName: 'entries',
				name: 'entries',
				description: 'entries - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'entriesProperties',
						name: 'entriesProperties',
						values: [
							{
								displayName: 'entries',
								name: 'entries',
								description: 'entries - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
									{
										name: 'email',
										displayName: 'email',
										description: 'email - string',
										type: 'string',
										default: '',
									},
									{
										name: 'teamId',
										displayName: 'teamId',
										description: 'teamId - string',
										type: 'string',
										default: '',
									},
									{
										name: 'userId',
										displayName: 'userId',
										description: 'userId - string',
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
				name: 'name',
				displayName: 'name',
				description: 'name - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'removals',
				name: 'removals',
				description: 'removals - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'removalsProperties',
						name: 'removalsProperties',
						values: [
							{
								displayName: 'removals',
								name: 'removals',
								description: 'removals - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
									{
										name: 'email',
										displayName: 'email',
										description: 'email - string',
										type: 'string',
										default: '',
									},
									{
										name: 'teamId',
										displayName: 'teamId',
										description: 'teamId - string',
										type: 'string',
										default: '',
									},
									{
										name: 'userId',
										displayName: 'userId',
										description: 'userId - string',
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
					'Alias',
				],
				operation: [
					'POST /aliases/{aid}',
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

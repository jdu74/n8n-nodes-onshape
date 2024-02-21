import { INodeProperties } from "n8n-workflow";

export const CreateAliasDescription: INodeProperties[] = [
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		description: 'JSON Content-Type',
		type: 'hidden',
		default: 'application/json;charset=UTF-8; qs=0.09',
		displayOptions: {
			show: {
				resource: [
					'Alias',
				],
				operation: [
					'POST /aliases',
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
					'Alias',
				],
				operation: [
					'POST /aliases',
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
					'Alias',
				],
				operation: [
					'POST /aliases',
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
										displayName: 'email',
										name: 'email',
										description: 'email - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'teamId',
										name: 'teamId',
										description: 'teamId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'userId',
										name: 'userId',
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
				displayName: 'description',
				name: 'description',
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
										displayName: 'email',
										name: 'email',
										description: 'email - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'teamId',
										name: 'teamId',
										description: 'teamId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'userId',
										name: 'userId',
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
				displayName: 'name',
				name: 'name',
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
										displayName: 'email',
										name: 'email',
										description: 'email - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'teamId',
										name: 'teamId',
										description: 'teamId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'userId',
										name: 'userId',
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
					'POST /aliases',
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
					'POST /aliases',
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

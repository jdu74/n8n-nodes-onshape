import { INodeProperties } from "n8n-workflow";

export const UpdateAppSettingsDescription: INodeProperties[] = [
	{
		displayName: 'uid',
		name: 'uid-string(path)',
		description: 'uid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'APIApplication',
				],
				operation: [
					'POST /applications/clients/{cid}/settings/users/{uid}',
				],
			},
		},
	},
	{
		displayName: 'cid',
		name: 'cid-string(path)',
		description: 'cid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'APIApplication',
				],
				operation: [
					'POST /applications/clients/{cid}/settings/users/{uid}',
				],
			},
		},
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		description: 'JSON Content-Type',
		type: 'hidden',
		default: 'application/json;charset=UTF-8; qs=0.09',
		displayOptions: {
			show: {
				resource: [
					'APIApplication',
				],
				operation: [
					'POST /applications/clients/{cid}/settings/users/{uid}',
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
					'APIApplication',
				],
				operation: [
					'POST /applications/clients/{cid}/settings/users/{uid}',
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
					'APIApplication',
				],
				operation: [
					'POST /applications/clients/{cid}/settings/users/{uid}',
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
				displayName: 'settings',
				name: 'settings',
				description: 'settings - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'settingsProperties',
						name: 'settingsProperties',
						values: [
							{
								displayName: 'settings',
								name: 'settings',
								description: 'settings - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
									{
										displayName: 'key',
										name: 'key',
										description: 'key - string',
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
					'APIApplication',
				],
				operation: [
					'POST /applications/clients/{cid}/settings/users/{uid}',
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
					'APIApplication',
				],
				operation: [
					'POST /applications/clients/{cid}/settings/users/{uid}',
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

import { INodeProperties } from "n8n-workflow";

export const updateAppCompanySettingsDescription: INodeProperties[] = [
	{
		name: 'cpid-string(path)',
		displayName: 'cpid',
		description: 'cpid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'APIApplication',
				],
				operation: [
					'POST /applications/clients/{cid}/settings/companies/{cpid}',
				],
			},
		},
	},
	{
		name: 'cid-string(path)',
		displayName: 'cid',
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
					'POST /applications/clients/{cid}/settings/companies/{cpid}',
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
					'APIApplication',
				],
				operation: [
					'POST /applications/clients/{cid}/settings/companies/{cpid}',
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
					'APIApplication',
				],
				operation: [
					'POST /applications/clients/{cid}/settings/companies/{cpid}',
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
					'APIApplication',
				],
				operation: [
					'POST /applications/clients/{cid}/settings/companies/{cpid}',
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
										name: 'key',
										displayName: 'key',
										description: 'key - string',
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
					'POST /applications/clients/{cid}/settings/companies/{cpid}',
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

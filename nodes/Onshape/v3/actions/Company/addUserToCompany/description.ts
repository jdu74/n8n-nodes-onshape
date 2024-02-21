import { INodeProperties } from "n8n-workflow";

export const AddUserToCompanyDescription: INodeProperties[] = [
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
					'Company',
				],
				operation: [
					'POST /companies/{cid}/users',
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
					'Company',
				],
				operation: [
					'POST /companies/{cid}/users',
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
					'Company',
				],
				operation: [
					'POST /companies/{cid}/users',
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
					'Company',
				],
				operation: [
					'POST /companies/{cid}/users',
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
				displayName: 'admin',
				name: 'admin',
				description: 'admin - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'companyId',
				name: 'companyId',
				description: 'companyId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'documentationNameOverride',
				name: 'documentationNameOverride',
				description: 'documentationNameOverride - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'email',
				name: 'email',
				description: 'email - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'globalPermissions',
				name: 'globalPermissions',
				description: 'globalPermissions - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'globalPermissionsProperties',
						name: 'globalPermissionsProperties',
						values: [
							{
								displayName: 'globalPermissions',
								name: 'globalPermissions',
								description: 'globalPermissions - integer',
								type: 'number',
								default: 0,
							},
						],
					},
				],
			},
			{
				displayName: 'guest',
				name: 'guest',
				description: 'guest - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'light',
				name: 'light',
				description: 'light - boolean',
				type: 'boolean',
				default: false,
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
					'Company',
				],
				operation: [
					'POST /companies/{cid}/users',
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
					'Company',
				],
				operation: [
					'POST /companies/{cid}/users',
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

import { INodeProperties } from "n8n-workflow";

export const CreateTableTemplateDescription: INodeProperties[] = [
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
					'PropertiesTableTemplate',
				],
				operation: [
					'POST /tabletemplates',
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
						displayName: 'templateGroupId',
						name: 'templateGroupId-string(query)',
						description: 'templateGroupId - string (query)',
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
					'PropertiesTableTemplate',
				],
				operation: [
					'POST /tabletemplates',
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
					'PropertiesTableTemplate',
				],
				operation: [
					'POST /tabletemplates',
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
					'PropertiesTableTemplate',
				],
				operation: [
					'POST /tabletemplates',
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
				displayName: 'companyId',
				name: 'companyId',
				description: 'companyId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'isAllCaps',
				name: 'isAllCaps',
				description: 'isAllCaps - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'name',
				name: 'name',
				description: 'name - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'propertyColumns',
				name: 'propertyColumns',
				description: 'propertyColumns - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'propertyColumnsProperties',
						name: 'propertyColumnsProperties',
						values: [
							{
								displayName: 'propertyColumns',
								name: 'propertyColumns',
								description: 'propertyColumns - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'tableType',
				name: 'tableType',
				description: 'tableType - string',
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
					'PropertiesTableTemplate',
				],
				operation: [
					'POST /tabletemplates',
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

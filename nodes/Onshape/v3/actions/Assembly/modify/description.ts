import { INodeProperties } from "n8n-workflow";

export const ModifyDescription: INodeProperties[] = [
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/modify',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/modify',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/modify',
				],
			},
		},
	},
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/modify',
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
						displayName: 'linkDocumentId',
						name: 'linkDocumentId-string(query)',
						description: 'linkDocumentId - string (query)',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/modify',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/modify',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/modify',
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
				displayName: 'deleteInstances',
				name: 'deleteInstances',
				description: 'deleteInstances - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'deleteInstancesProperties',
						name: 'deleteInstancesProperties',
						values: [
							{
								displayName: 'deleteInstances',
								name: 'deleteInstances',
								description: 'deleteInstances - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'editDescription',
				name: 'editDescription',
				description: 'editDescription - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'suppressInstances',
				name: 'suppressInstances',
				description: 'suppressInstances - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'suppressInstancesProperties',
						name: 'suppressInstancesProperties',
						values: [
							{
								displayName: 'suppressInstances',
								name: 'suppressInstances',
								description: 'suppressInstances - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'transformDefinitions',
				name: 'transformDefinitions',
				description: 'transformDefinitions - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'transformDefinitionsProperties',
						name: 'transformDefinitionsProperties',
						values: [
							{
								displayName: 'transformDefinitions',
								name: 'transformDefinitions',
								description: 'transformDefinitions - object',
								type: 'json',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'unsuppressInstances',
				name: 'unsuppressInstances',
				description: 'unsuppressInstances - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'unsuppressInstancesProperties',
						name: 'unsuppressInstancesProperties',
						values: [
							{
								displayName: 'unsuppressInstances',
								name: 'unsuppressInstances',
								description: 'unsuppressInstances - string',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/modify',
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

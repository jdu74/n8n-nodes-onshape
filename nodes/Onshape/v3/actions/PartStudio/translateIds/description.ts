import { INodeProperties } from "n8n-workflow";

export const TranslateIdsDescription: INodeProperties[] = [
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
					'PartStudio',
				],
				operation: [
					'POST /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/idtranslations',
				],
			},
		},
	},
	{
		displayName: 'wvm',
		name: 'wvm-string(path)',
		description: 'wvm - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'PartStudio',
				],
				operation: [
					'POST /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/idtranslations',
				],
			},
		},
	},
	{
		displayName: 'wvmid',
		name: 'wvmid-string(path)',
		description: 'wvmid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'PartStudio',
				],
				operation: [
					'POST /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/idtranslations',
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
					'PartStudio',
				],
				operation: [
					'POST /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/idtranslations',
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
					'PartStudio',
				],
				operation: [
					'POST /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/idtranslations',
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
					'PartStudio',
				],
				operation: [
					'POST /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/idtranslations',
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
					'PartStudio',
				],
				operation: [
					'POST /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/idtranslations',
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
				displayName: 'ids',
				name: 'ids',
				description: 'ids - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'idsProperties',
						name: 'idsProperties',
						values: [
							{
								displayName: 'ids',
								name: 'ids',
								description: 'ids - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'linkDocumentId',
				name: 'linkDocumentId',
				description: 'linkDocumentId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'sourceConfiguration',
				name: 'sourceConfiguration',
				description: 'sourceConfiguration - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'sourceDocumentMicroversion',
				name: 'sourceDocumentMicroversion',
				description: 'sourceDocumentMicroversion - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'targetConfiguration',
				name: 'targetConfiguration',
				description: 'targetConfiguration - string',
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
					'PartStudio',
				],
				operation: [
					'POST /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/idtranslations',
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

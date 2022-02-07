import { INodeProperties } from "n8n-workflow";

export const createInstanceDescription: INodeProperties[] = [
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/instances',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/instances',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/instances',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/instances',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/instances',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/instances',
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
				name: 'configuration',
				displayName: 'configuration',
				description: 'configuration - string',
				type: 'string',
				default: '',
			},
			{
				name: 'documentId',
				displayName: 'documentId',
				description: 'documentId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'elementId',
				displayName: 'elementId',
				description: 'elementId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'featureId',
				displayName: 'featureId',
				description: 'featureId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'includePartTypes',
				name: 'includePartTypes',
				description: 'includePartTypes - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'includePartTypesProperties',
						name: 'includePartTypesProperties',
						values: [
							{
								name: 'includePartTypes',
								displayName: 'includePartTypes',
								description: 'includePartTypes - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				name: 'isAssembly',
				displayName: 'isAssembly',
				description: 'isAssembly - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'isHidden',
				displayName: 'isHidden',
				description: 'isHidden - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'isSuppressed',
				displayName: 'isSuppressed',
				description: 'isSuppressed - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'isWholePartStudio',
				displayName: 'isWholePartStudio',
				description: 'isWholePartStudio - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'microversionId',
				displayName: 'microversionId',
				description: 'microversionId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'partId',
				displayName: 'partId',
				description: 'partId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'partNumber',
				displayName: 'partNumber',
				description: 'partNumber - string',
				type: 'string',
				default: '',
			},
			{
				name: 'revision',
				displayName: 'revision',
				description: 'revision - string',
				type: 'string',
				default: '',
			},
			{
				name: 'versionId',
				displayName: 'versionId',
				description: 'versionId - string',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/instances',
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

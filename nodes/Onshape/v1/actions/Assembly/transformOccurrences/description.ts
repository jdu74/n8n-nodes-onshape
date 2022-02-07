import { INodeProperties } from "n8n-workflow";

export const transformOccurrencesDescription: INodeProperties[] = [
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
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/occurrencetransforms',
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
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/occurrencetransforms',
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
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/occurrencetransforms',
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
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/occurrencetransforms',
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
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/occurrencetransforms',
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
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/occurrencetransforms',
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
				name: 'isRelative',
				displayName: 'isRelative',
				description: 'isRelative - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'occurrences',
				name: 'occurrences',
				description: 'occurrences - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'occurrencesProperties',
						name: 'occurrencesProperties',
						values: [
							{
								name: 'occurrences',
								displayName: 'occurrences',
								description: 'occurrences - object',
								type: 'json',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'transform',
				name: 'transform',
				description: 'transform - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'transformProperties',
						name: 'transformProperties',
						values: [
							{
								name: 'transform',
								displayName: 'transform',
								description: 'transform - number',
								type: 'number',
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
					'POST /assemblies/d/{did}/w/{wid}/e/{eid}/occurrencetransforms',
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

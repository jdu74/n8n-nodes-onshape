import { INodeProperties } from "n8n-workflow";

export const addFeatureDescription: INodeProperties[] = [
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
					'POST /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
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
					'POST /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
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
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
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
					'POST /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
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
					'POST /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
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
				displayName: 'feature',
				name: 'feature',
				description: 'feature - object',
				type: 'json',
				default: '',
			},
			{
				displayName: 'libraryVersion',
				name: 'libraryVersion',
				description: 'libraryVersion - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'microversionSkew',
				name: 'microversionSkew',
				description: 'microversionSkew - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'rejectMicroversionSkew',
				name: 'rejectMicroversionSkew',
				description: 'rejectMicroversionSkew - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'serializationVersion',
				name: 'serializationVersion',
				description: 'serializationVersion - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'sourceMicroversion',
				name: 'sourceMicroversion',
				description: 'sourceMicroversion - string',
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
					'POST /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
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

import { INodeProperties } from "n8n-workflow";

export const CreateReferenceDescription: INodeProperties[] = [
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references',
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
				displayName: 'hasDocumentMicroversions',
				name: 'hasDocumentMicroversions',
				description: 'hasDocumentMicroversions - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'idTag',
				name: 'idTag',
				description: 'idTag - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'idTagMicroversionId',
				name: 'idTagMicroversionId',
				description: 'idTagMicroversionId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'isLocked',
				name: 'isLocked',
				description: 'isLocked - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'isSketchOnly',
				name: 'isSketchOnly',
				description: 'isSketchOnly - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'parentChangeId',
				name: 'parentChangeId',
				description: 'parentChangeId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'parentViewId',
				name: 'parentViewId',
				description: 'parentViewId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'partNumber',
				name: 'partNumber',
				description: 'partNumber - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'pureSketch',
				name: 'pureSketch',
				description: 'pureSketch - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'referenceType',
				name: 'referenceType',
				description: 'referenceType - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'returnError',
				name: 'returnError',
				description: 'returnError - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'revision',
				name: 'revision',
				description: 'revision - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'sketchIds',
				name: 'sketchIds',
				description: 'sketchIds - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'sketchIdsProperties',
						name: 'sketchIdsProperties',
						values: [
							{
								displayName: 'sketchIds',
								name: 'sketchIds',
								description: 'sketchIds - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'targetConfiguration',
				name: 'targetConfiguration',
				description: 'targetConfiguration - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'targetDocumentId',
				name: 'targetDocumentId',
				description: 'targetDocumentId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'targetElementId',
				name: 'targetElementId',
				description: 'targetElementId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'targetMicroversionId',
				name: 'targetMicroversionId',
				description: 'targetMicroversionId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'targetVersionId',
				name: 'targetVersionId',
				description: 'targetVersionId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'trackNewVersions',
				name: 'trackNewVersions',
				description: 'trackNewVersions - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'transactionId',
				name: 'transactionId',
				description: 'transactionId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'updateSketchInfo',
				name: 'updateSketchInfo',
				description: 'updateSketchInfo - boolean',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references',
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

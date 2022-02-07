import { INodeProperties } from "n8n-workflow";

export const updateReferenceDescription: INodeProperties[] = [
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				],
			},
		},
	},
	{
		name: 'wvm-string(path)',
		displayName: 'wvm',
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
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				],
			},
		},
	},
	{
		name: 'wvmid-string(path)',
		displayName: 'wvmid',
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
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
				],
			},
		},
	},
	{
		name: 'rid-string(path)',
		displayName: 'rid',
		description: 'rid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
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
					'AppElement',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
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
				name: 'hasDocumentMicroversions',
				displayName: 'hasDocumentMicroversions',
				description: 'hasDocumentMicroversions - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'idTag',
				displayName: 'idTag',
				description: 'idTag - string',
				type: 'string',
				default: '',
			},
			{
				name: 'idTagMicroversionId',
				displayName: 'idTagMicroversionId',
				description: 'idTagMicroversionId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'isLocked',
				displayName: 'isLocked',
				description: 'isLocked - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'isSketchOnly',
				displayName: 'isSketchOnly',
				description: 'isSketchOnly - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'parentChangeId',
				displayName: 'parentChangeId',
				description: 'parentChangeId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'parentViewId',
				displayName: 'parentViewId',
				description: 'parentViewId - string',
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
				name: 'pureSketch',
				displayName: 'pureSketch',
				description: 'pureSketch - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'referenceType',
				displayName: 'referenceType',
				description: 'referenceType - integer',
				type: 'number',
				default: 0,
			},
			{
				name: 'returnError',
				displayName: 'returnError',
				description: 'returnError - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'revision',
				displayName: 'revision',
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
								name: 'sketchIds',
								displayName: 'sketchIds',
								description: 'sketchIds - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				name: 'targetConfiguration',
				displayName: 'targetConfiguration',
				description: 'targetConfiguration - string',
				type: 'string',
				default: '',
			},
			{
				name: 'targetDocumentId',
				displayName: 'targetDocumentId',
				description: 'targetDocumentId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'targetElementId',
				displayName: 'targetElementId',
				description: 'targetElementId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'targetMicroversionId',
				displayName: 'targetMicroversionId',
				description: 'targetMicroversionId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'targetVersionId',
				displayName: 'targetVersionId',
				description: 'targetVersionId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'trackNewVersions',
				displayName: 'trackNewVersions',
				description: 'trackNewVersions - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'transactionId',
				displayName: 'transactionId',
				description: 'transactionId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'updateSketchInfo',
				displayName: 'updateSketchInfo',
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
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}',
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

import { INodeProperties } from "n8n-workflow";

export const CreateDrawingAppElementDescription: INodeProperties[] = [
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
					'Drawing',
				],
				operation: [
					'POST /drawings/d/{did}/w/{wid}/create',
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
					'Drawing',
				],
				operation: [
					'POST /drawings/d/{did}/w/{wid}/create',
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
					'Drawing',
				],
				operation: [
					'POST /drawings/d/{did}/w/{wid}/create',
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
					'Drawing',
				],
				operation: [
					'POST /drawings/d/{did}/w/{wid}/create',
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
					'Drawing',
				],
				operation: [
					'POST /drawings/d/{did}/w/{wid}/create',
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
				displayName: 'border',
				name: 'border',
				description: 'border - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'computeIntersection',
				name: 'computeIntersection',
				description: 'computeIntersection - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'decimalSeparator',
				name: 'decimalSeparator',
				description: 'decimalSeparator - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'displayStateId',
				name: 'displayStateId',
				description: 'displayStateId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'documentId',
				name: 'documentId',
				description: 'documentId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'documentMicroversionId',
				name: 'documentMicroversionId',
				description: 'documentMicroversionId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'drawingName',
				name: 'drawingName',
				description: 'drawingName - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'elementConfiguration',
				name: 'elementConfiguration',
				description: 'elementConfiguration - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'elementId',
				name: 'elementId',
				description: 'elementId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'elementMicroversionId',
				name: 'elementMicroversionId',
				description: 'elementMicroversionId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'explosionId',
				name: 'explosionId',
				description: 'explosionId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'externalDocumentId',
				name: 'externalDocumentId',
				description: 'externalDocumentId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'externalDocumentVersionId',
				name: 'externalDocumentVersionId',
				description: 'externalDocumentVersionId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'hiddenLines',
				name: 'hiddenLines',
				description: 'hiddenLines - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'includeSurfaces',
				name: 'includeSurfaces',
				description: 'includeSurfaces - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'includeWires',
				name: 'includeWires',
				description: 'includeWires - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'isFlattenedPart',
				name: 'isFlattenedPart',
				description: 'isFlattenedPart - boolean',
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
				displayName: 'isSurface',
				name: 'isSurface',
				description: 'isSurface - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'language',
				name: 'language',
				description: 'language - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'location',
				name: 'location',
				description: 'location - object',
				type: 'collection',
				default: '',
				placeholder: 'Add Field',
				options: [
					{
						displayName: 'elementId',
						name: 'elementId',
						description: 'elementId - string',
						type: 'string',
						default: '',
					},
					{
						displayName: 'position',
						name: 'position',
						description: 'position - integer',
						type: 'number',
						default: 0,
					},
				],
			},
			{
				displayName: 'modelType',
				name: 'modelType',
				description: 'modelType - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'namedPositionId',
				name: 'namedPositionId',
				description: 'namedPositionId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'numberHorizontalZones',
				name: 'numberHorizontalZones',
				description: 'numberHorizontalZones - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'numberVerticalZones',
				name: 'numberVerticalZones',
				description: 'numberVerticalZones - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'partId',
				name: 'partId',
				description: 'partId - string',
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
				displayName: 'partQuery',
				name: 'partQuery',
				description: 'partQuery - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'projection',
				name: 'projection',
				description: 'projection - string',
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
				displayName: 'qualityOption',
				name: 'qualityOption',
				description: 'qualityOption - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'referenceType',
				name: 'referenceType',
				description: 'referenceType - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'referenceTypeEnum',
				name: 'referenceTypeEnum',
				description: 'referenceTypeEnum - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'revision',
				name: 'revision',
				description: 'revision - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'showCutGeomOnly',
				name: 'showCutGeomOnly',
				description: 'showCutGeomOnly - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'simplificationOption',
				name: 'simplificationOption',
				description: 'simplificationOption - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'simplificationThreshold',
				name: 'simplificationThreshold',
				description: 'simplificationThreshold - number',
				type: 'number',
				default: '',
			},
			{
				displayName: 'size',
				name: 'size',
				description: 'size - string',
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
				displayName: 'standard',
				name: 'standard',
				description: 'standard - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'startZones',
				name: 'startZones',
				description: 'startZones - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'templateArgs',
				name: 'templateArgs',
				description: 'templateArgs - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'templateArgsProperties',
						name: 'templateArgsProperties',
						values: [
							{
								displayName: 'templateArgs',
								name: 'templateArgs',
								description: 'templateArgs - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'templateDocumentId',
				name: 'templateDocumentId',
				description: 'templateDocumentId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'templateElementId',
				name: 'templateElementId',
				description: 'templateElementId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'templateName',
				name: 'templateName',
				description: 'templateName - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'templateVersionId',
				name: 'templateVersionId',
				description: 'templateVersionId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'templateWorkspaceId',
				name: 'templateWorkspaceId',
				description: 'templateWorkspaceId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'titleblock',
				name: 'titleblock',
				description: 'titleblock - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'units',
				name: 'units',
				description: 'units - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'views',
				name: 'views',
				description: 'views - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'workspaceId',
				name: 'workspaceId',
				description: 'workspaceId - string',
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
					'Drawing',
				],
				operation: [
					'POST /drawings/d/{did}/w/{wid}/create',
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
					'Drawing',
				],
				operation: [
					'POST /drawings/d/{did}/w/{wid}/create',
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

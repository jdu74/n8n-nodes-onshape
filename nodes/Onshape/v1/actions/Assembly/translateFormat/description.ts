import { INodeProperties } from "n8n-workflow";

export const translateFormatDescription: INodeProperties[] = [
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
					'POST /assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				],
			},
		},
	},
	{
		name: 'wv-string(path)',
		displayName: 'wv',
		description: 'wv - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				],
			},
		},
	},
	{
		name: 'wvid-string(path)',
		displayName: 'wvid',
		description: 'wvid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Assembly',
				],
				operation: [
					'POST /assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
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
					'POST /assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
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
					'POST /assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
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
					'POST /assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
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
					'POST /assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
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
				name: 'allowFaultyParts',
				displayName: 'allowFaultyParts',
				description: 'allowFaultyParts - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'angularTolerance',
				displayName: 'angularTolerance',
				description: 'angularTolerance - number',
				type: 'number',
				default: '',
			},
			{
				name: 'blobElementId',
				displayName: 'blobElementId',
				description: 'blobElementId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'blobMicroversionId',
				displayName: 'blobMicroversionId',
				description: 'blobMicroversionId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'cloudObjectId',
				displayName: 'cloudObjectId',
				description: 'cloudObjectId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'cloudStorageAccountId',
				displayName: 'cloudStorageAccountId',
				description: 'cloudStorageAccountId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'colorMethod',
				displayName: 'colorMethod',
				description: 'colorMethod - string',
				type: 'string',
				default: '',
			},
			{
				name: 'configuration',
				displayName: 'configuration',
				description: 'configuration - string',
				type: 'string',
				default: '',
			},
			{
				name: 'connectionId',
				displayName: 'connectionId',
				description: 'connectionId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'createComposite',
				displayName: 'createComposite',
				description: 'createComposite - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'currentSheetOnly',
				displayName: 'currentSheetOnly',
				description: 'currentSheetOnly - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'destinationName',
				displayName: 'destinationName',
				description: 'destinationName - string',
				type: 'string',
				default: '',
			},
			{
				name: 'distanceTolerance',
				displayName: 'distanceTolerance',
				description: 'distanceTolerance - number',
				type: 'number',
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
				name: 'emailLink',
				displayName: 'emailLink',
				description: 'emailLink - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'emailMessage',
				displayName: 'emailMessage',
				description: 'emailMessage - string',
				type: 'string',
				default: '',
			},
			{
				name: 'emailSubject',
				displayName: 'emailSubject',
				description: 'emailSubject - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'emailTo',
				name: 'emailTo',
				description: 'emailTo - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'emailToProperties',
						name: 'emailToProperties',
						values: [
							{
								name: 'emailTo',
								displayName: 'emailTo',
								description: 'emailTo - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				name: 'extractAssemblyHierarchy',
				displayName: 'extractAssemblyHierarchy',
				description: 'extractAssemblyHierarchy - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'flatten',
				displayName: 'flatten',
				description: 'flatten - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'flattenAssemblies',
				displayName: 'flattenAssemblies',
				description: 'flattenAssemblies - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'foreignId',
				displayName: 'foreignId',
				description: 'foreignId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'formatName',
				displayName: 'formatName',
				description: 'formatName - string',
				type: 'string',
				default: '',
			},
			{
				name: 'fromUserId',
				displayName: 'fromUserId',
				description: 'fromUserId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'getyAxisIsUp',
				displayName: 'getyAxisIsUp',
				description: 'getyAxisIsUp - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'grouping',
				displayName: 'grouping',
				description: 'grouping - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'imageHeight',
				displayName: 'imageHeight',
				description: 'imageHeight - integer',
				type: 'number',
				default: 0,
			},
			{
				name: 'imageWidth',
				displayName: 'imageWidth',
				description: 'imageWidth - integer',
				type: 'number',
				default: 0,
			},
			{
				name: 'importInBackground',
				displayName: 'importInBackground',
				description: 'importInBackground - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'importWithinDocument',
				displayName: 'importWithinDocument',
				description: 'importWithinDocument - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'includeExportIds',
				displayName: 'includeExportIds',
				description: 'includeExportIds - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'joinAdjacentSurfaces',
				displayName: 'joinAdjacentSurfaces',
				description: 'joinAdjacentSurfaces - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'linkDocumentId',
				displayName: 'linkDocumentId',
				description: 'linkDocumentId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'linkDocumentWorkspaceId',
				displayName: 'linkDocumentWorkspaceId',
				description: 'linkDocumentWorkspaceId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'maximumChordLength',
				displayName: 'maximumChordLength',
				description: 'maximumChordLength - number',
				type: 'number',
				default: '',
			},
			{
				name: 'notifyUser',
				displayName: 'notifyUser',
				description: 'notifyUser - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'onePartPerDoc',
				displayName: 'onePartPerDoc',
				description: 'onePartPerDoc - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'originalForeignId',
				displayName: 'originalForeignId',
				description: 'originalForeignId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'parentId',
				displayName: 'parentId',
				description: 'parentId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'partIds',
				displayName: 'partIds',
				description: 'partIds - string',
				type: 'string',
				default: '',
			},
			{
				name: 'password',
				displayName: 'password',
				description: 'password - string',
				type: 'string',
				default: '',
			},
			{
				name: 'passwordRequired',
				displayName: 'passwordRequired',
				description: 'passwordRequired - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'processedForeignId',
				displayName: 'processedForeignId',
				description: 'processedForeignId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'projectId',
				displayName: 'projectId',
				description: 'projectId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'selectablePdfText',
				displayName: 'selectablePdfText',
				description: 'selectablePdfText - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'sendCopyToMe',
				displayName: 'sendCopyToMe',
				description: 'sendCopyToMe - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'sheetIndices',
				name: 'sheetIndices',
				description: 'sheetIndices - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'sheetIndicesProperties',
						name: 'sheetIndicesProperties',
						values: [
							{
								name: 'sheetIndices',
								displayName: 'sheetIndices',
								description: 'sheetIndices - integer',
								type: 'number',
								default: 0,
							},
						],
					},
				],
			},
			{
				name: 'showOverriddenDimensions',
				displayName: 'showOverriddenDimensions',
				description: 'showOverriddenDimensions - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'sourceName',
				displayName: 'sourceName',
				description: 'sourceName - string',
				type: 'string',
				default: '',
			},
			{
				name: 'specifyUnits',
				displayName: 'specifyUnits',
				description: 'specifyUnits - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'splinesAsPolylines',
				displayName: 'splinesAsPolylines',
				description: 'splinesAsPolylines - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'splitAssembliesIntoMultipleDocuments',
				displayName: 'splitAssembliesIntoMultipleDocuments',
				description: 'splitAssembliesIntoMultipleDocuments - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'stepVersionString',
				displayName: 'stepVersionString',
				description: 'stepVersionString - string',
				type: 'string',
				default: '',
			},
			{
				name: 'storeInDocument',
				displayName: 'storeInDocument',
				description: 'storeInDocument - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'textAsGeometry',
				displayName: 'textAsGeometry',
				description: 'textAsGeometry - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'triggerAutoDownload',
				displayName: 'triggerAutoDownload',
				description: 'triggerAutoDownload - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'unit',
				displayName: 'unit',
				description: 'unit - string',
				type: 'string',
				default: '',
			},
			{
				name: 'uploadId',
				displayName: 'uploadId',
				description: 'uploadId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'validForDays',
				displayName: 'validForDays',
				description: 'validForDays - integer',
				type: 'number',
				default: 0,
			},
			{
				name: 'versionString',
				displayName: 'versionString',
				description: 'versionString - string',
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
					'POST /assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
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

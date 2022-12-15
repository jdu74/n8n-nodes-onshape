import { INodeProperties } from "n8n-workflow";

export const translateFormatDescription: INodeProperties[] = [
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
					'POST /assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				],
			},
		},
	},
	{
		displayName: 'wv',
		name: 'wv-string(path)',
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
		displayName: 'wvid',
		name: 'wvid-string(path)',
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
		default: 'application/json;charset=UTF-8; qs=0.09',
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
					'POST /assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
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
					'POST /assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
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
				displayName: 'allowFaultyParts',
				name: 'allowFaultyParts',
				description: 'allowFaultyParts - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'angularTolerance',
				name: 'angularTolerance',
				description: 'angularTolerance - number',
				type: 'number',
				default: '',
			},
			{
				displayName: 'blobElementId',
				name: 'blobElementId',
				description: 'blobElementId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'blobMicroversionId',
				name: 'blobMicroversionId',
				description: 'blobMicroversionId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'cloudObjectId',
				name: 'cloudObjectId',
				description: 'cloudObjectId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'cloudStorageAccountId',
				name: 'cloudStorageAccountId',
				description: 'cloudStorageAccountId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'colorMethod',
				name: 'colorMethod',
				description: 'colorMethod - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'configuration',
				name: 'configuration',
				description: 'configuration - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'connectionId',
				name: 'connectionId',
				description: 'connectionId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'createComposite',
				name: 'createComposite',
				description: 'createComposite - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'currentSheetOnly',
				name: 'currentSheetOnly',
				description: 'currentSheetOnly - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'destinationName',
				name: 'destinationName',
				description: 'destinationName - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'distanceTolerance',
				name: 'distanceTolerance',
				description: 'distanceTolerance - number',
				type: 'number',
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
				displayName: 'elementIds',
				name: 'elementIds',
				description: 'elementIds - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'elementIdsProperties',
						name: 'elementIdsProperties',
						values: [
							{
								displayName: 'elementIds',
								name: 'elementIds',
								description: 'elementIds - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'emailLink',
				name: 'emailLink',
				description: 'emailLink - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'emailMessage',
				name: 'emailMessage',
				description: 'emailMessage - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'emailSubject',
				name: 'emailSubject',
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
								displayName: 'emailTo',
								name: 'emailTo',
								description: 'emailTo - string',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'extractAssemblyHierarchy',
				name: 'extractAssemblyHierarchy',
				description: 'extractAssemblyHierarchy - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'flatten',
				name: 'flatten',
				description: 'flatten - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'flattenAssemblies',
				name: 'flattenAssemblies',
				description: 'flattenAssemblies - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'foreignId',
				name: 'foreignId',
				description: 'foreignId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'formatName',
				name: 'formatName',
				description: 'formatName - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'fromUserId',
				name: 'fromUserId',
				description: 'fromUserId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'getyAxisIsUp',
				name: 'getyAxisIsUp',
				description: 'getyAxisIsUp - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'grouping',
				name: 'grouping',
				description: 'grouping - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'imageHeight',
				name: 'imageHeight',
				description: 'imageHeight - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'imageWidth',
				name: 'imageWidth',
				description: 'imageWidth - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'importInBackground',
				name: 'importInBackground',
				description: 'importInBackground - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'importWithinDocument',
				name: 'importWithinDocument',
				description: 'importWithinDocument - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'includeExportIds',
				name: 'includeExportIds',
				description: 'includeExportIds - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'joinAdjacentSurfaces',
				name: 'joinAdjacentSurfaces',
				description: 'joinAdjacentSurfaces - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'level',
				name: 'level',
				description: 'level - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'linkDocumentId',
				name: 'linkDocumentId',
				description: 'linkDocumentId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'linkDocumentWorkspaceId',
				name: 'linkDocumentWorkspaceId',
				description: 'linkDocumentWorkspaceId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'maximumChordLength',
				name: 'maximumChordLength',
				description: 'maximumChordLength - number',
				type: 'number',
				default: '',
			},
			{
				displayName: 'notifyUser',
				name: 'notifyUser',
				description: 'notifyUser - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'onePartPerDoc',
				name: 'onePartPerDoc',
				description: 'onePartPerDoc - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'originalForeignId',
				name: 'originalForeignId',
				description: 'originalForeignId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'parentId',
				name: 'parentId',
				description: 'parentId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'partIds',
				name: 'partIds',
				description: 'partIds - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'password',
				name: 'password',
				description: 'password - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'passwordRequired',
				name: 'passwordRequired',
				description: 'passwordRequired - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'processedForeignId',
				name: 'processedForeignId',
				description: 'processedForeignId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'projectId',
				name: 'projectId',
				description: 'projectId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'proxyDocumentId',
				name: 'proxyDocumentId',
				description: 'proxyDocumentId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'proxyElementId',
				name: 'proxyElementId',
				description: 'proxyElementId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'proxyWorkspaceVersion',
				name: 'proxyWorkspaceVersion',
				description: 'proxyWorkspaceVersion - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'proxyWorkspaceVersionId',
				name: 'proxyWorkspaceVersionId',
				description: 'proxyWorkspaceVersionId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'selectablePdfText',
				name: 'selectablePdfText',
				description: 'selectablePdfText - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'sendCopyToMe',
				name: 'sendCopyToMe',
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
								displayName: 'sheetIndices',
								name: 'sheetIndices',
								description: 'sheetIndices - integer',
								type: 'number',
								default: 0,
							},
						],
					},
				],
			},
			{
				displayName: 'showOverriddenDimensions',
				name: 'showOverriddenDimensions',
				description: 'showOverriddenDimensions - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'sourceName',
				name: 'sourceName',
				description: 'sourceName - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'specifyUnits',
				name: 'specifyUnits',
				description: 'specifyUnits - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'splinesAsPolylines',
				name: 'splinesAsPolylines',
				description: 'splinesAsPolylines - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'splitAssembliesIntoMultipleDocuments',
				name: 'splitAssembliesIntoMultipleDocuments',
				description: 'splitAssembliesIntoMultipleDocuments - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'stepVersionString',
				name: 'stepVersionString',
				description: 'stepVersionString - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'storeInDocument',
				name: 'storeInDocument',
				description: 'storeInDocument - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'textAsGeometry',
				name: 'textAsGeometry',
				description: 'textAsGeometry - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'triggerAutoDownload',
				name: 'triggerAutoDownload',
				description: 'triggerAutoDownload - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'unit',
				name: 'unit',
				description: 'unit - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'uploadId',
				name: 'uploadId',
				description: 'uploadId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'validForDays',
				name: 'validForDays',
				description: 'validForDays - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'versionString',
				name: 'versionString',
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
					'application/json;charset=UTF-8; qs=0.09',
				],
			},
		},
	},
];

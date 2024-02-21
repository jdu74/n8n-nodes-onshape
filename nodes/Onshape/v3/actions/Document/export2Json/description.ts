import { INodeProperties } from "n8n-workflow";

export const Export2JsonDescription: INodeProperties[] = [
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
					'Document',
				],
				operation: [
					'POST /documents/d/{did}/{wv}/{wvid}/e/{eid}/export',
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
					'Document',
				],
				operation: [
					'POST /documents/d/{did}/{wv}/{wvid}/e/{eid}/export',
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
					'Document',
				],
				operation: [
					'POST /documents/d/{did}/{wv}/{wvid}/e/{eid}/export',
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
					'Document',
				],
				operation: [
					'POST /documents/d/{did}/{wv}/{wvid}/e/{eid}/export',
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
					'Document',
				],
				operation: [
					'POST /documents/d/{did}/{wv}/{wvid}/e/{eid}/export',
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
		type: 'hidden',
		default: 'application/json;charset=UTF-8; qs=0.09',
		displayOptions: {
			show: {
				resource: [
					'Document',
				],
				operation: [
					'POST /documents/d/{did}/{wv}/{wvid}/e/{eid}/export',
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
					'Document',
				],
				operation: [
					'POST /documents/d/{did}/{wv}/{wvid}/e/{eid}/export',
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
					'Document',
				],
				operation: [
					'POST /documents/d/{did}/{wv}/{wvid}/e/{eid}/export',
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
				displayName: 'angleTolerance',
				name: 'angleTolerance',
				description: 'angleTolerance - number',
				type: 'number',
				default: '',
			},
			{
				displayName: 'batchAllFlatPatterns',
				name: 'batchAllFlatPatterns',
				description: 'batchAllFlatPatterns - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'batchFlatPatterns',
				name: 'batchFlatPatterns',
				description: 'batchFlatPatterns - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'chordTolerance',
				name: 'chordTolerance',
				description: 'chordTolerance - number',
				type: 'number',
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
				displayName: 'configuration',
				name: 'configuration',
				description: 'configuration - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'destinationName',
				name: 'destinationName',
				description: 'destinationName - string',
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
				displayName: 'documentVersionId',
				name: 'documentVersionId',
				description: 'documentVersionId - string',
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
				displayName: 'elementIds',
				name: 'elementIds',
				description: 'elementIds - string',
				type: 'string',
				default: '',
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
				description: 'emailTo - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'featureIds',
				name: 'featureIds',
				description: 'featureIds - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'flatten',
				name: 'flatten',
				description: 'flatten - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'format',
				name: 'format',
				description: 'format - string',
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
				displayName: 'grouping',
				name: 'grouping',
				description: 'grouping - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ignoreExportRulesForContents',
				name: 'ignoreExportRulesForContents',
				description: 'ignoreExportRulesForContents - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'includeBendCenterlines',
				name: 'includeBendCenterlines',
				description: 'includeBendCenterlines - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'includeBendLines',
				name: 'includeBendLines',
				description: 'includeBendLines - boolean',
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
				displayName: 'includeSketches',
				name: 'includeSketches',
				description: 'includeSketches - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'isPartingOut',
				name: 'isPartingOut',
				description: 'isPartingOut - boolean',
				type: 'boolean',
				default: false,
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
				displayName: 'maxFacetWidth',
				name: 'maxFacetWidth',
				description: 'maxFacetWidth - number',
				type: 'number',
				default: '',
			},
			{
				displayName: 'microversion',
				name: 'microversion',
				description: 'microversion - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'minFacetWidth',
				name: 'minFacetWidth',
				description: 'minFacetWidth - number',
				type: 'number',
				default: '',
			},
			{
				displayName: 'mode',
				name: 'mode',
				description: 'mode - string',
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
				displayName: 'partQuery',
				name: 'partQuery',
				description: 'partQuery - string',
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
				displayName: 'resolution',
				name: 'resolution',
				description: 'resolution - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'scale',
				name: 'scale',
				description: 'scale - number',
				type: 'number',
				default: '',
			},
			{
				displayName: 'sendCopyToMe',
				name: 'sendCopyToMe',
				description: 'sendCopyToMe - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'sheetMetalFlat',
				name: 'sheetMetalFlat',
				description: 'sheetMetalFlat - boolean',
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
				displayName: 'storeInDocument',
				name: 'storeInDocument',
				description: 'storeInDocument - boolean',
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
				displayName: 'units',
				name: 'units',
				description: 'units - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'useYAxisAsUp',
				name: 'useYAxisAsUp',
				description: 'useYAxisAsUp - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'userId',
				name: 'userId',
				description: 'userId - string',
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
				displayName: 'version',
				name: 'version',
				description: 'version - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'view',
				name: 'view',
				description: 'view - string',
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
			{
				displayName: 'zipSingleFileOutput',
				name: 'zipSingleFileOutput',
				description: 'zipSingleFileOutput - boolean',
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
					'Document',
				],
				operation: [
					'POST /documents/d/{did}/{wv}/{wvid}/e/{eid}/export',
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
					'Document',
				],
				operation: [
					'POST /documents/d/{did}/{wv}/{wvid}/e/{eid}/export',
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

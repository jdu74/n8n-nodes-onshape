import { INodeProperties } from "n8n-workflow";

export const createTranslationDescription: INodeProperties[] = [
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
					'Translation',
				],
				operation: [
					'POST /api/translations/d/{did}/w/{wid}',
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
					'Translation',
				],
				operation: [
					'POST /api/translations/d/{did}/w/{wid}',
				],
			},
		},
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		description: 'JSON Content-Type',
		type: 'options',
		default: 'multipart/form-data',
		displayOptions: {
			show: {
				resource: [
					'Translation',
				],
				operation: [
					'POST /api/translations/d/{did}/w/{wid}',
				],
			},
		},
		options: [
			{
				name: 'multipart/form-data',
				value: 'multipart/form-data',
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
					'Translation',
				],
				operation: [
					'POST /api/translations/d/{did}/w/{wid}',
				],
				jsonContentType: [
					'multipart/form-data',
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
					'Translation',
				],
				operation: [
					'POST /api/translations/d/{did}/w/{wid}',
				],
				jsonParameters: [
					false,
				],
				jsonContentType: [
					'multipart/form-data',
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
				name: 'createComposite',
				displayName: 'createComposite',
				description: 'createComposite - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'createDrawingIfPossible',
				displayName: 'createDrawingIfPossible',
				description: 'createDrawingIfPossible - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'encodedFilename',
				displayName: 'encodedFilename',
				description: 'encodedFilename - string',
				type: 'string',
				default: '',
			},
			{
				name: 'extractAssemblyHierarchy',
				displayName: 'extractAssemblyHierarchy',
				description: 'extractAssemblyHierarchy - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'file',
				name: 'file',
				description: 'file - object',
				type: 'collection',
				default: '',
				placeholder: 'Add Field',
				options: [
					{
						name: 'type',
						displayName: 'type',
						description: 'type - string',
						type: 'string',
						default: '',
					},
					{
						name: 'parameters',
						displayName: 'parameters',
						description: 'parameters - object',
						type: 'json',
						default: '',
					},
					{
						name: 'fileName',
						displayName: 'fileName',
						description: 'fileName - string',
						type: 'string',
						default: '',
					},
					{
						name: 'creationDate',
						displayName: 'creationDate',
						description: 'creationDate - string',
						type: 'string',
						default: '',
					},
					{
						name: 'modificationDate',
						displayName: 'modificationDate',
						description: 'modificationDate - string',
						type: 'string',
						default: '',
					},
					{
						name: 'readDate',
						displayName: 'readDate',
						description: 'readDate - string',
						type: 'string',
						default: '',
					},
					{
						name: 'size',
						displayName: 'size',
						description: 'size - integer',
						type: 'number',
						default: 0,
					},
					{
						name: 'name',
						displayName: 'name',
						description: 'name - string',
						type: 'string',
						default: '',
					},
				],
			},
			{
				name: 'fileContentLength',
				displayName: 'fileContentLength',
				description: 'fileContentLength - integer',
				type: 'number',
				default: -1,
			},
			{
				name: 'flattenAssemblies',
				displayName: 'flattenAssemblies',
				description: 'flattenAssemblies - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'formatName',
				displayName: 'formatName',
				description: 'formatName - string',
				type: 'string',
				default: '',
			},
			{
				name: 'joinAdjacentSurfaces',
				displayName: 'joinAdjacentSurfaces',
				description: 'joinAdjacentSurfaces - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'locationElementId',
				displayName: 'locationElementId',
				description: 'locationElementId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'locationGroupId',
				displayName: 'locationGroupId',
				description: 'locationGroupId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'locationPosition',
				displayName: 'locationPosition',
				description: 'locationPosition - integer',
				type: 'number',
				default: -1,
			},
			{
				name: 'notifyUser',
				displayName: 'notifyUser',
				description: 'notifyUser - boolean',
				type: 'boolean',
				default: true,
			},
			{
				name: 'ownerId',
				displayName: 'ownerId',
				description: 'ownerId - string',
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
				name: 'projectId',
				displayName: 'projectId',
				description: 'projectId - string',
				type: 'string',
				default: '',
			},
			{
				name: 'public',
				displayName: 'public',
				description: 'public - boolean',
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
				name: 'splitAssembliesIntoMultipleDocuments',
				displayName: 'splitAssembliesIntoMultipleDocuments',
				description: 'splitAssembliesIntoMultipleDocuments - boolean',
				type: 'boolean',
				default: false,
			},
			{
				name: 'storeInDocument',
				displayName: 'storeInDocument',
				description: 'storeInDocument - boolean',
				type: 'boolean',
				default: true,
			},
			{
				name: 'translate',
				displayName: 'translate',
				description: 'translate - boolean',
				type: 'boolean',
				default: true,
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
				name: 'versionString',
				displayName: 'versionString',
				description: 'versionString - string',
				type: 'string',
				default: '',
			},
			{
				name: 'yAxisIsUp',
				displayName: 'yAxisIsUp',
				description: 'yAxisIsUp - boolean',
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
					'Translation',
				],
				operation: [
					'POST /api/translations/d/{did}/w/{wid}',
				],
				jsonParameters: [
					true,
				],
				jsonContentType: [
					'multipart/form-data',
				],
			},
		},
	},
];

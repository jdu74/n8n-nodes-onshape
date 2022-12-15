import { INodeProperties } from "n8n-workflow";

export const uploadFileCreateElementDescription: INodeProperties[] = [
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
					'BlobElement',
				],
				operation: [
					'POST /blobelements/d/{did}/w/{wid}',
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
					'BlobElement',
				],
				operation: [
					'POST /blobelements/d/{did}/w/{wid}',
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
					'BlobElement',
				],
				operation: [
					'POST /blobelements/d/{did}/w/{wid}',
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
					'BlobElement',
				],
				operation: [
					'POST /blobelements/d/{did}/w/{wid}',
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
					'BlobElement',
				],
				operation: [
					'POST /blobelements/d/{did}/w/{wid}',
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
				displayName: 'file',
				name: 'file',
				description: 'file - object',
				type: 'json',
				default: '',
			},
			{
				displayName: 'allowFaultyParts',
				name: 'allowFaultyParts',
				description: 'allowFaultyParts - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'createComposite',
				name: 'createComposite',
				description: 'createComposite - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'createDrawingIfPossible',
				name: 'createDrawingIfPossible',
				description: 'createDrawingIfPossible - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'encodedFilename',
				name: 'encodedFilename',
				description: 'encodedFilename - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'extractAssemblyHierarchy',
				name: 'extractAssemblyHierarchy',
				description: 'extractAssemblyHierarchy - boolean',
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
				displayName: 'formatName',
				name: 'formatName',
				description: 'formatName - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'joinAdjacentSurfaces',
				name: 'joinAdjacentSurfaces',
				description: 'joinAdjacentSurfaces - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'locationElementId',
				name: 'locationElementId',
				description: 'locationElementId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'locationGroupId',
				name: 'locationGroupId',
				description: 'locationGroupId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'locationPosition',
				name: 'locationPosition',
				description: 'locationPosition - integer',
				type: 'number',
				default: -1,
			},
			{
				displayName: 'notifyUser',
				name: 'notifyUser',
				description: 'notifyUser - boolean',
				type: 'boolean',
				default: true,
			},
			{
				displayName: 'ownerId',
				name: 'ownerId',
				description: 'ownerId - string',
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
				displayName: 'projectId',
				name: 'projectId',
				description: 'projectId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'public',
				name: 'public',
				description: 'public - boolean',
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
				displayName: 'splitAssembliesIntoMultipleDocuments',
				name: 'splitAssembliesIntoMultipleDocuments',
				description: 'splitAssembliesIntoMultipleDocuments - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'storeInDocument',
				name: 'storeInDocument',
				description: 'storeInDocument - boolean',
				type: 'boolean',
				default: true,
			},
			{
				displayName: 'translate',
				name: 'translate',
				description: 'translate - boolean',
				type: 'boolean',
				default: true,
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
				displayName: 'versionString',
				name: 'versionString',
				description: 'versionString - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'yAxisIsUp',
				name: 'yAxisIsUp',
				description: 'yAxisIsUp - boolean',
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
					'BlobElement',
				],
				operation: [
					'POST /blobelements/d/{did}/w/{wid}',
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

import { INodeProperties } from "n8n-workflow";

export const UpdatePublicationAttributesDescription: INodeProperties[] = [
	{
		displayName: 'pid',
		name: 'pid-string(path)',
		description: 'pid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Publication',
				],
				operation: [
					'POST /publications/{pid}',
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
					'Publication',
				],
				operation: [
					'POST /publications/{pid}',
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
					'Publication',
				],
				operation: [
					'POST /publications/{pid}',
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
					'Publication',
				],
				operation: [
					'POST /publications/{pid}',
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
				displayName: 'description',
				name: 'description',
				description: 'description - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'items',
				name: 'items',
				description: 'items - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'itemsProperties',
						name: 'itemsProperties',
						values: [
							{
								displayName: 'items',
								name: 'items',
								description: 'items - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
									{
										displayName: 'dataType',
										name: 'dataType',
										description: 'dataType - string',
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
										displayName: 'elementId',
										name: 'elementId',
										description: 'elementId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'encodedConfiguration',
										name: 'encodedConfiguration',
										description: 'encodedConfiguration - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'isApplication',
										name: 'isApplication',
										description: 'isApplication - boolean',
										type: 'boolean',
										default: false,
									},
									{
										displayName: 'isAssembly',
										name: 'isAssembly',
										description: 'isAssembly - boolean',
										type: 'boolean',
										default: false,
									},
									{
										displayName: 'isBlob',
										name: 'isBlob',
										description: 'isBlob - boolean',
										type: 'boolean',
										default: false,
									},
									{
										displayName: 'isWholePartStudio',
										name: 'isWholePartStudio',
										description: 'isWholePartStudio - boolean',
										type: 'boolean',
										default: false,
									},
									{
										displayName: 'mimeType',
										name: 'mimeType',
										description: 'mimeType - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'partId',
										name: 'partId',
										description: 'partId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'partName',
										name: 'partName',
										description: 'partName - string',
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
										displayName: 'revision',
										name: 'revision',
										description: 'revision - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'revisionId',
										name: 'revisionId',
										description: 'revisionId - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'versionId',
										name: 'versionId',
										description: 'versionId - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
				],
			},
			{
				displayName: 'name',
				name: 'name',
				description: 'name - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'notes',
				name: 'notes',
				description: 'notes - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ownerId',
				name: 'ownerId',
				description: 'ownerId - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ownerType',
				name: 'ownerType',
				description: 'ownerType - integer',
				type: 'number',
				default: 0,
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
					'Publication',
				],
				operation: [
					'POST /publications/{pid}',
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
					'Publication',
				],
				operation: [
					'POST /publications/{pid}',
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

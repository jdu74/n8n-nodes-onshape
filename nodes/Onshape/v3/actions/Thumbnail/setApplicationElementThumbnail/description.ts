import { INodeProperties } from "n8n-workflow";

export const SetApplicationElementThumbnailDescription: INodeProperties[] = [
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
					'Thumbnail',
				],
				operation: [
					'POST /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
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
					'Thumbnail',
				],
				operation: [
					'POST /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
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
					'Thumbnail',
				],
				operation: [
					'POST /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
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
					'Thumbnail',
				],
				operation: [
					'POST /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
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
					'Thumbnail',
				],
				operation: [
					'POST /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
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
					{
						displayName: 'overwrite',
						name: 'overwrite-boolean(query)',
						description: 'overwrite - boolean (query)',
						type: 'boolean',
						default: false,
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
					'Thumbnail',
				],
				operation: [
					'POST /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
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
					'Thumbnail',
				],
				operation: [
					'POST /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
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
					'Thumbnail',
				],
				operation: [
					'POST /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
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
				displayName: 'thumbnails',
				name: 'thumbnails',
				description: 'thumbnails - array',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: '',
				options: [
					{
						displayName: 'thumbnailsProperties',
						name: 'thumbnailsProperties',
						values: [
							{
								displayName: 'thumbnails',
								name: 'thumbnails',
								description: 'thumbnails - object',
								type: 'collection',
								default: '',
								placeholder: 'Add Field',
								options: [
									{
										displayName: 'base64EncodedImage',
										name: 'base64EncodedImage',
										description: 'base64EncodedImage - string',
										type: 'string',
										default: '',
									},
									{
										displayName: 'description',
										name: 'description',
										description: 'description - string',
										type: 'string',
										default: '',
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
										displayName: 'isPrimary',
										name: 'isPrimary',
										description: 'isPrimary - boolean',
										type: 'boolean',
										default: false,
									},
									{
										displayName: 'uniqueId',
										name: 'uniqueId',
										description: 'uniqueId - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
				],
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
					'Thumbnail',
				],
				operation: [
					'POST /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
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
					'Thumbnail',
				],
				operation: [
					'POST /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
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

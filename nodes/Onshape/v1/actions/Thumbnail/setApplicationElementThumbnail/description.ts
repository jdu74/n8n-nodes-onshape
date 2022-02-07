import { INodeProperties } from "n8n-workflow";

export const setApplicationElementThumbnailDescription: INodeProperties[] = [
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
					'Thumbnail',
				],
				operation: [
					'POST /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
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
					'Thumbnail',
				],
				operation: [
					'POST /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
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
					'Thumbnail',
				],
				operation: [
					'POST /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}',
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
				name: 'metadataValues',
				displayName: 'Metadata',
				default: '',
				values: [
					{
						name: 'overwrite-boolean(query)',
						displayName: 'overwrite',
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
		type: 'options',
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
			{
				name: 'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
				value: 'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
			},
			{
				name: 'application/vnd.onshape.v1+json;charset=UTF-8;qs=0.1',
				value: 'application/vnd.onshape.v1+json;charset=UTF-8;qs=0.1',
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
					'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
					'application/vnd.onshape.v1+json;charset=UTF-8;qs=0.1',
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
					'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
					'application/vnd.onshape.v1+json;charset=UTF-8;qs=0.1',
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
										name: 'imageWidth',
										displayName: 'imageWidth',
										description: 'imageWidth - integer',
										type: 'number',
										default: 0,
									},
									{
										name: 'imageHeight',
										displayName: 'imageHeight',
										description: 'imageHeight - integer',
										type: 'number',
										default: 0,
									},
									{
										name: 'description',
										displayName: 'description',
										description: 'description - string',
										type: 'string',
										default: '',
									},
									{
										name: 'isPrimary',
										displayName: 'isPrimary',
										description: 'isPrimary - boolean',
										type: 'boolean',
										default: false,
									},
									{
										name: 'uniqueId',
										displayName: 'uniqueId',
										description: 'uniqueId - string',
										type: 'string',
										default: '',
									},
									{
										name: 'base64EncodedImage',
										displayName: 'base64EncodedImage',
										description: 'base64EncodedImage - string',
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
					'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
					'application/vnd.onshape.v1+json;charset=UTF-8;qs=0.1',
				],
			},
		},
	},
];

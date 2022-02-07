import { INodeProperties } from "n8n-workflow";

export const updateVEOPStandardContentPartMetadataDescription: INodeProperties[] = [
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
					'Metadata',
				],
				operation: [
					'POST /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
				],
			},
		},
	},
	{
		name: 'vid-string(path)',
		displayName: 'vid',
		description: 'vid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Metadata',
				],
				operation: [
					'POST /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
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
					'Metadata',
				],
				operation: [
					'POST /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
				],
			},
		},
	},
	{
		name: 'otype-string(path)',
		displayName: 'otype',
		description: 'otype - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Metadata',
				],
				operation: [
					'POST /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
				],
			},
		},
	},
	{
		name: 'oid-string(path)',
		displayName: 'oid',
		description: 'oid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Metadata',
				],
				operation: [
					'POST /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
				],
			},
		},
	},
	{
		name: 'pid-string(path)',
		displayName: 'pid',
		description: 'pid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Metadata',
				],
				operation: [
					'POST /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
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
					'Metadata',
				],
				operation: [
					'POST /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
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
						name: 'linkDocumentId-string(query)',
						displayName: 'linkDocumentId',
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
		type: 'options',
		default: 'application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2',
		displayOptions: {
			show: {
				resource: [
					'Metadata',
				],
				operation: [
					'POST /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
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
					'Metadata',
				],
				operation: [
					'POST /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}',
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

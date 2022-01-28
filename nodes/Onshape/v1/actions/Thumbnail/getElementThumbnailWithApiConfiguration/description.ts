import { INodeProperties } from "n8n-workflow";

export const getElementThumbnailWithApiConfigurationDescription: INodeProperties[] = [
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
					'GET /api/thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}',
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
					'Thumbnail',
				],
				operation: [
					'GET /api/thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}',
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
					'GET /api/thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}',
				],
			},
		},
	},
	{
		name: 'cid-string(path)',
		displayName: 'cid',
		description: 'cid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Thumbnail',
				],
				operation: [
					'GET /api/thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}',
				],
			},
		},
	},
	{
		name: 'sz-string(path)',
		displayName: 'sz',
		description: 'sz - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Thumbnail',
				],
				operation: [
					'GET /api/thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}',
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
					'GET /api/thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}',
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
						name: 't-string(query)',
						displayName: 't',
						description: 't - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'rejectEmpty-boolean(query)',
						displayName: 'rejectEmpty',
						description: 'rejectEmpty - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'requireConfigMatch-boolean(query)',
						displayName: 'requireConfigMatch',
						description: 'requireConfigMatch - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

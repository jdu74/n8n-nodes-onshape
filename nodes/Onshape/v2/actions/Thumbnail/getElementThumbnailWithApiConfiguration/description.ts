import { INodeProperties } from "n8n-workflow";

export const getElementThumbnailWithApiConfigurationDescription: INodeProperties[] = [
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
					'GET /thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}',
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
					'Thumbnail',
				],
				operation: [
					'GET /thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}',
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
					'GET /thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}',
				],
			},
		},
	},
	{
		displayName: 'cid',
		name: 'cid-string(path)',
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
					'GET /thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}',
				],
			},
		},
	},
	{
		displayName: 'sz',
		name: 'sz-string(path)',
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
					'GET /thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}',
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
					'GET /thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}',
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
						displayName: 't',
						name: 't-string(query)',
						description: 't - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'rejectEmpty',
						name: 'rejectEmpty-boolean(query)',
						description: 'rejectEmpty - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'requireConfigMatch',
						name: 'requireConfigMatch-boolean(query)',
						description: 'requireConfigMatch - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

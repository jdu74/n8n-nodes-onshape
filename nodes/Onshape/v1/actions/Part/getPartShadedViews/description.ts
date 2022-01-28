import { INodeProperties } from "n8n-workflow";

export const getPartShadedViewsDescription: INodeProperties[] = [
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
					'Part',
				],
				operation: [
					'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/shadedviews',
				],
			},
		},
	},
	{
		name: 'wvm-string(path)',
		displayName: 'wvm',
		description: 'wvm - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Part',
				],
				operation: [
					'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/shadedviews',
				],
			},
		},
	},
	{
		name: 'wvmid-string(path)',
		displayName: 'wvmid',
		description: 'wvmid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Part',
				],
				operation: [
					'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/shadedviews',
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
					'Part',
				],
				operation: [
					'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/shadedviews',
				],
			},
		},
	},
	{
		name: 'partid-string(path)',
		displayName: 'partid',
		description: 'partid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Part',
				],
				operation: [
					'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/shadedviews',
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
					'Part',
				],
				operation: [
					'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/shadedviews',
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
						name: 'viewMatrix-string(query)',
						displayName: 'viewMatrix',
						description: 'viewMatrix - string (query)',
						type: 'string',
						default: 'front',
					},
					{
						name: 'outputHeight-integer(query)',
						displayName: 'outputHeight',
						description: 'outputHeight - integer (query)',
						type: 'number',
						default: 500,
					},
					{
						name: 'outputWidth-integer(query)',
						displayName: 'outputWidth',
						description: 'outputWidth - integer (query)',
						type: 'number',
						default: 500,
					},
					{
						name: 'pixelSize-number(query)',
						displayName: 'pixelSize',
						description: 'pixelSize - number (query)',
						type: 'number',
						default: 0.003,
					},
					{
						name: 'edges-string(query)',
						displayName: 'edges',
						description: 'edges - string (query)',
						type: 'string',
						default: 'show',
					},
					{
						name: 'useAntiAliasing-boolean(query)',
						displayName: 'useAntiAliasing',
						description: 'useAntiAliasing - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'configuration-string(query)',
						displayName: 'configuration',
						description: 'configuration - string (query)',
						type: 'string',
						default: '',
					},
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
];

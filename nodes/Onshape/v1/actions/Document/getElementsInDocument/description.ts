import { INodeProperties } from "n8n-workflow";

export const getElementsInDocumentDescription: INodeProperties[] = [
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
					'Document',
				],
				operation: [
					'GET /api/documents/d/{did}/{wvm}/{wvmid}/elements',
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
					'Document',
				],
				operation: [
					'GET /api/documents/d/{did}/{wvm}/{wvmid}/elements',
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
					'Document',
				],
				operation: [
					'GET /api/documents/d/{did}/{wvm}/{wvmid}/elements',
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
					'GET /api/documents/d/{did}/{wvm}/{wvmid}/elements',
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
						name: 'elementType-string(query)',
						displayName: 'elementType',
						description: 'elementType - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'elementId-string(query)',
						displayName: 'elementId',
						description: 'elementId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'withThumbnails-boolean(query)',
						displayName: 'withThumbnails',
						description: 'withThumbnails - boolean (query)',
						type: 'boolean',
						default: false,
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

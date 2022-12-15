import { INodeProperties } from "n8n-workflow";

export const getVariablesDescription: INodeProperties[] = [
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
					'Variables',
				],
				operation: [
					'GET /variables/d/{did}/{wv}/{wvid}/e/{eid}/variables',
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
					'Variables',
				],
				operation: [
					'GET /variables/d/{did}/{wv}/{wvid}/e/{eid}/variables',
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
					'Variables',
				],
				operation: [
					'GET /variables/d/{did}/{wv}/{wvid}/e/{eid}/variables',
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
					'Variables',
				],
				operation: [
					'GET /variables/d/{did}/{wv}/{wvid}/e/{eid}/variables',
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
					'Variables',
				],
				operation: [
					'GET /variables/d/{did}/{wv}/{wvid}/e/{eid}/variables',
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
						displayName: 'configuration',
						name: 'configuration-string(query)',
						description: 'configuration - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'includeValuesAndReferencedVariables',
						name: 'includeValuesAndReferencedVariables-boolean(query)',
						description: 'includeValuesAndReferencedVariables - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

import { INodeProperties } from "n8n-workflow";

export const getDocumentTranslationsDescription: INodeProperties[] = [
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
					'Translation',
				],
				operation: [
					'GET /translations/d/{did}',
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
					'Translation',
				],
				operation: [
					'GET /translations/d/{did}',
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
						displayName: 'offset',
						name: 'offset-integer(query)',
						description: 'offset - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						displayName: 'limit',
						name: 'limit-integer(query)',
						description: 'limit - integer (query)',
						type: 'number',
						default: 20,
					},
				],
			},
		],
	},
];

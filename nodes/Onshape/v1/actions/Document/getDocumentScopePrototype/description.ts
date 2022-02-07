import { INodeProperties } from "n8n-workflow";

export const getDocumentScopePrototypeDescription: INodeProperties[] = [
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
					'GET /documents/{did}/scope',
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
					'GET /documents/{did}/scope',
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
						displayName: 'scopedElements',
						name: 'scopedElements-array(query)',
						description: 'scopedElements - array (query)',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'scopedElementsProperties',
								name: 'scopedElementsProperties',
								values: [
									{
										name: 'scopedElements',
										displayName: 'scopedElements',
										description: 'scopedElements - string',
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
];

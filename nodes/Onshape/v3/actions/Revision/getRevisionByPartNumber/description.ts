import { INodeProperties } from "n8n-workflow";

export const GetRevisionByPartNumberDescription: INodeProperties[] = [
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
					'Revision',
				],
				operation: [
					'GET /revisions/c/{cid}/partnumber/{pnum}',
				],
			},
		},
	},
	{
		displayName: 'pnum',
		name: 'pnum-string(path)',
		description: 'pnum - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Revision',
				],
				operation: [
					'GET /revisions/c/{cid}/partnumber/{pnum}',
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
					'Revision',
				],
				operation: [
					'GET /revisions/c/{cid}/partnumber/{pnum}',
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
						displayName: 'revision',
						name: 'revision-string(query)',
						description: 'revision - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'elementType',
						name: 'elementType-integer(query)',
						description: 'elementType - integer (query)',
						type: 'number',
						default: 0,
					},
				],
			},
		],
	},
];

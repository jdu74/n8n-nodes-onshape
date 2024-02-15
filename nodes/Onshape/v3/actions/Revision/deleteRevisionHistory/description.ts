import { INodeProperties } from "n8n-workflow";

export const DeleteRevisionHistoryDescription: INodeProperties[] = [
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
					'DELETE /revisions/companies/{cid}/partnumber/{pnum}/elementType/{et}',
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
					'DELETE /revisions/companies/{cid}/partnumber/{pnum}/elementType/{et}',
				],
			},
		},
	},
	{
		displayName: 'et',
		name: 'et-string(path)',
		description: 'et - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Revision',
				],
				operation: [
					'DELETE /revisions/companies/{cid}/partnumber/{pnum}/elementType/{et}',
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
					'DELETE /revisions/companies/{cid}/partnumber/{pnum}/elementType/{et}',
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
						displayName: 'ignoreLinkedDocuments',
						name: 'ignoreLinkedDocuments-boolean(query)',
						description: 'ignoreLinkedDocuments - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

import { INodeProperties } from "n8n-workflow";

export const deleteRevisionHistoryDescription: INodeProperties[] = [
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
					'Revision',
				],
				operation: [
					'DELETE /revisions/companies/{cid}/partnumber/{pnum}/elementType/{et}',
				],
			},
		},
	},
	{
		name: 'pnum-string(path)',
		displayName: 'pnum',
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
		name: 'et-string(path)',
		displayName: 'et',
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
				name: 'metadataValues',
				displayName: 'Metadata',
				default: '',
				values: [
					{
						name: 'ignoreLinkedDocuments-boolean(query)',
						displayName: 'ignoreLinkedDocuments',
						description: 'ignoreLinkedDocuments - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

import { INodeProperties } from "n8n-workflow";

export const getRevisionHistoryInCompanyByPartNumberDescription: INodeProperties[] = [
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
					'GET /revisions/companies/{cid}/partnumber/{pnum}',
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
					'GET /revisions/companies/{cid}/partnumber/{pnum}',
				],
			},
		},
	},
	{
		name: 'elementType-string(query)',
		displayName: 'elementType',
		description: 'elementType - string (query)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Revision',
				],
				operation: [
					'GET /revisions/companies/{cid}/partnumber/{pnum}',
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
					'GET /revisions/companies/{cid}/partnumber/{pnum}',
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
						name: 'fillApprovers-boolean(query)',
						displayName: 'fillApprovers',
						description: 'fillApprovers - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'fillExportPermission-boolean(query)',
						displayName: 'fillExportPermission',
						description: 'fillExportPermission - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

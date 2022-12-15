import { INodeProperties } from "n8n-workflow";

export const getRevisionHistoryInCompanyByPartNumberDescription: INodeProperties[] = [
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
					'GET /revisions/companies/{cid}/partnumber/{pnum}',
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
					'GET /revisions/companies/{cid}/partnumber/{pnum}',
				],
			},
		},
	},
	{
		displayName: 'elementType',
		name: 'elementType-string(query)',
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
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: 'fillApprovers',
						name: 'fillApprovers-boolean(query)',
						description: 'fillApprovers - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'fillExportPermission',
						name: 'fillExportPermission-boolean(query)',
						description: 'fillExportPermission - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

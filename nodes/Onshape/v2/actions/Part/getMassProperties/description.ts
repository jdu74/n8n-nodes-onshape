import { INodeProperties } from "n8n-workflow";

export const getMassPropertiesDescription: INodeProperties[] = [
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
					'Part',
				],
				operation: [
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/massproperties',
				],
			},
		},
	},
	{
		displayName: 'wvm',
		name: 'wvm-string(path)',
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
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/massproperties',
				],
			},
		},
	},
	{
		displayName: 'wvmid',
		name: 'wvmid-string(path)',
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
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/massproperties',
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
					'Part',
				],
				operation: [
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/massproperties',
				],
			},
		},
	},
	{
		displayName: 'partid',
		name: 'partid-string(path)',
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
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/massproperties',
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
					'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/massproperties',
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
						displayName: 'rollbackBarIndex',
						name: 'rollbackBarIndex-integer(query)',
						description: 'rollbackBarIndex - integer (query)',
						type: 'number',
						default: -1,
					},
					{
						displayName: 'elementMicroversionId',
						name: 'elementMicroversionId-string(query)',
						description: 'elementMicroversionId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'inferMetadataOwner',
						name: 'inferMetadataOwner-boolean(query)',
						description: 'inferMetadataOwner - boolean (query)',
						type: 'boolean',
						default: true,
					},
					{
						displayName: 'useMassPropertyOverrides',
						name: 'useMassPropertyOverrides-boolean(query)',
						description: 'useMassPropertyOverrides - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

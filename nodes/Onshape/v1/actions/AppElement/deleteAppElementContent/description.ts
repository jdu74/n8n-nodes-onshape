import { INodeProperties } from "n8n-workflow";

export const deleteAppElementContentDescription: INodeProperties[] = [
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
					'AppElement',
				],
				operation: [
					'DELETE /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
				],
			},
		},
	},
	{
		name: 'eid-string(path)',
		displayName: 'eid',
		description: 'eid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'AppElement',
				],
				operation: [
					'DELETE /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
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
					'AppElement',
				],
				operation: [
					'DELETE /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
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
					'AppElement',
				],
				operation: [
					'DELETE /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
				],
			},
		},
	},
	{
		name: 'sid-string(path)',
		displayName: 'sid',
		description: 'sid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'AppElement',
				],
				operation: [
					'DELETE /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
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
					'AppElement',
				],
				operation: [
					'DELETE /api/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
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
						name: 'transactionId-string(query)',
						displayName: 'transactionId',
						description: 'transactionId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'parentChangeId-string(query)',
						displayName: 'parentChangeId',
						description: 'parentChangeId - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'description-string(query)',
						displayName: 'description',
						description: 'description - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
];

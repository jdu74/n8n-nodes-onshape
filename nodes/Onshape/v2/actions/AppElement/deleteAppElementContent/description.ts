import { INodeProperties } from "n8n-workflow";

export const deleteAppElementContentDescription: INodeProperties[] = [
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
					'AppElement',
				],
				operation: [
					'DELETE /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
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
					'AppElement',
				],
				operation: [
					'DELETE /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
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
					'AppElement',
				],
				operation: [
					'DELETE /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
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
					'AppElement',
				],
				operation: [
					'DELETE /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
				],
			},
		},
	},
	{
		displayName: 'sid',
		name: 'sid-string(path)',
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
					'DELETE /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
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
					'DELETE /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}',
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
						displayName: 'transactionId',
						name: 'transactionId-string(query)',
						description: 'transactionId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'parentChangeId',
						name: 'parentChangeId-string(query)',
						description: 'parentChangeId - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'description',
						name: 'description-string(query)',
						description: 'description - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
];

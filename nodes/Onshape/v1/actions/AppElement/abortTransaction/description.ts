import { INodeProperties } from "n8n-workflow";

export const abortTransactionDescription: INodeProperties[] = [
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
					'DELETE /api/appelements/d/{did}/w/{wid}/e/{eid}/transactions/{tid}',
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
					'DELETE /api/appelements/d/{did}/w/{wid}/e/{eid}/transactions/{tid}',
				],
			},
		},
	},
	{
		name: 'wid-string(path)',
		displayName: 'wid',
		description: 'wid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'AppElement',
				],
				operation: [
					'DELETE /api/appelements/d/{did}/w/{wid}/e/{eid}/transactions/{tid}',
				],
			},
		},
	},
	{
		name: 'tid-string(path)',
		displayName: 'tid',
		description: 'tid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'AppElement',
				],
				operation: [
					'DELETE /api/appelements/d/{did}/w/{wid}/e/{eid}/transactions/{tid}',
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
					'DELETE /api/appelements/d/{did}/w/{wid}/e/{eid}/transactions/{tid}',
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
						name: 'returnError-boolean(query)',
						displayName: 'returnError',
						description: 'returnError - boolean (query)',
						type: 'boolean',
						default: true,
					},
				],
			},
		],
	},
];

import { INodeProperties } from "n8n-workflow";

export const GetApplicableExtensionsForClientDescription: INodeProperties[] = [
	{
		displayName: 'uid',
		name: 'uid-string(path)',
		description: 'uid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'APIApplication',
				],
				operation: [
					'GET /applications/extensions/user/{uid}/client/{cid}',
				],
			},
		},
	},
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
					'APIApplication',
				],
				operation: [
					'GET /applications/extensions/user/{uid}/client/{cid}',
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
					'APIApplication',
				],
				operation: [
					'GET /applications/extensions/user/{uid}/client/{cid}',
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
						displayName: 'validPurchases',
						name: 'validPurchases-boolean(query)',
						description: 'validPurchases - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];

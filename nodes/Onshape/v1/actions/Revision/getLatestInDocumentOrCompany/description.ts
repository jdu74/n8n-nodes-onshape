import { INodeProperties } from "n8n-workflow";

export const getLatestInDocumentOrCompanyDescription: INodeProperties[] = [
	{
		name: 'cd-string(path)',
		displayName: 'cd',
		description: 'cd - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Revision',
				],
				operation: [
					'GET /revisions/{cd}/{cdid}/p/{pnum}/latest',
				],
			},
		},
	},
	{
		name: 'cdid-string(path)',
		displayName: 'cdid',
		description: 'cdid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Revision',
				],
				operation: [
					'GET /revisions/{cd}/{cdid}/p/{pnum}/latest',
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
					'GET /revisions/{cd}/{cdid}/p/{pnum}/latest',
				],
			},
		},
	},
	{
		name: 'et-string(query)',
		displayName: 'et',
		description: 'et - string (query)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Revision',
				],
				operation: [
					'GET /revisions/{cd}/{cdid}/p/{pnum}/latest',
				],
			},
		},
	},
];

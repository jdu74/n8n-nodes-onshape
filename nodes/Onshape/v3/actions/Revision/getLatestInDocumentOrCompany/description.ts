import { INodeProperties } from "n8n-workflow";

export const GetLatestInDocumentOrCompanyDescription: INodeProperties[] = [
	{
		displayName: 'cd',
		name: 'cd-string(path)',
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
		displayName: 'cdid',
		name: 'cdid-string(path)',
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
					'GET /revisions/{cd}/{cdid}/p/{pnum}/latest',
				],
			},
		},
	},
	{
		displayName: 'et',
		name: 'et-string(query)',
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

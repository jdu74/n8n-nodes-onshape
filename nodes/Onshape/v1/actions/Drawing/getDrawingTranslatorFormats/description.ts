import { INodeProperties } from "n8n-workflow";

export const getDrawingTranslatorFormatsDescription: INodeProperties[] = [
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
					'Drawing',
				],
				operation: [
					'GET /api/drawings/d/{did}/w/{wid}/e/{eid}/translationformats',
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
					'Drawing',
				],
				operation: [
					'GET /api/drawings/d/{did}/w/{wid}/e/{eid}/translationformats',
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
					'Drawing',
				],
				operation: [
					'GET /api/drawings/d/{did}/w/{wid}/e/{eid}/translationformats',
				],
			},
		},
	},
];

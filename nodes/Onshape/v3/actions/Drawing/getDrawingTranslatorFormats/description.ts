import { INodeProperties } from "n8n-workflow";

export const GetDrawingTranslatorFormatsDescription: INodeProperties[] = [
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
					'Drawing',
				],
				operation: [
					'GET /drawings/d/{did}/w/{wid}/e/{eid}/translationformats',
				],
			},
		},
	},
	{
		displayName: 'wid',
		name: 'wid-string(path)',
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
					'GET /drawings/d/{did}/w/{wid}/e/{eid}/translationformats',
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
					'Drawing',
				],
				operation: [
					'GET /drawings/d/{did}/w/{wid}/e/{eid}/translationformats',
				],
			},
		},
	},
];

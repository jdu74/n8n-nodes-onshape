import { INodeProperties } from "n8n-workflow";

export const getTranslationDescription: INodeProperties[] = [
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
					'Translation',
				],
				operation: [
					'GET /api/translations/{tid}',
				],
			},
		},
	},
];

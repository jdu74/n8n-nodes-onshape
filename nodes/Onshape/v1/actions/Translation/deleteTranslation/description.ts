import { INodeProperties } from "n8n-workflow";

export const deleteTranslationDescription: INodeProperties[] = [
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
					'DELETE /translations/{tid}',
				],
			},
		},
	},
];

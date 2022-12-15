import { INodeProperties } from "n8n-workflow";

export const deleteTranslationDescription: INodeProperties[] = [
	{
		displayName: 'tid',
		name: 'tid-string(path)',
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

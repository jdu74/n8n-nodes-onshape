import * as GetDocumentTranslations from './getDocumentTranslations';
import * as CreateTranslation from './createTranslation';
import * as GetAllTranslatorFormats from './getAllTranslatorFormats';
import * as GetTranslation from './getTranslation';
import * as DeleteTranslation from './deleteTranslation';

import { INodeProperties } from 'n8n-workflow';

export {
	GetDocumentTranslations,
	CreateTranslation,
	GetAllTranslatorFormats,
	GetTranslation,
	DeleteTranslation,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Translation',
				],
			},
		},
		options: [
			{
				name: 'getDocumentTranslations',
				value: 'GET /translations/d/{did}',
				description: 'Get information on an in-progress or completed translation by document ID. - get /translations/d/{did}',
			},
			{
				name: 'createTranslation',
				value: 'POST /translations/d/{did}/w/{wid}',
				description: 'The API call may complete before the translation is finished. If `requestState = ACTIVE`, the translation can be polled until the state is either `DONE` or `FAILED`. Alternatively, a webhook callback can be registered for notification of translation completion (requires `Write` scope if `storeInDocument` is `true`). See [API Guide: Model Translation](https://onshape-public.github.io/docs/api-adv/translation/) for more details. - post /translations/d/{did}/w/{wid}',
			},
			{
				name: 'getAllTranslatorFormats',
				value: 'GET /translations/translationformats',
				description: "Note that we don't necessarily support both import and export for any given format. See [API Guide: Model Translation](https://onshape-public.github.io/docs/api-adv/translation/) for more details. - get /translations/translationformats",
			},
			{
				name: 'getTranslation',
				value: 'GET /translations/{tid}',
				description: 'When the translation is complete, `requestState` changes from `ACTIVE` to `DONE` or `FAILED`. See [API Guide: Model Translation](https://onshape-public.github.io/docs/api-adv/translation/) for more details. - get /translations/{tid}',
			},
			{
				name: 'deleteTranslation',
				value: 'DELETE /translations/{tid}',
				description: 'Delete a translation request. - delete /translations/{tid}',
			},
		],
		default: 'GET /translations/d/{did}',
		description: 'The operation to perform',
	},
	...GetDocumentTranslations.description,
	...CreateTranslation.description,
	...GetAllTranslatorFormats.description,
	...GetTranslation.description,
	...DeleteTranslation.description,
];

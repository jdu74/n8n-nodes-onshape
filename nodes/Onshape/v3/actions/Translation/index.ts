import * as CreateTranslation from './createTranslation';
import * as DeleteTranslation from './deleteTranslation';
import * as GetAllTranslatorFormats from './getAllTranslatorFormats';
import * as GetDocumentTranslations from './getDocumentTranslations';
import * as GetTranslation from './getTranslation';

import { INodeProperties } from 'n8n-workflow';

export {
	CreateTranslation,
	DeleteTranslation,
	GetAllTranslatorFormats,
	GetDocumentTranslations,
	GetTranslation,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'Translation',
				],
			},
		},
		default: 'GET /translations/d/{did}',
		options: [
			{
				name: 'createTranslation',
				value: 'POST /translations/d/{did}/w/{wid}',
				description: 'Upload a foreign file into Onshape and translate the data into parts, Part Studios, assemblies, and subassemblies. - post /translations/d/{did}/w/{wid}',
				action: 'Create Translation',
			},
			{
				name: 'deleteTranslation',
				value: 'DELETE /translations/{tid}',
				description: 'Delete a translation request. - delete /translations/{tid}',
				action: 'Delete Translation',
			},
			{
				name: 'getAllTranslatorFormats',
				value: 'GET /translations/translationformats',
				description: 'Get a list of formats this translation can use. - get /translations/translationformats',
				action: 'Get All Translator Formats',
			},
			{
				name: 'getDocumentTranslations',
				value: 'GET /translations/d/{did}',
				description: 'Get information on an in-progress or completed translation by document ID. - get /translations/d/{did}',
				action: 'Get Document Translations',
			},
			{
				name: 'getTranslation',
				value: 'GET /translations/{tid}',
				description: 'Get information on an in-progress or completed translation by translation ID. - get /translations/{tid}',
				action: 'Get Translation',
			},
		],
	},
	...CreateTranslation.description,
	...DeleteTranslation.description,
	...GetAllTranslatorFormats.description,
	...GetDocumentTranslations.description,
	...GetTranslation.description,
];

import * as getDocumentTranslations from './getDocumentTranslations';
import * as createTranslation from './createTranslation';
import * as getAllTranslatorFormats from './getAllTranslatorFormats';
import * as getTranslation from './getTranslation';
import * as deleteTranslation from './deleteTranslation';

import { INodeProperties } from 'n8n-workflow';

export {
	getDocumentTranslations,
	createTranslation,
	getAllTranslatorFormats,
	getTranslation,
	deleteTranslation,
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
				description: 'Request an array of translations that were made against this document. - get /translations/d/{did}',
			},
			{
				name: 'createTranslation',
				value: 'POST /translations/d/{did}/w/{wid}',
				description: 'Upload foreign data (for example, an X_T file) into Onshape, and then translate the data to generate a part, Part Studio, Assembly, or subassembly. - post /translations/d/{did}/w/{wid}',
			},
			{
				name: 'getAllTranslatorFormats',
				value: 'GET /translations/translationformats',
				description: 'Retrieve a list of translation formats that can work for this translation. Some are valid only as an input format and cannot be used as an output format. - get /translations/translationformats',
			},
			{
				name: 'getTranslation',
				value: 'GET /translations/{tid}',
				description: 'Request information on an in-progress or completed translation. - get /translations/{tid}',
			},
			{
				name: 'deleteTranslation',
				value: 'DELETE /translations/{tid}',
				description: 'Delete translation status entry. - delete /translations/{tid}',
			},
		],
		default: 'GET /translations/d/{did}',
		description: 'The operation to perform',
	},
	...getDocumentTranslations.description,
	...createTranslation.description,
	...getAllTranslatorFormats.description,
	...getTranslation.description,
	...deleteTranslation.description,
];

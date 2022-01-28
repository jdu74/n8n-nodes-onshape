import * as createTranslation from './createTranslation';
import * as getTranslation from './getTranslation';
import * as deleteTranslation from './deleteTranslation';
import * as getAllTranslatorFormats from './getAllTranslatorFormats';
import * as getDocumentTranslations from './getDocumentTranslations';

import { INodeProperties } from 'n8n-workflow';

export {
	createTranslation,
	getTranslation,
	deleteTranslation,
	getAllTranslatorFormats,
	getDocumentTranslations,
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
				name: 'createTranslation',
				value: 'POST /api/translations/d/{did}/w/{wid}',
				description: 'Upload foreign data (for example, an X_T file) into Onshape, and then translate the data to generate a part, Part Studio, Assembly, or subassembly - post /api/translations/d/{did}/w/{wid}',
			},
			{
				name: 'getTranslation',
				value: 'GET /api/translations/{tid}',
				description: 'Request information on an in-progress or completed translation - get /api/translations/{tid}',
			},
			{
				name: 'deleteTranslation',
				value: 'DELETE /api/translations/{tid}',
				description: 'Delete translation status entry - delete /api/translations/{tid}',
			},
			{
				name: 'getAllTranslatorFormats',
				value: 'GET /api/translations/translationformats',
				description: 'Retrieve a list of translation formats. Some are valid only as an input format and cannot be used as an output format. - get /api/translations/translationformats',
			},
			{
				name: 'getDocumentTranslations',
				value: 'GET /api/translations/d/{did}',
				description: 'Request a list of translations that were made against this document - get /api/translations/d/{did}',
			},
		],
		default: 'POST /api/translations/d/{did}/w/{wid}',
		description: 'The operation to perform',
	},
	...createTranslation.description,
	...getTranslation.description,
	...deleteTranslation.description,
	...getAllTranslatorFormats.description,
	...getDocumentTranslations.description,
];

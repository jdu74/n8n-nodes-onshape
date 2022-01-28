import * as copyElementFromSourceDocument from './copyElementFromSourceDocument';
import * as decodeConfiguration from './decodeConfiguration';
import * as deleteElement from './deleteElement';
import * as encodeConfigurationMap from './encodeConfigurationMap';
import * as getConfiguration from './getConfiguration';
import * as updateConfiguration from './updateConfiguration';
import * as getElementTranslatorFormatsByVersionOrWorkspace from './getElementTranslatorFormatsByVersionOrWorkspace';
import * as updateReferences from './updateReferences';

import { INodeProperties } from 'n8n-workflow';

export {
	copyElementFromSourceDocument,
	decodeConfiguration,
	deleteElement,
	encodeConfigurationMap,
	getConfiguration,
	updateConfiguration,
	getElementTranslatorFormatsByVersionOrWorkspace,
	updateReferences,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Element',
				],
			},
		},
		options: [
			{
				name: 'copyElementFromSourceDocument',
				value: 'POST /api/elements/copyelement/{did}/workspace/{wid}',
				description: 'Copy Element - post /api/elements/copyelement/{did}/workspace/{wid}',
			},
			{
				name: 'decodeConfiguration',
				value: 'GET /api/elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configurationencodings/{cid}',
				description: 'Decode Configuration String - get /api/elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configurationencodings/{cid}',
			},
			{
				name: 'deleteElement',
				value: 'DELETE /api/elements/d/{did}/w/{wid}/e/{eid}',
				description: 'Delete Element - delete /api/elements/d/{did}/w/{wid}/e/{eid}',
			},
			{
				name: 'encodeConfigurationMap',
				value: 'POST /api/elements/d/{did}/e/{eid}/configurationencodings',
				description: 'Encode Configuration - post /api/elements/d/{did}/e/{eid}/configurationencodings',
			},
			{
				name: 'getConfiguration',
				value: 'GET /api/elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
				description: 'Get Configuration - get /api/elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
			},
			{
				name: 'updateConfiguration',
				value: 'POST /api/elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
				description: 'Update Configuration - post /api/elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
			},
			{
				name: 'getElementTranslatorFormatsByVersionOrWorkspace',
				value: 'GET /api/elements/translatorFormats/{did}/{wv}/{wvid}/{eid}',
				description: 'Get Element Translator Formats - get /api/elements/translatorFormats/{did}/{wv}/{wvid}/{eid}',
			},
			{
				name: 'updateReferences',
				value: 'POST /api/elements/d/{did}/w/{wid}/e/{eid}/updatereferences',
				description: 'Update or replace node references - post /api/elements/d/{did}/w/{wid}/e/{eid}/updatereferences',
			},
		],
		default: 'POST /api/elements/copyelement/{did}/workspace/{wid}',
		description: 'The operation to perform',
	},
	...copyElementFromSourceDocument.description,
	...decodeConfiguration.description,
	...deleteElement.description,
	...encodeConfigurationMap.description,
	...getConfiguration.description,
	...updateConfiguration.description,
	...getElementTranslatorFormatsByVersionOrWorkspace.description,
	...updateReferences.description,
];

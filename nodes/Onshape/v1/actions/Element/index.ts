import * as copyElementFromSourceDocument from './copyElementFromSourceDocument';
import * as encodeConfigurationMap from './encodeConfigurationMap';
import * as deleteElement from './deleteElement';
import * as updateReferences from './updateReferences';
import * as getConfiguration from './getConfiguration';
import * as updateConfiguration from './updateConfiguration';
import * as decodeConfiguration from './decodeConfiguration';
import * as getElementTranslatorFormatsByVersionOrWorkspace from './getElementTranslatorFormatsByVersionOrWorkspace';

import { INodeProperties } from 'n8n-workflow';

export {
	copyElementFromSourceDocument,
	encodeConfigurationMap,
	deleteElement,
	updateReferences,
	getConfiguration,
	updateConfiguration,
	decodeConfiguration,
	getElementTranslatorFormatsByVersionOrWorkspace,
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
				value: 'POST /elements/copyelement/{did}/workspace/{wid}',
				description: 'Copy Element - post /elements/copyelement/{did}/workspace/{wid}',
			},
			{
				name: 'encodeConfigurationMap',
				value: 'POST /elements/d/{did}/e/{eid}/configurationencodings',
				description: 'Encode Configuration - post /elements/d/{did}/e/{eid}/configurationencodings',
			},
			{
				name: 'deleteElement',
				value: 'DELETE /elements/d/{did}/w/{wid}/e/{eid}',
				description: 'Delete Element - delete /elements/d/{did}/w/{wid}/e/{eid}',
			},
			{
				name: 'updateReferences',
				value: 'POST /elements/d/{did}/w/{wid}/e/{eid}/updatereferences',
				description: 'Update or replace node references - post /elements/d/{did}/w/{wid}/e/{eid}/updatereferences',
			},
			{
				name: 'getConfiguration',
				value: 'GET /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
				description: 'Get Configuration - get /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
			},
			{
				name: 'updateConfiguration',
				value: 'POST /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
				description: 'Update Configuration - post /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
			},
			{
				name: 'decodeConfiguration',
				value: 'GET /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configurationencodings/{cid}',
				description: 'Decode Configuration String - get /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configurationencodings/{cid}',
			},
			{
				name: 'getElementTranslatorFormatsByVersionOrWorkspace',
				value: 'GET /elements/translatorFormats/{did}/{wv}/{wvid}/{eid}',
				description: 'Get Element Translator Formats - get /elements/translatorFormats/{did}/{wv}/{wvid}/{eid}',
			},
		],
		default: 'POST /elements/copyelement/{did}/workspace/{wid}',
		description: 'The operation to perform',
	},
	...copyElementFromSourceDocument.description,
	...encodeConfigurationMap.description,
	...deleteElement.description,
	...updateReferences.description,
	...getConfiguration.description,
	...updateConfiguration.description,
	...decodeConfiguration.description,
	...getElementTranslatorFormatsByVersionOrWorkspace.description,
];

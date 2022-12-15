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
				description: 'Copy tab by document ID and workspace ID. - post /elements/copyelement/{did}/workspace/{wid}',
			},
			{
				name: 'encodeConfigurationMap',
				value: 'POST /elements/d/{did}/e/{eid}/configurationencodings',
				description: 'Encode configuration by documentation ID and tab ID. - post /elements/d/{did}/e/{eid}/configurationencodings',
			},
			{
				name: 'deleteElement',
				value: 'DELETE /elements/d/{did}/w/{wid}/e/{eid}',
				description: 'delete /elements/d/{did}/w/{wid}/e/{eid}',
			},
			{
				name: 'updateReferences',
				value: 'POST /elements/d/{did}/w/{wid}/e/{eid}/updatereferences',
				description: 'Update or replace node references by document ID, workspace ID, and tab ID. - post /elements/d/{did}/w/{wid}/e/{eid}/updatereferences',
			},
			{
				name: 'getConfiguration',
				value: 'GET /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
				description: 'Retrieve configuration by document ID, workspace or version or microversion ID, and tab ID. - get /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
			},
			{
				name: 'updateConfiguration',
				value: 'POST /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
				description: 'Update configuration by document ID, workspace or microversion ID, and tab ID. - post /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
			},
			{
				name: 'decodeConfiguration',
				value: 'GET /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configurationencodings/{cid}',
				description: 'Decode configuration string by documentation ID, workspace or version or microversion ID, and tab ID. - get /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configurationencodings/{cid}',
			},
			{
				name: 'getElementTranslatorFormatsByVersionOrWorkspace',
				value: 'GET /elements/translatorFormats/{did}/{wv}/{wvid}/{eid}',
				description: 'get /elements/translatorFormats/{did}/{wv}/{wvid}/{eid}',
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

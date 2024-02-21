import * as CopyElementFromSourceDocument from './copyElementFromSourceDocument';
import * as DecodeConfiguration from './decodeConfiguration';
import * as DeleteElement from './deleteElement';
import * as EncodeConfigurationMap from './encodeConfigurationMap';
import * as GetConfiguration from './getConfiguration';
import * as GetElementTranslatorFormatsByVersionOrWorkspace from './getElementTranslatorFormatsByVersionOrWorkspace';
import * as UpdateConfiguration from './updateConfiguration';
import * as UpdateReferences from './updateReferences';

import { INodeProperties } from 'n8n-workflow';

export {
	CopyElementFromSourceDocument,
	DecodeConfiguration,
	DeleteElement,
	EncodeConfigurationMap,
	GetConfiguration,
	GetElementTranslatorFormatsByVersionOrWorkspace,
	UpdateConfiguration,
	UpdateReferences,
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
					'Element',
				],
			},
		},
		default: 'POST /elements/copyelement/{did}/workspace/{wid}',
		options: [
			{
				name: 'copyElementFromSourceDocument',
				value: 'POST /elements/copyelement/{did}/workspace/{wid}',
				description: 'Copy tab by document ID and workspace ID. - post /elements/copyelement/{did}/workspace/{wid}',
				action: 'Copy Element From Source Document',
			},
			{
				name: 'decodeConfiguration',
				value: 'GET /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configurationencodings/{cid}',
				description: 'Decode configuration string by documentation ID, workspace or version or microversion ID, and tab ID. - get /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configurationencodings/{cid}',
				action: 'Decode Configuration',
			},
			{
				name: 'deleteElement',
				value: 'DELETE /elements/d/{did}/w/{wid}/e/{eid}',
				description: 'delete /elements/d/{did}/w/{wid}/e/{eid}',
				action: 'Delete Element',
			},
			{
				name: 'encodeConfigurationMap',
				value: 'POST /elements/d/{did}/e/{eid}/configurationencodings',
				description: 'Encode configuration by documentation ID and tab ID. - post /elements/d/{did}/e/{eid}/configurationencodings',
				action: 'Encode Configuration Map',
			},
			{
				name: 'getConfiguration',
				value: 'GET /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
				description: 'Retrieve configuration by document ID, workspace or version or microversion ID, and tab ID. - get /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
				action: 'Get Configuration',
			},
			{
				name: 'getElementTranslatorFormatsByVersionOrWorkspace',
				value: 'GET /elements/translatorFormats/{did}/{wv}/{wvid}/{eid}',
				description: 'get /elements/translatorFormats/{did}/{wv}/{wvid}/{eid}',
				action: 'Get Element Translator Formats By Version Or Workspace',
			},
			{
				name: 'updateConfiguration',
				value: 'POST /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
				description: 'Update configuration by document ID, workspace or microversion ID, and tab ID. - post /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration',
				action: 'Update Configuration',
			},
			{
				name: 'updateReferences',
				value: 'POST /elements/d/{did}/w/{wid}/e/{eid}/updatereferences',
				description: 'Update or replace node references by document ID, workspace ID, and tab ID. - post /elements/d/{did}/w/{wid}/e/{eid}/updatereferences',
				action: 'Update References',
			},
		],
	},
	...CopyElementFromSourceDocument.description,
	...DecodeConfiguration.description,
	...DeleteElement.description,
	...EncodeConfigurationMap.description,
	...GetConfiguration.description,
	...GetElementTranslatorFormatsByVersionOrWorkspace.description,
	...UpdateConfiguration.description,
	...UpdateReferences.description,
];

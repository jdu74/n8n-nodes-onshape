import * as CreateDrawingAppElement from './createDrawingAppElement';
import * as ModifyDrawing from './modifyDrawing';
import * as GetDrawingTranslatorFormats from './getDrawingTranslatorFormats';
import * as CreateDrawingTranslation from './createDrawingTranslation';
import * as GetModificationStatus from './getModificationStatus';

import { INodeProperties } from 'n8n-workflow';

export {
	CreateDrawingAppElement,
	ModifyDrawing,
	GetDrawingTranslatorFormats,
	CreateDrawingTranslation,
	GetModificationStatus,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Drawing',
				],
			},
		},
		options: [
			{
				name: 'createDrawingAppElement',
				value: 'POST /drawings/d/{did}/w/{wid}/create',
				description: 'This endpoint takes a JSON Schema as input. See the schema docs below for details, and see [API Guide: Drawings](https://onshape-public.github.io/docs/api-adv/drawings/) for more information. - post /drawings/d/{did}/w/{wid}/create',
			},
			{
				name: 'modifyDrawing',
				value: 'POST /drawings/d/{did}/w/{wid}/e/{eid}/modify',
				description: 'Modify a drawing via JSON payload. - post /drawings/d/{did}/w/{wid}/e/{eid}/modify',
			},
			{
				name: 'getDrawingTranslatorFormats',
				value: 'GET /drawings/d/{did}/w/{wid}/e/{eid}/translationformats',
				description: 'Get a list of all valid formats the drawing can be translated (exported) to. - get /drawings/d/{did}/w/{wid}/e/{eid}/translationformats',
			},
			{
				name: 'createDrawingTranslation',
				value: 'POST /drawings/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				description: 'Export a drawing to a different format within a document. Use `getDrawingTranslatorFormats` for a list of supported translation (i.e., import/export) formats. - post /drawings/d/{did}/{wv}/{wvid}/e/{eid}/translations',
			},
			{
				name: 'getModificationStatus',
				value: 'GET /drawings/modify/status/{mrid}',
				description: 'Get the status of a drawing modification operation. - get /drawings/modify/status/{mrid}',
			},
		],
		default: 'POST /drawings/d/{did}/w/{wid}/create',
		description: 'The operation to perform',
	},
	...CreateDrawingAppElement.description,
	...ModifyDrawing.description,
	...GetDrawingTranslatorFormats.description,
	...CreateDrawingTranslation.description,
	...GetModificationStatus.description,
];

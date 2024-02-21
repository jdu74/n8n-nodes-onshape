import * as CreateDrawingAppElement from './createDrawingAppElement';
import * as CreateDrawingTranslation from './createDrawingTranslation';
import * as GetDrawingTranslatorFormats from './getDrawingTranslatorFormats';
import * as GetModificationStatus from './getModificationStatus';
import * as ModifyDrawing from './modifyDrawing';

import { INodeProperties } from 'n8n-workflow';

export {
	CreateDrawingAppElement,
	CreateDrawingTranslation,
	GetDrawingTranslatorFormats,
	GetModificationStatus,
	ModifyDrawing,
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
					'Drawing',
				],
			},
		},
		default: 'POST /drawings/d/{did}/w/{wid}/create',
		options: [
			{
				name: 'createDrawingAppElement',
				value: 'POST /drawings/d/{did}/w/{wid}/create',
				description: 'Create a new drawing in a document. - post /drawings/d/{did}/w/{wid}/create',
				action: 'Create Drawing App Element',
			},
			{
				name: 'createDrawingTranslation',
				value: 'POST /drawings/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				description: 'Translate (export) a drawing to a different format. - post /drawings/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				action: 'Create Drawing Translation',
			},
			{
				name: 'getDrawingTranslatorFormats',
				value: 'GET /drawings/d/{did}/w/{wid}/e/{eid}/translationformats',
				description: 'Get a list of all valid formats the drawing can be translated (exported) to. - get /drawings/d/{did}/w/{wid}/e/{eid}/translationformats',
				action: 'Get Drawing Translator Formats',
			},
			{
				name: 'getModificationStatus',
				value: 'GET /drawings/modify/status/{mrid}',
				description: 'Get the status of a drawing modification operation. - get /drawings/modify/status/{mrid}',
				action: 'Get Modification Status',
			},
			{
				name: 'modifyDrawing',
				value: 'POST /drawings/d/{did}/w/{wid}/e/{eid}/modify',
				description: 'Modify a drawing via JSON payload. - post /drawings/d/{did}/w/{wid}/e/{eid}/modify',
				action: 'Modify Drawing',
			},
		],
	},
	...CreateDrawingAppElement.description,
	...CreateDrawingTranslation.description,
	...GetDrawingTranslatorFormats.description,
	...GetModificationStatus.description,
	...ModifyDrawing.description,
];

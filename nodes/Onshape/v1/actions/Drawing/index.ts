import * as createDrawingAppElement from './createDrawingAppElement';
import * as createDrawingTranslation from './createDrawingTranslation';
import * as getDrawingTranslatorFormats from './getDrawingTranslatorFormats';

import { INodeProperties } from 'n8n-workflow';

export {
	createDrawingAppElement,
	createDrawingTranslation,
	getDrawingTranslatorFormats,
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
				value: 'POST /api/drawings/create',
				description: 'post /api/drawings/create',
			},
			{
				name: 'createDrawingTranslation',
				value: 'POST /api/drawings/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				description: 'Create Drawing translation - post /api/drawings/d/{did}/{wv}/{wvid}/e/{eid}/translations',
			},
			{
				name: 'getDrawingTranslatorFormats',
				value: 'GET /api/drawings/d/{did}/w/{wid}/e/{eid}/translationformats',
				description: 'get /api/drawings/d/{did}/w/{wid}/e/{eid}/translationformats',
			},
		],
		default: 'POST /api/drawings/create',
		description: 'The operation to perform',
	},
	...createDrawingAppElement.description,
	...createDrawingTranslation.description,
	...getDrawingTranslatorFormats.description,
];

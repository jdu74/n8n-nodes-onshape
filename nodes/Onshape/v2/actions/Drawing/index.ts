import * as createDrawingAppElement from './createDrawingAppElement';
import * as getDrawingTranslatorFormats from './getDrawingTranslatorFormats';
import * as createDrawingTranslation from './createDrawingTranslation';

import { INodeProperties } from 'n8n-workflow';

export {
	createDrawingAppElement,
	getDrawingTranslatorFormats,
	createDrawingTranslation,
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
				value: 'POST /drawings/create',
				description: "Build a drawing app element in document's workspace - post /drawings/create",
			},
			{
				name: 'getDrawingTranslatorFormats',
				value: 'GET /drawings/d/{did}/w/{wid}/e/{eid}/translationformats',
				description: 'Retrieve translation formats by document ID, workspace ID, and tab ID. - get /drawings/d/{did}/w/{wid}/e/{eid}/translationformats',
			},
			{
				name: 'createDrawingTranslation',
				value: 'POST /drawings/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				description: 'post /drawings/d/{did}/{wv}/{wvid}/e/{eid}/translations',
			},
		],
		default: 'POST /drawings/create',
		description: 'The operation to perform',
	},
	...createDrawingAppElement.description,
	...getDrawingTranslatorFormats.description,
	...createDrawingTranslation.description,
];

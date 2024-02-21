import * as GetSketchBoundingBoxes from './getSketchBoundingBoxes';
import * as GetSketchInfo from './getSketchInfo';
import * as GetTessellatedEntities from './getTessellatedEntities';

import { INodeProperties } from 'n8n-workflow';

export {
	GetSketchBoundingBoxes,
	GetSketchInfo,
	GetTessellatedEntities,
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
					'Sketch',
				],
			},
		},
		default: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches',
		options: [
			{
				name: 'getSketchBoundingBoxes',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/boundingboxes',
				description: 'Get all bounding boxes for a sketch. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/boundingboxes',
				action: 'Get Sketch Bounding Boxes',
			},
			{
				name: 'getSketchInfo',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches',
				description: 'Get information for all sketches in Part Studio. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches',
				action: 'Get Sketch Info',
			},
			{
				name: 'getTessellatedEntities',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/tessellatedentities',
				description: 'Get the tessellations of a sketch in a Part Studio. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/tessellatedentities',
				action: 'Get Tessellated Entities',
			},
		],
	},
	...GetSketchBoundingBoxes.description,
	...GetSketchInfo.description,
	...GetTessellatedEntities.description,
];

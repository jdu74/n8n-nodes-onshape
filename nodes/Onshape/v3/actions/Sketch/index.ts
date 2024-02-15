import * as GetSketchInfo from './getSketchInfo';
import * as GetSketchBoundingBoxes from './getSketchBoundingBoxes';
import * as GetTessellatedEntities from './getTessellatedEntities';

import { INodeProperties } from 'n8n-workflow';

export {
	GetSketchInfo,
	GetSketchBoundingBoxes,
	GetTessellatedEntities,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Sketch',
				],
			},
		},
		options: [
			{
				name: 'getSketchInfo',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches',
				description: 'Get information for all sketches in Part Studio. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches',
			},
			{
				name: 'getSketchBoundingBoxes',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/boundingboxes',
				description: 'Get all bounding boxes for a sketch. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/boundingboxes',
			},
			{
				name: 'getTessellatedEntities',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/tessellatedentities',
				description: 'The accuracy of the tessellation to exact geometry is controlled by the `angleTolerance` and `chordTolerance` parameters. The tessellation points are computed closely enough so that neither the angle tolerance nor the chord tolerance are exceeded. For most parts, the angular tolerance is the most restrictive of the two default tolerances. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/tessellatedentities',
			},
		],
		default: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches',
		description: 'The operation to perform',
	},
	...GetSketchInfo.description,
	...GetSketchBoundingBoxes.description,
	...GetTessellatedEntities.description,
];

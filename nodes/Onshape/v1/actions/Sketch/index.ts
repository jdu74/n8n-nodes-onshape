import * as getSketchBoundingBoxes from './getSketchBoundingBoxes';
import * as getSketchInfo from './getSketchInfo';
import * as getTessellatedEntities from './getTessellatedEntities';

import { INodeProperties } from 'n8n-workflow';

export {
	getSketchBoundingBoxes,
	getSketchInfo,
	getTessellatedEntities,
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
				name: 'getSketchBoundingBoxes',
				value: 'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/boundingboxes',
				description: 'get /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/boundingboxes',
			},
			{
				name: 'getSketchInfo',
				value: 'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches',
				description: 'get /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches',
			},
			{
				name: 'getTessellatedEntities',
				value: 'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/tessellatedentities',
				description: 'get /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/tessellatedentities',
			},
		],
		default: 'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/boundingboxes',
		description: 'The operation to perform',
	},
	...getSketchBoundingBoxes.description,
	...getSketchInfo.description,
	...getTessellatedEntities.description,
];

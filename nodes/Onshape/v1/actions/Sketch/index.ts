import * as getSketchInfo from './getSketchInfo';
import * as getSketchBoundingBoxes from './getSketchBoundingBoxes';
import * as getTessellatedEntities from './getTessellatedEntities';

import { INodeProperties } from 'n8n-workflow';

export {
	getSketchInfo,
	getSketchBoundingBoxes,
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
				name: 'getSketchInfo',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches',
				description: 'get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches',
			},
			{
				name: 'getSketchBoundingBoxes',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/boundingboxes',
				description: 'get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/boundingboxes',
			},
			{
				name: 'getTessellatedEntities',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/tessellatedentities',
				description: 'get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/tessellatedentities',
			},
		],
		default: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches',
		description: 'The operation to perform',
	},
	...getSketchInfo.description,
	...getSketchBoundingBoxes.description,
	...getTessellatedEntities.description,
];

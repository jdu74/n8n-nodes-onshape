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
				description: 'Retrieve sketches by document ID, workspace or version or microversion ID, and tab ID. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches',
			},
			{
				name: 'getSketchBoundingBoxes',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/boundingboxes',
				description: 'Retrieve sketch bounding boxes by document ID, workspace or version or microversion ID, tab ID, and sketch ID. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/boundingboxes',
			},
			{
				name: 'getTessellatedEntities',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/tessellatedentities',
				description: 'Retrieve tessellated entities of sketches by document ID, workspace or version or microversion ID, tab ID, and sketch ID. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/tessellatedentities',
			},
		],
		default: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches',
		description: 'The operation to perform',
	},
	...getSketchInfo.description,
	...getSketchBoundingBoxes.description,
	...getTessellatedEntities.description,
];

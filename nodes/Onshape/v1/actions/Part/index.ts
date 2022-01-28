import * as exportPS from './exportPS';
import * as exportPartGltf from './exportPartGltf';
import * as exportStl from './exportStl';
import * as getBendTable from './getBendTable';
import * as getBodyDetails from './getBodyDetails';
import * as getBoundingBoxes from './getBoundingBoxes';
import * as getEdges from './getEdges';
import * as getMassProperties from './getMassProperties';
import * as getPartMetadata from './getPartMetadata';
import * as updatePartMetadata from './updatePartMetadata';
import * as getPartShadedViews from './getPartShadedViews';
import * as getPartsWMV from './getPartsWMV';
import * as getPartsWMVE from './getPartsWMVE';
import * as getStandardContentPartMetadata from './getStandardContentPartMetadata';
import * as updateStandardContentPartMetadata from './updateStandardContentPartMetadata';

import { INodeProperties } from 'n8n-workflow';

export {
	exportPS,
	exportPartGltf,
	exportStl,
	getBendTable,
	getBodyDetails,
	getBoundingBoxes,
	getEdges,
	getMassProperties,
	getPartMetadata,
	updatePartMetadata,
	getPartShadedViews,
	getPartsWMV,
	getPartsWMVE,
	getStandardContentPartMetadata,
	updateStandardContentPartMetadata,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Part',
				],
			},
		},
		options: [
			{
				name: 'exportPS',
				value: 'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/parasolid',
				description: 'Export Part to Parasolid. - get /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/parasolid',
			},
			{
				name: 'exportPartGltf',
				value: 'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/gltf',
				description: 'Export glTF for part - get /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/gltf',
			},
			{
				name: 'exportStl',
				value: 'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
				description: 'get /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
			},
			{
				name: 'getBendTable',
				value: 'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/sheetmetal/bendtable',
				description: 'Get Sheet Metal Bend Table. - get /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/sheetmetal/bendtable',
			},
			{
				name: 'getBodyDetails',
				value: 'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/bodydetails',
				description: 'get /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/bodydetails',
			},
			{
				name: 'getBoundingBoxes',
				value: 'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/boundingboxes',
				description: 'get /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/boundingboxes',
			},
			{
				name: 'getEdges',
				value: 'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatededges',
				description: 'Tessellated Edges - get /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatededges',
			},
			{
				name: 'getMassProperties',
				value: 'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/massproperties',
				description: 'Mass properties of a part. - get /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/massproperties',
			},
			{
				name: 'getPartMetadata',
				value: 'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
				description: 'get /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
			},
			{
				name: 'updatePartMetadata',
				value: 'POST /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
				description: 'post /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
			},
			{
				name: 'getPartShadedViews',
				value: 'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/shadedviews',
				description: 'get /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/shadedviews',
			},
			{
				name: 'getPartsWMV',
				value: 'GET /api/parts/d/{did}/{wvm}/{wvmid}',
				description: 'Get list of parts - get /api/parts/d/{did}/{wvm}/{wvmid}',
			},
			{
				name: 'getPartsWMVE',
				value: 'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'Get parts from an element. - get /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}',
			},
			{
				name: 'getStandardContentPartMetadata',
				value: 'GET /api/parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
				description: 'get /api/parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
			},
			{
				name: 'updateStandardContentPartMetadata',
				value: 'POST /api/parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
				description: 'post /api/parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
			},
		],
		default: 'GET /api/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/parasolid',
		description: 'The operation to perform',
	},
	...exportPS.description,
	...exportPartGltf.description,
	...exportStl.description,
	...getBendTable.description,
	...getBodyDetails.description,
	...getBoundingBoxes.description,
	...getEdges.description,
	...getMassProperties.description,
	...getPartMetadata.description,
	...updatePartMetadata.description,
	...getPartShadedViews.description,
	...getPartsWMV.description,
	...getPartsWMVE.description,
	...getStandardContentPartMetadata.description,
	...updateStandardContentPartMetadata.description,
];

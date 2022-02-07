import * as getPartsWMV from './getPartsWMV';
import * as getPartsWMVE from './getPartsWMVE';
import * as getBodyDetails from './getBodyDetails';
import * as getBoundingBoxes from './getBoundingBoxes';
import * as exportPartGltf from './exportPartGltf';
import * as getMassProperties from './getMassProperties';
import * as getPartMetadata from './getPartMetadata';
import * as updatePartMetadata from './updatePartMetadata';
import * as exportPS from './exportPS';
import * as getPartShadedViews from './getPartShadedViews';
import * as getBendTable from './getBendTable';
import * as exportStl from './exportStl';
import * as getEdges from './getEdges';
import * as getStandardContentPartMetadata from './getStandardContentPartMetadata';
import * as updateStandardContentPartMetadata from './updateStandardContentPartMetadata';

import { INodeProperties } from 'n8n-workflow';

export {
	getPartsWMV,
	getPartsWMVE,
	getBodyDetails,
	getBoundingBoxes,
	exportPartGltf,
	getMassProperties,
	getPartMetadata,
	updatePartMetadata,
	exportPS,
	getPartShadedViews,
	getBendTable,
	exportStl,
	getEdges,
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
				name: 'getPartsWMV',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}',
				description: 'Get list of parts - get /parts/d/{did}/{wvm}/{wvmid}',
			},
			{
				name: 'getPartsWMVE',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'Get parts from an element. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}',
			},
			{
				name: 'getBodyDetails',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/bodydetails',
				description: 'get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/bodydetails',
			},
			{
				name: 'getBoundingBoxes',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/boundingboxes',
				description: 'get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/boundingboxes',
			},
			{
				name: 'exportPartGltf',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/gltf',
				description: 'Export glTF for part - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/gltf',
			},
			{
				name: 'getMassProperties',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/massproperties',
				description: 'Mass properties of a part. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/massproperties',
			},
			{
				name: 'getPartMetadata',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
				description: 'get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
			},
			{
				name: 'updatePartMetadata',
				value: 'POST /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
				description: 'post /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
			},
			{
				name: 'exportPS',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/parasolid',
				description: 'Export Part to Parasolid. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/parasolid',
			},
			{
				name: 'getPartShadedViews',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/shadedviews',
				description: 'get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/shadedviews',
			},
			{
				name: 'getBendTable',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/sheetmetal/bendtable',
				description: 'Get Sheet Metal Bend Table. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/sheetmetal/bendtable',
			},
			{
				name: 'exportStl',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
				description: 'get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
			},
			{
				name: 'getEdges',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatededges',
				description: 'Tessellated Edges - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatededges',
			},
			{
				name: 'getStandardContentPartMetadata',
				value: 'GET /parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
				description: 'get /parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
			},
			{
				name: 'updateStandardContentPartMetadata',
				value: 'POST /parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
				description: 'post /parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
			},
		],
		default: 'GET /parts/d/{did}/{wvm}/{wvmid}',
		description: 'The operation to perform',
	},
	...getPartsWMV.description,
	...getPartsWMVE.description,
	...getBodyDetails.description,
	...getBoundingBoxes.description,
	...exportPartGltf.description,
	...getMassProperties.description,
	...getPartMetadata.description,
	...updatePartMetadata.description,
	...exportPS.description,
	...getPartShadedViews.description,
	...getBendTable.description,
	...exportStl.description,
	...getEdges.description,
	...getStandardContentPartMetadata.description,
	...updateStandardContentPartMetadata.description,
];

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
import * as getFaces_1 from './getFaces_1';
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
	getFaces_1,
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
				description: 'Retrieve a list of parts by document ID, and workspace or version or microversion ID. - get /parts/d/{did}/{wvm}/{wvmid}',
			},
			{
				name: 'getPartsWMVE',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'Retrieve a list of parts from a tab by document ID, workspace or version or microversion ID, and tab ID. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}',
			},
			{
				name: 'getBodyDetails',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/bodydetails',
				description: 'All coordinates are in meters. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/bodydetails',
			},
			{
				name: 'getBoundingBoxes',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/boundingboxes',
				description: 'Retrieve part bounding boxes by document ID, workspace or version or microversion ID, tab ID, and part ID. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/boundingboxes',
			},
			{
				name: 'exportPartGltf',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/gltf',
				description: 'Retrieve GLTF for part by document ID, workspace or version or microversion ID, tab ID, and part ID. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/gltf',
			},
			{
				name: 'getMassProperties',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/massproperties',
				description: 'Retrieve mass properties of a part document ID, workspace or version or microversion ID, tab ID, and part ID. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/massproperties',
			},
			{
				name: 'getPartMetadata',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
				description: "Get a part's metadata. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata",
			},
			{
				name: 'updatePartMetadata',
				value: 'POST /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata',
				description: "Update a part's metadata - post /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/metadata",
			},
			{
				name: 'exportPS',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/parasolid',
				description: 'Export part to Parasolid by document ID, workspace or version or microversion ID, tab ID, and part ID. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/parasolid',
			},
			{
				name: 'getPartShadedViews',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/shadedviews',
				description: 'Retrieve shaded views of a part by document ID, workspace or version or microversion ID, tab ID, and part ID. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/shadedviews',
			},
			{
				name: 'getBendTable',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/sheetmetal/bendtable',
				description: 'Retrieve sheet metal bend table by document ID, workspace or version or microversion ID, tab ID, and part ID. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/sheetmetal/bendtable',
			},
			{
				name: 'exportStl',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
				description: 'Retrieve part STL by document ID, workspace or version or microversion ID, tab ID, and part ID. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
			},
			{
				name: 'getEdges',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatededges',
				description: 'Retrieve tessellated edges of a part by document ID, workspace or version or microversion ID, tab ID, and part ID. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatededges',
			},
			{
				name: 'getFaces_1',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatedfaces',
				description: 'Get the tessellated faces of a part. The accuracy of the tessellation approximation to exact - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatedfaces',
			},
			{
				name: 'getStandardContentPartMetadata',
				value: 'GET /parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
				description: 'Get metadata for a standard content part in the context of a user or company - get /parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
			},
			{
				name: 'updateStandardContentPartMetadata',
				value: 'POST /parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
				description: 'Update metadata for a standard content part in the context of a company or user - post /parts/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/partid/{partid}/metadata',
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
	...getFaces_1.description,
	...getStandardContentPartMetadata.description,
	...updateStandardContentPartMetadata.description,
];

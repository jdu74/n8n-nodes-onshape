import * as ExportPartGltf from './exportPartGltf';
import * as ExportPs from './exportPS';
import * as ExportStl from './exportStl';
import * as GetBendTable from './getBendTable';
import * as GetBodyDetails from './getBodyDetails';
import * as GetBoundingBoxes from './getBoundingBoxes';
import * as GetEdges from './getEdges';
import * as GetFaces_1 from './getFaces_1';
import * as GetMassProperties from './getMassProperties';
import * as GetPartShadedViews from './getPartShadedViews';
import * as GetPartsWmv from './getPartsWMV';
import * as GetPartsWmve from './getPartsWMVE';

import { INodeProperties } from 'n8n-workflow';

export {
	ExportPartGltf,
	ExportPs,
	ExportStl,
	GetBendTable,
	GetBodyDetails,
	GetBoundingBoxes,
	GetEdges,
	GetFaces_1,
	GetMassProperties,
	GetPartShadedViews,
	GetPartsWmv,
	GetPartsWmve,
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
					'Part',
				],
			},
		},
		default: 'GET /parts/d/{did}/{wvm}/{wvmid}',
		options: [
			{
				name: 'exportPartGltf',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/gltf',
				description: 'Export a part as a glTF file. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/gltf',
				action: 'Export Part Gltf',
			},
			{
				name: 'exportPS',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/parasolid',
				description: 'Export a part as a Parasolid file. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/parasolid',
				action: 'Export Ps',
			},
			{
				name: 'exportStl',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
				description: 'Export a part as an STL file. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
				action: 'Export Stl',
			},
			{
				name: 'getBendTable',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/sheetmetal/bendtable',
				description: "Get a part's sheet metal bend table. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/sheetmetal/bendtable",
				action: 'Get Bend Table',
			},
			{
				name: 'getBodyDetails',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/bodydetails',
				description: "Get a part's body details. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/bodydetails",
				action: 'Get Body Details',
			},
			{
				name: 'getBoundingBoxes',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/boundingboxes',
				description: "Get a part's bounding box details. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/boundingboxes",
				action: 'Get Bounding Boxes',
			},
			{
				name: 'getEdges',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatededges',
				description: "Get a list of a part's tessellation edges. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatededges",
				action: 'Get Edges',
			},
			{
				name: 'getFaces_1',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatedfaces',
				description: "Get a list of a part's tessellation faces. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatedfaces",
				action: 'Get Faces 1',
			},
			{
				name: 'getMassProperties',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/massproperties',
				description: "Get a part's mass properties. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/massproperties",
				action: 'Get Mass Properties',
			},
			{
				name: 'getPartShadedViews',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/shadedviews',
				description: "Get a part's shaded views. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/shadedviews",
				action: 'Get Part Shaded Views',
			},
			{
				name: 'getPartsWMV',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}',
				description: 'Get all parts in a workspace, version, or microversion. - get /parts/d/{did}/{wvm}/{wvmid}',
				action: 'Get Parts Wmv',
			},
			{
				name: 'getPartsWMVE',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'Get all parts in an element. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}',
				action: 'Get Parts Wmve',
			},
		],
	},
	...ExportPartGltf.description,
	...ExportPs.description,
	...ExportStl.description,
	...GetBendTable.description,
	...GetBodyDetails.description,
	...GetBoundingBoxes.description,
	...GetEdges.description,
	...GetFaces_1.description,
	...GetMassProperties.description,
	...GetPartShadedViews.description,
	...GetPartsWmv.description,
	...GetPartsWmve.description,
];

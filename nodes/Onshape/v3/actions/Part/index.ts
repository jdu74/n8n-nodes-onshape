import * as GetPartsWmv from './getPartsWMV';
import * as GetPartsWmve from './getPartsWMVE';
import * as GetBodyDetails from './getBodyDetails';
import * as GetBoundingBoxes from './getBoundingBoxes';
import * as ExportPartGltf from './exportPartGltf';
import * as GetMassProperties from './getMassProperties';
import * as ExportPs from './exportPS';
import * as GetPartShadedViews from './getPartShadedViews';
import * as GetBendTable from './getBendTable';
import * as ExportStl from './exportStl';
import * as GetEdges from './getEdges';
import * as GetFaces_1 from './getFaces_1';

import { INodeProperties } from 'n8n-workflow';

export {
	GetPartsWmv,
	GetPartsWmve,
	GetBodyDetails,
	GetBoundingBoxes,
	ExportPartGltf,
	GetMassProperties,
	ExportPs,
	GetPartShadedViews,
	GetBendTable,
	ExportStl,
	GetEdges,
	GetFaces_1,
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
				description: 'Get all parts in a workspace, version, or microversion. - get /parts/d/{did}/{wvm}/{wvmid}',
			},
			{
				name: 'getPartsWMVE',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'Get all parts in an element. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}',
			},
			{
				name: 'getBodyDetails',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/bodydetails',
				description: 'All coordinates are in meters (m). - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/bodydetails',
			},
			{
				name: 'getBoundingBoxes',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/boundingboxes',
				description: "Get a part's bounding box details. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/boundingboxes",
			},
			{
				name: 'exportPartGltf',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/gltf',
				description: 'Returns a 307 redirect from which to download the exported file. See [API Guide: Model Translation](https://onshape-public.github.io/docs/api-adv/translation/) for more details. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/gltf',
			},
			{
				name: 'getMassProperties',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/massproperties',
				description: 'Parts must have density. If three mass properties are returned, the first is the calculated mass; the second and third are the minimum and maximum possible values considering tolerance. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/massproperties',
			},
			{
				name: 'exportPS',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/parasolid',
				description: 'Returns a 307 redirect from which to download the exported file. See [API Guide: Model Translation](https://onshape-public.github.io/docs/api-adv/translation/) for more details. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/parasolid',
			},
			{
				name: 'getPartShadedViews',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/shadedviews',
				description: "Get a part's shaded views. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/shadedviews",
			},
			{
				name: 'getBendTable',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/sheetmetal/bendtable',
				description: "Get a part's sheet metal bend table. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/sheetmetal/bendtable",
			},
			{
				name: 'exportStl',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
				description: 'Returns a 307 redirect from which to download the exported file. See [API Guide: Model Translation](https://onshape-public.github.io/docs/api-adv/translation/) for more details. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl',
			},
			{
				name: 'getEdges',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatededges',
				description: "Returns the coordinates (in meters) of each edge's endpoints. - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatededges",
			},
			{
				name: 'getFaces_1',
				value: 'GET /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatedfaces',
				description: 'Coordinates are in meters (m). - get /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatedfaces',
			},
		],
		default: 'GET /parts/d/{did}/{wvm}/{wvmid}',
		description: 'The operation to perform',
	},
	...GetPartsWmv.description,
	...GetPartsWmve.description,
	...GetBodyDetails.description,
	...GetBoundingBoxes.description,
	...ExportPartGltf.description,
	...GetMassProperties.description,
	...ExportPs.description,
	...GetPartShadedViews.description,
	...GetBendTable.description,
	...ExportStl.description,
	...GetEdges.description,
	...GetFaces_1.description,
];

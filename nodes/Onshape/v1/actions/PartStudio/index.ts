import * as getPartStudioFeatures from './getPartStudioFeatures';
import * as addPartStudioFeature from './addPartStudioFeature';
import * as comparePartStudios from './comparePartStudios';
import * as createPartStudio from './createPartStudio';
import * as createPartStudioTranslation from './createPartStudioTranslation';
import * as updatePartStudioFeature from './updatePartStudioFeature';
import * as deletePartStudioFeature from './deletePartStudioFeature';
import * as evalFeatureScript from './evalFeatureScript';
import * as exportParasolid from './exportParasolid';
import * as exportPartStudioGltf from './exportPartStudioGltf';
import * as exportPartStudioStl from './exportPartStudioStl';
import * as getFeatureScriptRepresentation from './getFeatureScriptRepresentation';
import * as getFeatureScriptTable from './getFeatureScriptTable';
import * as getPartStudioBodyDetails from './getPartStudioBodyDetails';
import * as getPartStudioBoundingBoxes from './getPartStudioBoundingBoxes';
import * as getPartStudioEdges from './getPartStudioEdges';
import * as getPartStudioFeatureSpecs from './getPartStudioFeatureSpecs';
import * as getPartStudioMassProperties from './getPartStudioMassProperties';
import * as getPartStudioNamedViews from './getPartStudioNamedViews';
import * as getPartStudioShadedViews from './getPartStudioShadedViews';
import * as translateIds from './translateIds';
import * as updateFeatures from './updateFeatures';
import * as updateRollback from './updateRollback';

import { INodeProperties } from 'n8n-workflow';

export {
	getPartStudioFeatures,
	addPartStudioFeature,
	comparePartStudios,
	createPartStudio,
	createPartStudioTranslation,
	updatePartStudioFeature,
	deletePartStudioFeature,
	evalFeatureScript,
	exportParasolid,
	exportPartStudioGltf,
	exportPartStudioStl,
	getFeatureScriptRepresentation,
	getFeatureScriptTable,
	getPartStudioBodyDetails,
	getPartStudioBoundingBoxes,
	getPartStudioEdges,
	getPartStudioFeatureSpecs,
	getPartStudioMassProperties,
	getPartStudioNamedViews,
	getPartStudioShadedViews,
	translateIds,
	updateFeatures,
	updateRollback,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'PartStudio',
				],
			},
		},
		options: [
			{
				name: 'getPartStudioFeatures',
				value: 'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				description: 'Get Feature List - get /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
			},
			{
				name: 'addPartStudioFeature',
				value: 'POST /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				description: 'Add Feature - post /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
			},
			{
				name: 'comparePartStudios',
				value: 'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
				description: 'Compare Part Studios - get /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
			},
			{
				name: 'createPartStudio',
				value: 'POST /api/partstudios/d/{did}/w/{wid}',
				description: 'Create Part Studio - post /api/partstudios/d/{did}/w/{wid}',
			},
			{
				name: 'createPartStudioTranslation',
				value: 'POST /api/partstudios/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				description: 'Create Part Studio translation - post /api/partstudios/d/{did}/{wv}/{wvid}/e/{eid}/translations',
			},
			{
				name: 'updatePartStudioFeature',
				value: 'POST /api/partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				description: 'Update Feature - post /api/partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
			},
			{
				name: 'deletePartStudioFeature',
				value: 'DELETE /api/partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				description: 'Delete Feature - delete /api/partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
			},
			{
				name: 'evalFeatureScript',
				value: 'POST /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescript',
				description: 'post /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescript',
			},
			{
				name: 'exportParasolid',
				value: 'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/parasolid',
				description: 'Export Part Studio to Parasolid - get /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/parasolid',
			},
			{
				name: 'exportPartStudioGltf',
				value: 'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/gltf',
				description: 'Export glTF for parts in a part studio - get /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/gltf',
			},
			{
				name: 'exportPartStudioStl',
				value: 'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/stl',
				description: 'Export Part Studio to STL - get /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/stl',
			},
			{
				name: 'getFeatureScriptRepresentation',
				value: 'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescriptrepresentation',
				description: 'get /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescriptrepresentation',
			},
			{
				name: 'getFeatureScriptTable',
				value: 'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/fstable',
				description: 'get /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/fstable',
			},
			{
				name: 'getPartStudioBodyDetails',
				value: 'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/bodydetails',
				description: 'Array of body information - get /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/bodydetails',
			},
			{
				name: 'getPartStudioBoundingBoxes',
				value: 'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
				description: 'Mass properties of parts or a PartStudio. - get /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
			},
			{
				name: 'getPartStudioEdges',
				value: 'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatededges',
				description: 'get /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatededges',
			},
			{
				name: 'getPartStudioFeatureSpecs',
				value: 'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
				description: 'Get Feature Specs - get /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
			},
			{
				name: 'getPartStudioMassProperties',
				value: 'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
				description: 'Mass properties of parts or a PartStudio. - get /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
			},
			{
				name: 'getPartStudioNamedViews',
				value: 'GET /api/partstudios/d/{did}/e/{eid}/namedViews',
				description: 'Get Named Views - get /api/partstudios/d/{did}/e/{eid}/namedViews',
			},
			{
				name: 'getPartStudioShadedViews',
				value: 'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
				description: 'Get Shaded Views - get /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
			},
			{
				name: 'translateIds',
				value: 'POST /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/idtranslations',
				description: 'Id Translations - post /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/idtranslations',
			},
			{
				name: 'updateFeatures',
				value: 'POST /api/partstudios/d/{did}/w/{wid}/e/{eid}/features/updates',
				description: 'Update Features - post /api/partstudios/d/{did}/w/{wid}/e/{eid}/features/updates',
			},
			{
				name: 'updateRollback',
				value: 'POST /api/partstudios/d/{did}/w/{wid}/e/{eid}/features/rollback',
				description: 'Update Feature Rollback - post /api/partstudios/d/{did}/w/{wid}/e/{eid}/features/rollback',
			},
		],
		default: 'GET /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
		description: 'The operation to perform',
	},
	...getPartStudioFeatures.description,
	...addPartStudioFeature.description,
	...comparePartStudios.description,
	...createPartStudio.description,
	...createPartStudioTranslation.description,
	...updatePartStudioFeature.description,
	...deletePartStudioFeature.description,
	...evalFeatureScript.description,
	...exportParasolid.description,
	...exportPartStudioGltf.description,
	...exportPartStudioStl.description,
	...getFeatureScriptRepresentation.description,
	...getFeatureScriptTable.description,
	...getPartStudioBodyDetails.description,
	...getPartStudioBoundingBoxes.description,
	...getPartStudioEdges.description,
	...getPartStudioFeatureSpecs.description,
	...getPartStudioMassProperties.description,
	...getPartStudioNamedViews.description,
	...getPartStudioShadedViews.description,
	...translateIds.description,
	...updateFeatures.description,
	...updateRollback.description,
];

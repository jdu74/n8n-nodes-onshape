import * as getPartStudioNamedViews from './getPartStudioNamedViews';
import * as createPartStudio from './createPartStudio';
import * as updatePartStudioFeature from './updatePartStudioFeature';
import * as deletePartStudioFeature from './deletePartStudioFeature';
import * as updateRollback from './updateRollback';
import * as updateFeatures from './updateFeatures';
import * as getPartStudioBodyDetails from './getPartStudioBodyDetails';
import * as getPartStudioBoundingBoxes from './getPartStudioBoundingBoxes';
import * as comparePartStudios from './comparePartStudios';
import * as getPartStudioFeatures from './getPartStudioFeatures';
import * as addPartStudioFeature from './addPartStudioFeature';
import * as evalFeatureScript from './evalFeatureScript';
import * as getFeatureScriptRepresentation from './getFeatureScriptRepresentation';
import * as getPartStudioFeatureSpecs from './getPartStudioFeatureSpecs';
import * as getFeatureScriptTable from './getFeatureScriptTable';
import * as exportPartStudioGltf from './exportPartStudioGltf';
import * as translateIds from './translateIds';
import * as getPartStudioMassProperties from './getPartStudioMassProperties';
import * as exportParasolid from './exportParasolid';
import * as getPartStudioShadedViews from './getPartStudioShadedViews';
import * as exportPartStudioStl from './exportPartStudioStl';
import * as getPartStudioEdges from './getPartStudioEdges';
import * as createPartStudioTranslation from './createPartStudioTranslation';

import { INodeProperties } from 'n8n-workflow';

export {
	getPartStudioNamedViews,
	createPartStudio,
	updatePartStudioFeature,
	deletePartStudioFeature,
	updateRollback,
	updateFeatures,
	getPartStudioBodyDetails,
	getPartStudioBoundingBoxes,
	comparePartStudios,
	getPartStudioFeatures,
	addPartStudioFeature,
	evalFeatureScript,
	getFeatureScriptRepresentation,
	getPartStudioFeatureSpecs,
	getFeatureScriptTable,
	exportPartStudioGltf,
	translateIds,
	getPartStudioMassProperties,
	exportParasolid,
	getPartStudioShadedViews,
	exportPartStudioStl,
	getPartStudioEdges,
	createPartStudioTranslation,
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
				name: 'getPartStudioNamedViews',
				value: 'GET /partstudios/d/{did}/e/{eid}/namedViews',
				description: 'Get Named Views - get /partstudios/d/{did}/e/{eid}/namedViews',
			},
			{
				name: 'createPartStudio',
				value: 'POST /partstudios/d/{did}/w/{wid}',
				description: 'Create Part Studio - post /partstudios/d/{did}/w/{wid}',
			},
			{
				name: 'updatePartStudioFeature',
				value: 'POST /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				description: 'Update Feature - post /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
			},
			{
				name: 'deletePartStudioFeature',
				value: 'DELETE /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				description: 'Delete Feature - delete /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
			},
			{
				name: 'updateRollback',
				value: 'POST /partstudios/d/{did}/w/{wid}/e/{eid}/features/rollback',
				description: 'Update Feature Rollback - post /partstudios/d/{did}/w/{wid}/e/{eid}/features/rollback',
			},
			{
				name: 'updateFeatures',
				value: 'POST /partstudios/d/{did}/w/{wid}/e/{eid}/features/updates',
				description: 'Update Features - post /partstudios/d/{did}/w/{wid}/e/{eid}/features/updates',
			},
			{
				name: 'getPartStudioBodyDetails',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/bodydetails',
				description: 'Array of body information - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/bodydetails',
			},
			{
				name: 'getPartStudioBoundingBoxes',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
				description: 'Mass properties of parts or a PartStudio. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
			},
			{
				name: 'comparePartStudios',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
				description: 'Compare Part Studios - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
			},
			{
				name: 'getPartStudioFeatures',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				description: 'Get Feature List - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
			},
			{
				name: 'addPartStudioFeature',
				value: 'POST /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				description: 'Add Feature - post /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
			},
			{
				name: 'evalFeatureScript',
				value: 'POST /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescript',
				description: 'post /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescript',
			},
			{
				name: 'getFeatureScriptRepresentation',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescriptrepresentation',
				description: 'get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescriptrepresentation',
			},
			{
				name: 'getPartStudioFeatureSpecs',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
				description: 'Get Feature Specs - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
			},
			{
				name: 'getFeatureScriptTable',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/fstable',
				description: 'get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/fstable',
			},
			{
				name: 'exportPartStudioGltf',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/gltf',
				description: 'Export glTF for parts in a part studio - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/gltf',
			},
			{
				name: 'translateIds',
				value: 'POST /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/idtranslations',
				description: 'Id Translations - post /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/idtranslations',
			},
			{
				name: 'getPartStudioMassProperties',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
				description: 'Mass properties of parts or a PartStudio. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
			},
			{
				name: 'exportParasolid',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/parasolid',
				description: 'Export Part Studio to Parasolid - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/parasolid',
			},
			{
				name: 'getPartStudioShadedViews',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
				description: 'Get Shaded Views - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
			},
			{
				name: 'exportPartStudioStl',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/stl',
				description: 'Export Part Studio to STL - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/stl',
			},
			{
				name: 'getPartStudioEdges',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatededges',
				description: 'get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatededges',
			},
			{
				name: 'createPartStudioTranslation',
				value: 'POST /partstudios/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				description: 'Create Part Studio translation - post /partstudios/d/{did}/{wv}/{wvid}/e/{eid}/translations',
			},
		],
		default: 'GET /partstudios/d/{did}/e/{eid}/namedViews',
		description: 'The operation to perform',
	},
	...getPartStudioNamedViews.description,
	...createPartStudio.description,
	...updatePartStudioFeature.description,
	...deletePartStudioFeature.description,
	...updateRollback.description,
	...updateFeatures.description,
	...getPartStudioBodyDetails.description,
	...getPartStudioBoundingBoxes.description,
	...comparePartStudios.description,
	...getPartStudioFeatures.description,
	...addPartStudioFeature.description,
	...evalFeatureScript.description,
	...getFeatureScriptRepresentation.description,
	...getPartStudioFeatureSpecs.description,
	...getFeatureScriptTable.description,
	...exportPartStudioGltf.description,
	...translateIds.description,
	...getPartStudioMassProperties.description,
	...exportParasolid.description,
	...getPartStudioShadedViews.description,
	...exportPartStudioStl.description,
	...getPartStudioEdges.description,
	...createPartStudioTranslation.description,
];

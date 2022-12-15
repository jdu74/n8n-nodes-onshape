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
import * as getPartStudioFaces from './getPartStudioFaces';
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
	getPartStudioFaces,
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
				description: 'get /partstudios/d/{did}/e/{eid}/namedViews',
			},
			{
				name: 'createPartStudio',
				value: 'POST /partstudios/d/{did}/w/{wid}',
				description: 'Create Part Studio by document ID and workspace ID. - post /partstudios/d/{did}/w/{wid}',
			},
			{
				name: 'updatePartStudioFeature',
				value: 'POST /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				description: 'Update feature by document ID, workspace ID, tab ID, and feature ID. - post /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
			},
			{
				name: 'deletePartStudioFeature',
				value: 'DELETE /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				description: 'Delete feature by document ID, workspace ID, tab ID, and feature ID. - delete /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
			},
			{
				name: 'updateRollback',
				value: 'POST /partstudios/d/{did}/w/{wid}/e/{eid}/features/rollback',
				description: 'Update feature rollback by document ID, workspace ID, and tab ID. - post /partstudios/d/{did}/w/{wid}/e/{eid}/features/rollback',
			},
			{
				name: 'updateFeatures',
				value: 'POST /partstudios/d/{did}/w/{wid}/e/{eid}/features/updates',
				description: 'Update features by document ID, workspace ID, and tab ID. - post /partstudios/d/{did}/w/{wid}/e/{eid}/features/updates',
			},
			{
				name: 'getPartStudioBodyDetails',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/bodydetails',
				description: 'Retrieve an array of body details by document ID, workspace or version or microversion ID, and tab ID. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/bodydetails',
			},
			{
				name: 'getPartStudioBoundingBoxes',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
				description: 'Retrieve an array of Mass properties of parts or a Part Studio by document ID, workspace or version or microversion ID, and tab ID. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
			},
			{
				name: 'comparePartStudios',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
				description: 'Compare Part Studios by document ID, workspace or version or microversion ID, and tab ID. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
			},
			{
				name: 'getPartStudioFeatures',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				description: 'Retrieve a feature list of parts or a Part Studio by document ID, workspace or version or microversion ID, and tab ID. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
			},
			{
				name: 'addPartStudioFeature',
				value: 'POST /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				description: 'Add feature to the feature list for a Part Studio by document ID, workspace or version or microversion ID, and tab ID. - post /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
			},
			{
				name: 'evalFeatureScript',
				value: 'POST /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescript',
				description: 'Evaluate FeatureScript for a Part Studio by document ID, workspace or version or microversion ID, and tab ID. - post /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescript',
			},
			{
				name: 'getFeatureScriptRepresentation',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescriptrepresentation',
				description: 'Retrieve FeatureScript representation of the Part Studio by document ID, workspace or version or microversion ID, and tab ID. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescriptrepresentation',
			},
			{
				name: 'getPartStudioFeatureSpecs',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
				description: 'Retrieve feature specifications of the Part Studio by document ID, workspace or version or microversion ID, and tab ID. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
			},
			{
				name: 'getFeatureScriptTable',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/fstable',
				description: 'Retrieve FeatureScript table of the Part Studio or part by document ID, workspace or version or microversion ID, and tab ID. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/fstable',
			},
			{
				name: 'exportPartStudioGltf',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/gltf',
				description: 'Export GLTF representation for parts in a Part Studio by document ID, workspace or version or microversion ID, and tab ID. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/gltf',
			},
			{
				name: 'translateIds',
				value: 'POST /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/idtranslations',
				description: 'Create Part Studio ID translation by document ID, workspace or version or microversion ID, and tab ID. - post /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/idtranslations',
			},
			{
				name: 'getPartStudioMassProperties',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
				description: 'Retrieve mass properties of the Part Studio by document ID, workspace or version or microversion ID, and tab ID. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
			},
			{
				name: 'exportParasolid',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/parasolid',
				description: 'Export Part Studio to Parasolid by document ID, workspace or version or microversion ID, and tab ID. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/parasolid',
			},
			{
				name: 'getPartStudioShadedViews',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
				description: 'Retrieve shaded views of the Part Studio by document ID, workspace or version or microversion ID, and tab ID. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
			},
			{
				name: 'exportPartStudioStl',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/stl',
				description: 'Export Part Studio to STL by document ID, workspace or version or microversion ID, and tab ID. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/stl',
			},
			{
				name: 'getPartStudioEdges',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatededges',
				description: 'Retrieve tessellated edges of the parts in the Part Studio by document ID, workspace or version or microversion ID, and tab ID. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatededges',
			},
			{
				name: 'getPartStudioFaces',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatedfaces',
				description: 'get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatedfaces',
			},
			{
				name: 'createPartStudioTranslation',
				value: 'POST /partstudios/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				description: 'Create Part Studio translation by document ID, workspace or version ID, and tab ID. - post /partstudios/d/{did}/{wv}/{wvid}/e/{eid}/translations',
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
	...getPartStudioFaces.description,
	...createPartStudioTranslation.description,
];

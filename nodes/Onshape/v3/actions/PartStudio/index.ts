import * as AddPartStudioFeature from './addPartStudioFeature';
import * as ComparePartStudios from './comparePartStudios';
import * as CreatePartStudio from './createPartStudio';
import * as CreatePartStudioTranslation from './createPartStudioTranslation';
import * as DeletePartStudioFeature from './deletePartStudioFeature';
import * as EvalFeatureScript from './evalFeatureScript';
import * as ExportParasolid from './exportParasolid';
import * as ExportPartStudioGltf from './exportPartStudioGltf';
import * as ExportPartStudioStl from './exportPartStudioStl';
import * as GetFeatureScriptRepresentation from './getFeatureScriptRepresentation';
import * as GetFeatureScriptTable from './getFeatureScriptTable';
import * as GetPartStudioBodyDetails from './getPartStudioBodyDetails';
import * as GetPartStudioBoundingBoxes from './getPartStudioBoundingBoxes';
import * as GetPartStudioEdges from './getPartStudioEdges';
import * as GetPartStudioFaces from './getPartStudioFaces';
import * as GetPartStudioFeatures from './getPartStudioFeatures';
import * as GetPartStudioFeatureSpecs from './getPartStudioFeatureSpecs';
import * as GetPartStudioMassProperties from './getPartStudioMassProperties';
import * as GetPartStudioNamedViews from './getPartStudioNamedViews';
import * as GetPartStudioShadedViews from './getPartStudioShadedViews';
import * as TranslateIds from './translateIds';
import * as UpdateFeatures from './updateFeatures';
import * as UpdatePartStudioFeature from './updatePartStudioFeature';
import * as UpdateRollback from './updateRollback';

import { INodeProperties } from 'n8n-workflow';

export {
	AddPartStudioFeature,
	ComparePartStudios,
	CreatePartStudio,
	CreatePartStudioTranslation,
	DeletePartStudioFeature,
	EvalFeatureScript,
	ExportParasolid,
	ExportPartStudioGltf,
	ExportPartStudioStl,
	GetFeatureScriptRepresentation,
	GetFeatureScriptTable,
	GetPartStudioBodyDetails,
	GetPartStudioBoundingBoxes,
	GetPartStudioEdges,
	GetPartStudioFaces,
	GetPartStudioFeatures,
	GetPartStudioFeatureSpecs,
	GetPartStudioMassProperties,
	GetPartStudioNamedViews,
	GetPartStudioShadedViews,
	TranslateIds,
	UpdateFeatures,
	UpdatePartStudioFeature,
	UpdateRollback,
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
					'PartStudio',
				],
			},
		},
		default: 'GET /partstudios/d/{did}/e/{eid}/namedViews',
		options: [
			{
				name: 'addPartStudioFeature',
				value: 'POST /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				description: "Add a feature to the Part Studio's Feature List. - post /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features",
				action: 'Add Part Studio Feature',
			},
			{
				name: 'comparePartStudios',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
				description: 'Get the differences between two Part Studios in a single document. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
				action: 'Compare Part Studios',
			},
			{
				name: 'createPartStudio',
				value: 'POST /partstudios/d/{did}/w/{wid}',
				description: 'Create a new Part Studio in a document. - post /partstudios/d/{did}/w/{wid}',
				action: 'Create Part Studio',
			},
			{
				name: 'createPartStudioTranslation',
				value: 'POST /partstudios/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				description: 'Export a Part Studio to another format. - post /partstudios/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				action: 'Create Part Studio Translation',
			},
			{
				name: 'deletePartStudioFeature',
				value: 'DELETE /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				description: 'Delete a Part Studio feature. - delete /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				action: 'Delete Part Studio Feature',
			},
			{
				name: 'evalFeatureScript',
				value: 'POST /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescript',
				description: 'Evaluate the FeatureScript snippet for a Part Studio. - post /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescript',
				action: 'Eval Feature Script',
			},
			{
				name: 'exportParasolid',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/parasolid',
				description: 'Export the Part Studio as a Parasolid file. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/parasolid',
				action: 'Export Parasolid',
			},
			{
				name: 'exportPartStudioGltf',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/gltf',
				description: 'Export the Part Studio as a glTF file. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/gltf',
				action: 'Export Part Studio Gltf',
			},
			{
				name: 'exportPartStudioStl',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/stl',
				description: 'Export the Part Studio as an STL file. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/stl',
				action: 'Export Part Studio Stl',
			},
			{
				name: 'getFeatureScriptRepresentation',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescriptrepresentation',
				description: 'Get the FeatureScript representation of a Part Studio. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescriptrepresentation',
				action: 'Get Feature Script Representation',
			},
			{
				name: 'getFeatureScriptTable',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/fstable',
				description: 'Compute and return a FeatureScript table for a Part Studio. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/fstable',
				action: 'Get Feature Script Table',
			},
			{
				name: 'getPartStudioBodyDetails',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/bodydetails',
				description: 'Get the body details for a Part Studio. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/bodydetails',
				action: 'Get Part Studio Body Details',
			},
			{
				name: 'getPartStudioBoundingBoxes',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
				description: 'Get the bounding boxes for a Part Studio. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
				action: 'Get Part Studio Bounding Boxes',
			},
			{
				name: 'getPartStudioEdges',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatededges',
				description: 'Get a list of all edges in a Part Studio. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatededges',
				action: 'Get Part Studio Edges',
			},
			{
				name: 'getPartStudioFaces',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatedfaces',
				description: 'Get a list of all faces in a Part Studio. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatedfaces',
				action: 'Get Part Studio Faces',
			},
			{
				name: 'getPartStudioFeatures',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				description: 'Retrieve a feature list of parts or a Part Studio by document ID, workspace or version or microversion ID, and tab ID. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				action: 'Get Part Studio Features',
			},
			{
				name: 'getPartStudioFeatureSpecs',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
				description: 'Get the specs for a Part Studio feature. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
				action: 'Get Part Studio Feature Specs',
			},
			{
				name: 'getPartStudioMassProperties',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
				description: 'Get the mass properties for a Part Studio. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
				action: 'Get Part Studio Mass Properties',
			},
			{
				name: 'getPartStudioNamedViews',
				value: 'GET /partstudios/d/{did}/e/{eid}/namedViews',
				description: 'Get a list of all named views that exist in the Part Studio. - get /partstudios/d/{did}/e/{eid}/namedViews',
				action: 'Get Part Studio Named Views',
			},
			{
				name: 'getPartStudioShadedViews',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
				description: 'Get a list of shaded views for a Part Studio. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
				action: 'Get Part Studio Shaded Views',
			},
			{
				name: 'translateIds',
				value: 'POST /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/idtranslations',
				description: 'Find corresponding deterministic IDs from a source document microversion at the target version. - post /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/idtranslations',
				action: 'Translate Ids',
			},
			{
				name: 'updateFeatures',
				value: 'POST /partstudios/d/{did}/w/{wid}/e/{eid}/features/updates',
				description: "Update existing features' parameters. - post /partstudios/d/{did}/w/{wid}/e/{eid}/features/updates",
				action: 'Update Features',
			},
			{
				name: 'updatePartStudioFeature',
				value: 'POST /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				description: 'Update the definition of a Part Studio feature. - post /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				action: 'Update Part Studio Feature',
			},
			{
				name: 'updateRollback',
				value: 'POST /partstudios/d/{did}/w/{wid}/e/{eid}/features/rollback',
				description: 'Move the Feature List rollback bar in the Part Studio. - post /partstudios/d/{did}/w/{wid}/e/{eid}/features/rollback',
				action: 'Update Rollback',
			},
		],
	},
	...AddPartStudioFeature.description,
	...ComparePartStudios.description,
	...CreatePartStudio.description,
	...CreatePartStudioTranslation.description,
	...DeletePartStudioFeature.description,
	...EvalFeatureScript.description,
	...ExportParasolid.description,
	...ExportPartStudioGltf.description,
	...ExportPartStudioStl.description,
	...GetFeatureScriptRepresentation.description,
	...GetFeatureScriptTable.description,
	...GetPartStudioBodyDetails.description,
	...GetPartStudioBoundingBoxes.description,
	...GetPartStudioEdges.description,
	...GetPartStudioFaces.description,
	...GetPartStudioFeatures.description,
	...GetPartStudioFeatureSpecs.description,
	...GetPartStudioMassProperties.description,
	...GetPartStudioNamedViews.description,
	...GetPartStudioShadedViews.description,
	...TranslateIds.description,
	...UpdateFeatures.description,
	...UpdatePartStudioFeature.description,
	...UpdateRollback.description,
];

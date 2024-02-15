import * as GetPartStudioNamedViews from './getPartStudioNamedViews';
import * as CreatePartStudio from './createPartStudio';
import * as UpdatePartStudioFeature from './updatePartStudioFeature';
import * as DeletePartStudioFeature from './deletePartStudioFeature';
import * as UpdateRollback from './updateRollback';
import * as UpdateFeatures from './updateFeatures';
import * as GetPartStudioBodyDetails from './getPartStudioBodyDetails';
import * as GetPartStudioBoundingBoxes from './getPartStudioBoundingBoxes';
import * as ComparePartStudios from './comparePartStudios';
import * as GetPartStudioFeatures from './getPartStudioFeatures';
import * as AddPartStudioFeature from './addPartStudioFeature';
import * as EvalFeatureScript from './evalFeatureScript';
import * as GetFeatureScriptRepresentation from './getFeatureScriptRepresentation';
import * as GetPartStudioFeatureSpecs from './getPartStudioFeatureSpecs';
import * as GetFeatureScriptTable from './getFeatureScriptTable';
import * as ExportPartStudioGltf from './exportPartStudioGltf';
import * as TranslateIds from './translateIds';
import * as GetPartStudioMassProperties from './getPartStudioMassProperties';
import * as ExportParasolid from './exportParasolid';
import * as GetPartStudioShadedViews from './getPartStudioShadedViews';
import * as ExportPartStudioStl from './exportPartStudioStl';
import * as GetPartStudioEdges from './getPartStudioEdges';
import * as GetPartStudioFaces from './getPartStudioFaces';
import * as CreatePartStudioTranslation from './createPartStudioTranslation';

import { INodeProperties } from 'n8n-workflow';

export {
	GetPartStudioNamedViews,
	CreatePartStudio,
	UpdatePartStudioFeature,
	DeletePartStudioFeature,
	UpdateRollback,
	UpdateFeatures,
	GetPartStudioBodyDetails,
	GetPartStudioBoundingBoxes,
	ComparePartStudios,
	GetPartStudioFeatures,
	AddPartStudioFeature,
	EvalFeatureScript,
	GetFeatureScriptRepresentation,
	GetPartStudioFeatureSpecs,
	GetFeatureScriptTable,
	ExportPartStudioGltf,
	TranslateIds,
	GetPartStudioMassProperties,
	ExportParasolid,
	GetPartStudioShadedViews,
	ExportPartStudioStl,
	GetPartStudioEdges,
	GetPartStudioFaces,
	CreatePartStudioTranslation,
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
				description: 'Returns a map from view name to view data for the given element - get /partstudios/d/{did}/e/{eid}/namedViews',
			},
			{
				name: 'createPartStudio',
				value: 'POST /partstudios/d/{did}/w/{wid}',
				description: 'Create a new Part Studio in a document. - post /partstudios/d/{did}/w/{wid}',
			},
			{
				name: 'updatePartStudioFeature',
				value: 'POST /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				description: 'Update the definition of a Part Studio feature. - post /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
			},
			{
				name: 'deletePartStudioFeature',
				value: 'DELETE /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				description: 'Delete a Part Studio feature. - delete /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
			},
			{
				name: 'updateRollback',
				value: 'POST /partstudios/d/{did}/w/{wid}/e/{eid}/features/rollback',
				description: 'Set to -1 to move the rollback bar to the end of the list. - post /partstudios/d/{did}/w/{wid}/e/{eid}/features/rollback',
			},
			{
				name: 'updateFeatures',
				value: 'POST /partstudios/d/{did}/w/{wid}/e/{eid}/features/updates',
				description: 'You can update multiple features with a single call. - post /partstudios/d/{did}/w/{wid}/e/{eid}/features/updates',
			},
			{
				name: 'getPartStudioBodyDetails',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/bodydetails',
				description: 'Get the body details for a Part Studio. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/bodydetails',
			},
			{
				name: 'getPartStudioBoundingBoxes',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
				description: 'Get the bounding boxes for a Part Studio. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
			},
			{
				name: 'comparePartStudios',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
				description: 'Get the differences between two Part Studios in a single document. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/compare',
			},
			{
				name: 'getPartStudioFeatures',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				description: 'Retrieve a feature list of parts or a Part Studio by document ID, workspace or version or microversion ID, and tab ID. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
			},
			{
				name: 'addPartStudioFeature',
				value: 'POST /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				description: 'See Feature List APIs in the [developer documentation](https://onshape-public.github.io/docs/api-adv/featureaccess/) for additional information. - post /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
			},
			{
				name: 'evalFeatureScript',
				value: 'POST /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescript',
				description: 'Evaluate the FeatureScript snippet for a Part Studio. - post /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescript',
			},
			{
				name: 'getFeatureScriptRepresentation',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescriptrepresentation',
				description: 'Get the FeatureScript representation of a Part Studio. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescriptrepresentation',
			},
			{
				name: 'getPartStudioFeatureSpecs',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
				description: 'Get the specs for a Part Studio feature. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
			},
			{
				name: 'getFeatureScriptTable',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/fstable',
				description: 'Compute and return a FeatureScript table for a Part Studio. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/fstable',
			},
			{
				name: 'exportPartStudioGltf',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/gltf',
				description: 'Returns the glTF representation. See [API Guide: Model Translation](https://onshape-public.github.io/docs/api-adv/translation/) - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/gltf',
			},
			{
				name: 'translateIds',
				value: 'POST /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/idtranslations',
				description: '* Deterministic IDs are only valid for one microversion. \n* This maps deterministic IDs between microversions in an attempt to find the corresponding entities in each version. - post /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/idtranslations',
			},
			{
				name: 'getPartStudioMassProperties',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
				description: 'If three mass properties are returned, the first is the calculated mass; the second and third are the minimum and maximum possible values considering tolerance. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
			},
			{
				name: 'exportParasolid',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/parasolid',
				description: 'Returns a 307 redirect from which to download the exported file. See [API Guide: Model Translation](https://onshape-public.github.io/docs/api-adv/translation/) for more details. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/parasolid',
			},
			{
				name: 'getPartStudioShadedViews',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
				description: 'Get a list of shaded views for a Part Studio. - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
			},
			{
				name: 'exportPartStudioStl',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/stl',
				description: 'Returns a 307 redirect from which to download the exported file. See [API Guide: Model Translation](https://onshape-public.github.io/docs/api-adv/translation/) - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/stl',
			},
			{
				name: 'getPartStudioEdges',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatededges',
				description: 'Returns the edges as tessellated data and includes display data. \nCoordinates are in meters (m). - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatededges',
			},
			{
				name: 'getPartStudioFaces',
				value: 'GET /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatedfaces',
				description: 'Coordinates are in meters (m). - get /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatedfaces',
			},
			{
				name: 'createPartStudioTranslation',
				value: 'POST /partstudios/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				description: '* Use `formatName` in the JSON request body to specify the export file type. Use [Translations/getAllTranslatorFormats](https://cad.onshape.com/glassworks/explorer/#/Translation/getAllTranslatorFormats) to get a list of valid export file formats. `\n* Set `storeInDocument` to `true` to export to a data file. Set to `false` to export to a blob element in the same document. \n* See [API Guide: Model Translation](https://onshape-public.github.io/docs/api-adv/translation/) for more details. - post /partstudios/d/{did}/{wv}/{wvid}/e/{eid}/translations',
			},
		],
		default: 'GET /partstudios/d/{did}/e/{eid}/namedViews',
		description: 'The operation to perform',
	},
	...GetPartStudioNamedViews.description,
	...CreatePartStudio.description,
	...UpdatePartStudioFeature.description,
	...DeletePartStudioFeature.description,
	...UpdateRollback.description,
	...UpdateFeatures.description,
	...GetPartStudioBodyDetails.description,
	...GetPartStudioBoundingBoxes.description,
	...ComparePartStudios.description,
	...GetPartStudioFeatures.description,
	...AddPartStudioFeature.description,
	...EvalFeatureScript.description,
	...GetFeatureScriptRepresentation.description,
	...GetPartStudioFeatureSpecs.description,
	...GetFeatureScriptTable.description,
	...ExportPartStudioGltf.description,
	...TranslateIds.description,
	...GetPartStudioMassProperties.description,
	...ExportParasolid.description,
	...GetPartStudioShadedViews.description,
	...ExportPartStudioStl.description,
	...GetPartStudioEdges.description,
	...GetPartStudioFaces.description,
	...CreatePartStudioTranslation.description,
];

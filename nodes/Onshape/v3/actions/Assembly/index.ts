import * as AddFeature from './addFeature';
import * as CreateAssembly from './createAssembly';
import * as CreateInstance from './createInstance';
import * as DeleteFeature from './deleteFeature';
import * as DeleteInstance from './deleteInstance';
import * as GetAssemblyBoundingBoxes from './getAssemblyBoundingBoxes';
import * as GetAssemblyDefinition from './getAssemblyDefinition';
import * as GetAssemblyMassProperties from './getAssemblyMassProperties';
import * as GetAssemblyShadedViews from './getAssemblyShadedViews';
import * as GetBillOfMaterials from './getBillOfMaterials';
import * as GetExplodedViews from './getExplodedViews';
import * as GetFeatures from './getFeatures';
import * as GetFeatureSpecs from './getFeatureSpecs';
import * as GetNamedPositions from './getNamedPositions';
import * as GetNamedViews from './getNamedViews';
import * as GetOrCreateBillOfMaterialsElement from './getOrCreateBillOfMaterialsElement';
import * as InsertTransformedInstances from './insertTransformedInstances';
import * as Modify from './modify';
import * as TransformOccurrences from './transformOccurrences';
import * as TranslateFormat from './translateFormat';
import * as UpdateFeature from './updateFeature';

import { INodeProperties } from 'n8n-workflow';

export {
	AddFeature,
	CreateAssembly,
	CreateInstance,
	DeleteFeature,
	DeleteInstance,
	GetAssemblyBoundingBoxes,
	GetAssemblyDefinition,
	GetAssemblyMassProperties,
	GetAssemblyShadedViews,
	GetBillOfMaterials,
	GetExplodedViews,
	GetFeatures,
	GetFeatureSpecs,
	GetNamedPositions,
	GetNamedViews,
	GetOrCreateBillOfMaterialsElement,
	InsertTransformedInstances,
	Modify,
	TransformOccurrences,
	TranslateFormat,
	UpdateFeature,
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
					'Assembly',
				],
			},
		},
		default: 'GET /assemblies/d/{did}/e/{eid}/namedViews',
		options: [
			{
				name: 'addFeature',
				value: 'POST /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				description: 'Add a feature to the assembly feature list. - post /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				action: 'Add Feature',
			},
			{
				name: 'createAssembly',
				value: 'POST /assemblies/d/{did}/w/{wid}',
				description: 'Create a new assembly tab in the document. - post /assemblies/d/{did}/w/{wid}',
				action: 'Create Assembly',
			},
			{
				name: 'createInstance',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/instances',
				description: 'Insert an instance of a part, sketch, assembly, or Part Studio into an assembly. - post /assemblies/d/{did}/w/{wid}/e/{eid}/instances',
				action: 'Create Instance',
			},
			{
				name: 'deleteFeature',
				value: 'DELETE /assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				description: 'Delete a feature from an assembly. - delete /assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				action: 'Delete Feature',
			},
			{
				name: 'deleteInstance',
				value: 'DELETE /assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid}',
				description: 'Delete an instance of an assembly. - delete /assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid}',
				action: 'Delete Instance',
			},
			{
				name: 'getAssemblyBoundingBoxes',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
				description: 'Get bounding box information for the specified assembly. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
				action: 'Get Assembly Bounding Boxes',
			},
			{
				name: 'getAssemblyDefinition',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'Get definition information for the specified assembly. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}',
				action: 'Get Assembly Definition',
			},
			{
				name: 'getAssemblyMassProperties',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
				description: 'Get the mass properties for the assembly. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
				action: 'Get Assembly Mass Properties',
			},
			{
				name: 'getAssemblyShadedViews',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
				description: 'Get an array of shaded view images for the document. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
				action: 'Get Assembly Shaded Views',
			},
			{
				name: 'getBillOfMaterials',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/bom',
				description: 'Get the Bill Of Materials (BOM) content for the specified assembly. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/bom',
				action: 'Get Bill Of Materials',
			},
			{
				name: 'getExplodedViews',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/explodedviews',
				description: 'Get a list of exploded views for the specified assembly. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/explodedviews',
				action: 'Get Exploded Views',
			},
			{
				name: 'getFeatures',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				description: 'Get the definitions of the specified features in an assembly. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				action: 'Get Features',
			},
			{
				name: 'getFeatureSpecs',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
				description: 'Get the feature spec definitions for an assembly. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
				action: 'Get Feature Specs',
			},
			{
				name: 'getNamedPositions',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/namedpositions',
				description: 'Get a list of all named positions for the assembly. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/namedpositions',
				action: 'Get Named Positions',
			},
			{
				name: 'getNamedViews',
				value: 'GET /assemblies/d/{did}/e/{eid}/namedViews',
				description: 'Get the view data for all named views for the specified element. - get /assemblies/d/{did}/e/{eid}/namedViews',
				action: 'Get Named Views',
			},
			{
				name: 'getOrCreateBillOfMaterialsElement',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/bomelement',
				description: 'Gets the Bill Of Materials (BOM) for the specified assembly, or creates a BOM if none exist. - post /assemblies/d/{did}/w/{wid}/e/{eid}/bomelement',
				action: 'Get Or Create Bill Of Materials Element',
			},
			{
				name: 'insertTransformedInstances',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/transformedinstances',
				description: 'Create new instances with transformation. - post /assemblies/d/{did}/w/{wid}/e/{eid}/transformedinstances',
				action: 'Insert Transformed Instances',
			},
			{
				name: 'modify',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/modify',
				description: 'Modify an assembly. - post /assemblies/d/{did}/w/{wid}/e/{eid}/modify',
				action: 'Modify',
			},
			{
				name: 'transformOccurrences',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/occurrencetransforms',
				description: 'Transform a list of assembly occurrences. - post /assemblies/d/{did}/w/{wid}/e/{eid}/occurrencetransforms',
				action: 'Transform Occurrences',
			},
			{
				name: 'translateFormat',
				value: 'POST /assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				description: 'Export the assembly to another format. - post /assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				action: 'Translate Format',
			},
			{
				name: 'updateFeature',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				description: 'Update an existing feature for an Assembly. - post /assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				action: 'Update Feature',
			},
		],
	},
	...AddFeature.description,
	...CreateAssembly.description,
	...CreateInstance.description,
	...DeleteFeature.description,
	...DeleteInstance.description,
	...GetAssemblyBoundingBoxes.description,
	...GetAssemblyDefinition.description,
	...GetAssemblyMassProperties.description,
	...GetAssemblyShadedViews.description,
	...GetBillOfMaterials.description,
	...GetExplodedViews.description,
	...GetFeatures.description,
	...GetFeatureSpecs.description,
	...GetNamedPositions.description,
	...GetNamedViews.description,
	...GetOrCreateBillOfMaterialsElement.description,
	...InsertTransformedInstances.description,
	...Modify.description,
	...TransformOccurrences.description,
	...TranslateFormat.description,
	...UpdateFeature.description,
];

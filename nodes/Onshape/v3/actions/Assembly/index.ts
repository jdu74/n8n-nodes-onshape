import * as GetNamedViews from './getNamedViews';
import * as CreateAssembly from './createAssembly';
import * as GetOrCreateBillOfMaterialsElement from './getOrCreateBillOfMaterialsElement';
import * as UpdateFeature from './updateFeature';
import * as DeleteFeature from './deleteFeature';
import * as DeleteInstance from './deleteInstance';
import * as CreateInstance from './createInstance';
import * as Modify from './modify';
import * as TransformOccurrences from './transformOccurrences';
import * as InsertTransformedInstances from './insertTransformedInstances';
import * as GetAssemblyDefinition from './getAssemblyDefinition';
import * as GetBillOfMaterials from './getBillOfMaterials';
import * as GetAssemblyBoundingBoxes from './getAssemblyBoundingBoxes';
import * as GetExplodedViews from './getExplodedViews';
import * as GetFeatures from './getFeatures';
import * as AddFeature from './addFeature';
import * as GetFeatureSpecs from './getFeatureSpecs';
import * as GetAssemblyMassProperties from './getAssemblyMassProperties';
import * as GetNamedPositions from './getNamedPositions';
import * as GetAssemblyShadedViews from './getAssemblyShadedViews';
import * as TranslateFormat from './translateFormat';

import { INodeProperties } from 'n8n-workflow';

export {
	GetNamedViews,
	CreateAssembly,
	GetOrCreateBillOfMaterialsElement,
	UpdateFeature,
	DeleteFeature,
	DeleteInstance,
	CreateInstance,
	Modify,
	TransformOccurrences,
	InsertTransformedInstances,
	GetAssemblyDefinition,
	GetBillOfMaterials,
	GetAssemblyBoundingBoxes,
	GetExplodedViews,
	GetFeatures,
	AddFeature,
	GetFeatureSpecs,
	GetAssemblyMassProperties,
	GetNamedPositions,
	GetAssemblyShadedViews,
	TranslateFormat,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Assembly',
				],
			},
		},
		options: [
			{
				name: 'getNamedViews',
				value: 'GET /assemblies/d/{did}/e/{eid}/namedViews',
				description: 'Get the view data for all named views for the specified element. - get /assemblies/d/{did}/e/{eid}/namedViews',
			},
			{
				name: 'createAssembly',
				value: 'POST /assemblies/d/{did}/w/{wid}',
				description: 'Create a new assembly tab in the document. - post /assemblies/d/{did}/w/{wid}',
			},
			{
				name: 'getOrCreateBillOfMaterialsElement',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/bomelement',
				description: 'Gets the Bill Of Materials (BOM) for the specified assembly, or creates a BOM if none exist. - post /assemblies/d/{did}/w/{wid}/e/{eid}/bomelement',
			},
			{
				name: 'updateFeature',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				description: 'Update an existing feature for an Assembly. - post /assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
			},
			{
				name: 'deleteFeature',
				value: 'DELETE /assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				description: 'Delete a feature from an assembly. - delete /assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
			},
			{
				name: 'deleteInstance',
				value: 'DELETE /assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid}',
				description: 'Delete an instance of an assembly. - delete /assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid}',
			},
			{
				name: 'createInstance',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/instances',
				description: 'Part Studio instances may include multiple parts. - post /assemblies/d/{did}/w/{wid}/e/{eid}/instances',
			},
			{
				name: 'modify',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/modify',
				description: 'This endpoint can include multiple modifications to an assembly with one change. For example, it can delete/suppress/unsuppress/transform multiple instances. It creates one history entry in the document history list. - post /assemblies/d/{did}/w/{wid}/e/{eid}/modify',
			},
			{
				name: 'transformOccurrences',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/occurrencetransforms',
				description: 'Transform a list of assembly occurrences. - post /assemblies/d/{did}/w/{wid}/e/{eid}/occurrencetransforms',
			},
			{
				name: 'insertTransformedInstances',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/transformedinstances',
				description: 'Create new instances with transformation. - post /assemblies/d/{did}/w/{wid}/e/{eid}/transformedinstances',
			},
			{
				name: 'getAssemblyDefinition',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'All coordinates and translation matrix components are in meters (m). - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}',
			},
			{
				name: 'getBillOfMaterials',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/bom',
				description: 'Returns the BOM in JSON in the Onshape BOM Standard format. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/bom',
			},
			{
				name: 'getAssemblyBoundingBoxes',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
				description: 'Get bounding box information for the specified assembly. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
			},
			{
				name: 'getExplodedViews',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/explodedviews',
				description: 'Get a list of exploded views for the specified assembly. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/explodedviews',
			},
			{
				name: 'getFeatures',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				description: 'Get the definitions of the specified features in an assembly. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
			},
			{
				name: 'addFeature',
				value: 'POST /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				description: 'Add a feature to the assembly feature list. - post /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
			},
			{
				name: 'getFeatureSpecs',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
				description: 'Get the feature spec definitions for an assembly. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
			},
			{
				name: 'getAssemblyMassProperties',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
				description: 'The assembly must contain parts that have assigned density or are globally overridden. If three mass properties are returned: the first is the calculated mass, and the second and third are the minimum and maximum possible values, considering tolerance. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
			},
			{
				name: 'getNamedPositions',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/namedpositions',
				description: 'Get a list of all named positions for the assembly. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/namedpositions',
			},
			{
				name: 'getAssemblyShadedViews',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
				description: 'Get an array of shaded view images for the document. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
			},
			{
				name: 'translateFormat',
				value: 'POST /assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				description: '* Use `formatName` in the JSON request body to specify the export file type. Use [Translations/getAllTranslatorFormats](https://cad.onshape.com/glassworks/explorer/#/Translation/getAllTranslatorFormats) to get a list of valid export file formats. Confirm that `couldBeAssembly=true.`\n* Set `storeInDocument` to `true` to export to a data file. Set to `false` to export to a blob element in the same document. \n* See [API Guide: Model Translation](https://onshape-public.github.io/docs/api-adv/translation/) for more details. - post /assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
			},
		],
		default: 'GET /assemblies/d/{did}/e/{eid}/namedViews',
		description: 'The operation to perform',
	},
	...GetNamedViews.description,
	...CreateAssembly.description,
	...GetOrCreateBillOfMaterialsElement.description,
	...UpdateFeature.description,
	...DeleteFeature.description,
	...DeleteInstance.description,
	...CreateInstance.description,
	...Modify.description,
	...TransformOccurrences.description,
	...InsertTransformedInstances.description,
	...GetAssemblyDefinition.description,
	...GetBillOfMaterials.description,
	...GetAssemblyBoundingBoxes.description,
	...GetExplodedViews.description,
	...GetFeatures.description,
	...AddFeature.description,
	...GetFeatureSpecs.description,
	...GetAssemblyMassProperties.description,
	...GetNamedPositions.description,
	...GetAssemblyShadedViews.description,
	...TranslateFormat.description,
];

import * as getNamedViews from './getNamedViews';
import * as createAssembly from './createAssembly';
import * as getOrCreateBillOfMaterialsElement from './getOrCreateBillOfMaterialsElement';
import * as updateFeature from './updateFeature';
import * as deleteFeature from './deleteFeature';
import * as deleteInstance from './deleteInstance';
import * as createInstance from './createInstance';
import * as transformOccurrences from './transformOccurrences';
import * as insertTransformedInstances from './insertTransformedInstances';
import * as getAssemblyDefinition from './getAssemblyDefinition';
import * as getBillOfMaterials from './getBillOfMaterials';
import * as getAssemblyBoundingBoxes from './getAssemblyBoundingBoxes';
import * as getFeatures from './getFeatures';
import * as addFeature from './addFeature';
import * as getFeatureSpecs from './getFeatureSpecs';
import * as getAssemblyMassProperties from './getAssemblyMassProperties';
import * as getAssemblyShadedViews from './getAssemblyShadedViews';
import * as translateFormat from './translateFormat';

import { INodeProperties } from 'n8n-workflow';

export {
	getNamedViews,
	createAssembly,
	getOrCreateBillOfMaterialsElement,
	updateFeature,
	deleteFeature,
	deleteInstance,
	createInstance,
	transformOccurrences,
	insertTransformedInstances,
	getAssemblyDefinition,
	getBillOfMaterials,
	getAssemblyBoundingBoxes,
	getFeatures,
	addFeature,
	getFeatureSpecs,
	getAssemblyMassProperties,
	getAssemblyShadedViews,
	translateFormat,
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
				description: 'get /assemblies/d/{did}/e/{eid}/namedViews',
			},
			{
				name: 'createAssembly',
				value: 'POST /assemblies/d/{did}/w/{wid}',
				description: 'Create Assembly - post /assemblies/d/{did}/w/{wid}',
			},
			{
				name: 'getOrCreateBillOfMaterialsElement',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/bomelement',
				description: 'Get or Create Bill of Materials Element - post /assemblies/d/{did}/w/{wid}/e/{eid}/bomelement',
			},
			{
				name: 'updateFeature',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				description: 'post /assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
			},
			{
				name: 'deleteFeature',
				value: 'DELETE /assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				description: 'Delete Feature - delete /assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
			},
			{
				name: 'deleteInstance',
				value: 'DELETE /assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid}',
				description: 'Delete assembly instance. - delete /assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid}',
			},
			{
				name: 'createInstance',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/instances',
				description: 'Create assembly instance - post /assemblies/d/{did}/w/{wid}/e/{eid}/instances',
			},
			{
				name: 'transformOccurrences',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/occurrencetransforms',
				description: 'Transform assembly occurrences. - post /assemblies/d/{did}/w/{wid}/e/{eid}/occurrencetransforms',
			},
			{
				name: 'insertTransformedInstances',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/transformedinstances',
				description: 'Create and transform assembly instances - post /assemblies/d/{did}/w/{wid}/e/{eid}/transformedinstances',
			},
			{
				name: 'getAssemblyDefinition',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'Assembly Definition. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}',
			},
			{
				name: 'getBillOfMaterials',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/bom',
				description: 'Get Bill of Materials - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/bom',
			},
			{
				name: 'getAssemblyBoundingBoxes',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
				description: 'Bounding Boxes. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
			},
			{
				name: 'getFeatures',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				description: 'Get Feature List - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
			},
			{
				name: 'addFeature',
				value: 'POST /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				description: 'post /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
			},
			{
				name: 'getFeatureSpecs',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
				description: 'get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
			},
			{
				name: 'getAssemblyMassProperties',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
				description: 'Mass properties of an Assembly. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
			},
			{
				name: 'getAssemblyShadedViews',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
				description: 'get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
			},
			{
				name: 'translateFormat',
				value: 'POST /assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				description: 'Create Assembly translation. - post /assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
			},
		],
		default: 'GET /assemblies/d/{did}/e/{eid}/namedViews',
		description: 'The operation to perform',
	},
	...getNamedViews.description,
	...createAssembly.description,
	...getOrCreateBillOfMaterialsElement.description,
	...updateFeature.description,
	...deleteFeature.description,
	...deleteInstance.description,
	...createInstance.description,
	...transformOccurrences.description,
	...insertTransformedInstances.description,
	...getAssemblyDefinition.description,
	...getBillOfMaterials.description,
	...getAssemblyBoundingBoxes.description,
	...getFeatures.description,
	...addFeature.description,
	...getFeatureSpecs.description,
	...getAssemblyMassProperties.description,
	...getAssemblyShadedViews.description,
	...translateFormat.description,
];

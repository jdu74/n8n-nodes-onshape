import * as getFeatures from './getFeatures';
import * as addFeature from './addFeature';
import * as createAssembly from './createAssembly';
import * as createInstance from './createInstance';
import * as updateFeature from './updateFeature';
import * as deleteFeature from './deleteFeature';
import * as deleteInstance from './deleteInstance';
import * as getAssemblyBoundingBoxes from './getAssemblyBoundingBoxes';
import * as getAssemblyDefinition from './getAssemblyDefinition';
import * as getAssemblyMassProperties from './getAssemblyMassProperties';
import * as getAssemblyShadedViews from './getAssemblyShadedViews';
import * as getBillOfMaterials from './getBillOfMaterials';
import * as getFeatureSpecs from './getFeatureSpecs';
import * as getNamedViews from './getNamedViews';
import * as getOrCreateBillOfMaterialsElement from './getOrCreateBillOfMaterialsElement';
import * as insertTransformedInstances from './insertTransformedInstances';
import * as transformOccurrences from './transformOccurrences';
import * as translateFormat from './translateFormat';

import { INodeProperties } from 'n8n-workflow';

export {
	getFeatures,
	addFeature,
	createAssembly,
	createInstance,
	updateFeature,
	deleteFeature,
	deleteInstance,
	getAssemblyBoundingBoxes,
	getAssemblyDefinition,
	getAssemblyMassProperties,
	getAssemblyShadedViews,
	getBillOfMaterials,
	getFeatureSpecs,
	getNamedViews,
	getOrCreateBillOfMaterialsElement,
	insertTransformedInstances,
	transformOccurrences,
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
				name: 'getFeatures',
				value: 'GET /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				description: 'Get Feature List - get /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
			},
			{
				name: 'addFeature',
				value: 'POST /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				description: 'post /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
			},
			{
				name: 'createAssembly',
				value: 'POST /api/assemblies/d/{did}/w/{wid}',
				description: 'Create Assembly - post /api/assemblies/d/{did}/w/{wid}',
			},
			{
				name: 'createInstance',
				value: 'POST /api/assemblies/d/{did}/w/{wid}/e/{eid}/instances',
				description: 'Create assembly instance - post /api/assemblies/d/{did}/w/{wid}/e/{eid}/instances',
			},
			{
				name: 'updateFeature',
				value: 'POST /api/assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				description: 'post /api/assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
			},
			{
				name: 'deleteFeature',
				value: 'DELETE /api/assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				description: 'Delete Feature - delete /api/assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
			},
			{
				name: 'deleteInstance',
				value: 'DELETE /api/assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid}',
				description: 'Delete assembly instance. - delete /api/assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid}',
			},
			{
				name: 'getAssemblyBoundingBoxes',
				value: 'GET /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
				description: 'Bounding Boxes. - get /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
			},
			{
				name: 'getAssemblyDefinition',
				value: 'GET /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'Assembly Definition. - get /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}',
			},
			{
				name: 'getAssemblyMassProperties',
				value: 'GET /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
				description: 'Mass properties of an Assembly. - get /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
			},
			{
				name: 'getAssemblyShadedViews',
				value: 'GET /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
				description: 'get /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
			},
			{
				name: 'getBillOfMaterials',
				value: 'GET /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/bom',
				description: 'Get Bill of Materials - get /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/bom',
			},
			{
				name: 'getFeatureSpecs',
				value: 'GET /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
				description: 'get /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
			},
			{
				name: 'getNamedViews',
				value: 'GET /api/assemblies/d/{did}/e/{eid}/namedViews',
				description: 'get /api/assemblies/d/{did}/e/{eid}/namedViews',
			},
			{
				name: 'getOrCreateBillOfMaterialsElement',
				value: 'POST /api/assemblies/d/{did}/w/{wid}/e/{eid}/bomelement',
				description: 'Get or Create Bill of Materials Element - post /api/assemblies/d/{did}/w/{wid}/e/{eid}/bomelement',
			},
			{
				name: 'insertTransformedInstances',
				value: 'POST /api/assemblies/d/{did}/w/{wid}/e/{eid}/transformedinstances',
				description: 'Create and transform assembly instances - post /api/assemblies/d/{did}/w/{wid}/e/{eid}/transformedinstances',
			},
			{
				name: 'transformOccurrences',
				value: 'POST /api/assemblies/d/{did}/w/{wid}/e/{eid}/occurrencetransforms',
				description: 'Transform assembly occurrences. - post /api/assemblies/d/{did}/w/{wid}/e/{eid}/occurrencetransforms',
			},
			{
				name: 'translateFormat',
				value: 'POST /api/assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				description: 'Create Assembly translation. - post /api/assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
			},
		],
		default: 'GET /api/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
		description: 'The operation to perform',
	},
	...getFeatures.description,
	...addFeature.description,
	...createAssembly.description,
	...createInstance.description,
	...updateFeature.description,
	...deleteFeature.description,
	...deleteInstance.description,
	...getAssemblyBoundingBoxes.description,
	...getAssemblyDefinition.description,
	...getAssemblyMassProperties.description,
	...getAssemblyShadedViews.description,
	...getBillOfMaterials.description,
	...getFeatureSpecs.description,
	...getNamedViews.description,
	...getOrCreateBillOfMaterialsElement.description,
	...insertTransformedInstances.description,
	...transformOccurrences.description,
	...translateFormat.description,
];

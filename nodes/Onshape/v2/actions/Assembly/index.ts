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
import * as getExplodedViews from './getExplodedViews';
import * as getFeatures from './getFeatures';
import * as addFeature from './addFeature';
import * as getFeatureSpecs from './getFeatureSpecs';
import * as getAssemblyMassProperties from './getAssemblyMassProperties';
import * as getNamedPositions from './getNamedPositions';
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
	getExplodedViews,
	getFeatures,
	addFeature,
	getFeatureSpecs,
	getAssemblyMassProperties,
	getNamedPositions,
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
				description: 'Create Assembly by document ID and workspace ID. - post /assemblies/d/{did}/w/{wid}',
			},
			{
				name: 'getOrCreateBillOfMaterialsElement',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/bomelement',
				description: 'Create a bill of materials (BOM) table by document ID, workspace ID, and tab ID. - post /assemblies/d/{did}/w/{wid}/e/{eid}/bomelement',
			},
			{
				name: 'updateFeature',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				description: 'Upload a feature by document ID, workspace ID, tab ID, and feature ID. - post /assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
			},
			{
				name: 'deleteFeature',
				value: 'DELETE /assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				description: 'Delete a feature by document ID, workspace ID, tab ID, and feature ID. - delete /assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
			},
			{
				name: 'deleteInstance',
				value: 'DELETE /assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid}',
				description: 'Delete an instance by document ID, workspace ID, tab ID, and node ID. - delete /assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid}',
			},
			{
				name: 'createInstance',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/instances',
				description: 'Create Assembly instances by document ID, workspace ID, and tab ID. - post /assemblies/d/{did}/w/{wid}/e/{eid}/instances',
			},
			{
				name: 'transformOccurrences',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/occurrencetransforms',
				description: 'Create an occurrence transform by document ID, workspace ID, and tab ID. - post /assemblies/d/{did}/w/{wid}/e/{eid}/occurrencetransforms',
			},
			{
				name: 'insertTransformedInstances',
				value: 'POST /assemblies/d/{did}/w/{wid}/e/{eid}/transformedinstances',
				description: 'Create an instance transform by document ID, workspace ID, and tab ID. - post /assemblies/d/{did}/w/{wid}/e/{eid}/transformedinstances',
			},
			{
				name: 'getAssemblyDefinition',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'Retrieve assembly by document ID, workspace or version or microversion ID, and tab ID. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}',
			},
			{
				name: 'getBillOfMaterials',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/bom',
				description: 'Retrieve the bill of materials (BOM) by document ID, workspace or version or microversion ID, and tab ID. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/bom',
			},
			{
				name: 'getAssemblyBoundingBoxes',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
				description: 'Retrieve bounding boxes by document ID, workspace or version or microversion ID, and tab ID. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes',
			},
			{
				name: 'getExplodedViews',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/explodedviews',
				description: 'get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/explodedviews',
			},
			{
				name: 'getFeatures',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				description: 'Retrieve features array by document ID, workspace or version or microversion ID, and tab ID. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
			},
			{
				name: 'addFeature',
				value: 'POST /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
				description: 'Create features array by document ID, workspace or version or microversion ID, and tab ID. - post /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features',
			},
			{
				name: 'getFeatureSpecs',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
				description: 'Retrieve feature specifications array by document ID, workspace or version or microversion ID, and tab ID. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
			},
			{
				name: 'getAssemblyMassProperties',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
				description: 'get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties',
			},
			{
				name: 'getNamedPositions',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/namedpositions',
				description: 'get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/namedpositions',
			},
			{
				name: 'getAssemblyShadedViews',
				value: 'GET /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
				description: 'Retrieve an array of shaded view images by document ID, workspace or version or microversion ID, and tab ID. - get /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews',
			},
			{
				name: 'translateFormat',
				value: 'POST /assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
				description: 'Create assembly translation by document ID, workspace or version ID, and tab ID. - post /assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations',
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
	...getExplodedViews.description,
	...getFeatures.description,
	...addFeature.description,
	...getFeatureSpecs.description,
	...getAssemblyMassProperties.description,
	...getNamedPositions.description,
	...getAssemblyShadedViews.description,
	...translateFormat.description,
];

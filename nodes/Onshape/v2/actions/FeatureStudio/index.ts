import * as createFeatureStudio from './createFeatureStudio';
import * as getFeatureStudioContents from './getFeatureStudioContents';
import * as updateFeatureStudioContents from './updateFeatureStudioContents';
import * as getFeatureStudioSpecs from './getFeatureStudioSpecs';

import { INodeProperties } from 'n8n-workflow';

export {
	createFeatureStudio,
	getFeatureStudioContents,
	updateFeatureStudioContents,
	getFeatureStudioSpecs,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'FeatureStudio',
				],
			},
		},
		options: [
			{
				name: 'createFeatureStudio',
				value: 'POST /featurestudios/d/{did}/w/{wid}',
				description: 'Create Feature Studio by document ID and workspace ID. - post /featurestudios/d/{did}/w/{wid}',
			},
			{
				name: 'getFeatureStudioContents',
				value: 'GET /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'get /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}',
			},
			{
				name: 'updateFeatureStudioContents',
				value: 'POST /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'Update Feature Studio contents by document ID, workspace or version or microversion ID, and tab ID. - post /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}',
			},
			{
				name: 'getFeatureStudioSpecs',
				value: 'GET /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
				description: 'Retrieve Feature Studio specs by document ID, workspace or version or microversion ID, and tab ID. - get /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
			},
		],
		default: 'POST /featurestudios/d/{did}/w/{wid}',
		description: 'The operation to perform',
	},
	...createFeatureStudio.description,
	...getFeatureStudioContents.description,
	...updateFeatureStudioContents.description,
	...getFeatureStudioSpecs.description,
];

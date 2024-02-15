import * as CreateFeatureStudio from './createFeatureStudio';
import * as GetFeatureStudioContents from './getFeatureStudioContents';
import * as UpdateFeatureStudioContents from './updateFeatureStudioContents';
import * as GetFeatureStudioSpecs from './getFeatureStudioSpecs';

import { INodeProperties } from 'n8n-workflow';

export {
	CreateFeatureStudio,
	GetFeatureStudioContents,
	UpdateFeatureStudioContents,
	GetFeatureStudioSpecs,
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
				description: 'Specify the name for the new tab in the request body. - post /featurestudios/d/{did}/w/{wid}',
			},
			{
				name: 'getFeatureStudioContents',
				value: 'GET /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'Get the text for a Feature Studio element. - get /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}',
			},
			{
				name: 'updateFeatureStudioContents',
				value: 'POST /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'Update the text for a Feature Studio element. - post /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}',
			},
			{
				name: 'getFeatureStudioSpecs',
				value: 'GET /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
				description: 'Get the feature specs for a Feature Studio element. - get /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
			},
		],
		default: 'POST /featurestudios/d/{did}/w/{wid}',
		description: 'The operation to perform',
	},
	...CreateFeatureStudio.description,
	...GetFeatureStudioContents.description,
	...UpdateFeatureStudioContents.description,
	...GetFeatureStudioSpecs.description,
];

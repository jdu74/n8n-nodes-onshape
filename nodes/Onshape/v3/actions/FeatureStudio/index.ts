import * as CreateFeatureStudio from './createFeatureStudio';
import * as GetFeatureStudioContents from './getFeatureStudioContents';
import * as GetFeatureStudioSpecs from './getFeatureStudioSpecs';
import * as UpdateFeatureStudioContents from './updateFeatureStudioContents';

import { INodeProperties } from 'n8n-workflow';

export {
	CreateFeatureStudio,
	GetFeatureStudioContents,
	GetFeatureStudioSpecs,
	UpdateFeatureStudioContents,
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
					'FeatureStudio',
				],
			},
		},
		default: 'POST /featurestudios/d/{did}/w/{wid}',
		options: [
			{
				name: 'createFeatureStudio',
				value: 'POST /featurestudios/d/{did}/w/{wid}',
				description: 'Create a new Feature Studio tab in a document. - post /featurestudios/d/{did}/w/{wid}',
				action: 'Create Feature Studio',
			},
			{
				name: 'getFeatureStudioContents',
				value: 'GET /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'Get the text for a Feature Studio element. - get /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}',
				action: 'Get Feature Studio Contents',
			},
			{
				name: 'getFeatureStudioSpecs',
				value: 'GET /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
				description: 'Get the feature specs for a Feature Studio element. - get /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs',
				action: 'Get Feature Studio Specs',
			},
			{
				name: 'updateFeatureStudioContents',
				value: 'POST /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}',
				description: 'Update the text for a Feature Studio element. - post /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}',
				action: 'Update Feature Studio Contents',
			},
		],
	},
	...CreateFeatureStudio.description,
	...GetFeatureStudioContents.description,
	...GetFeatureStudioSpecs.description,
	...UpdateFeatureStudioContents.description,
];

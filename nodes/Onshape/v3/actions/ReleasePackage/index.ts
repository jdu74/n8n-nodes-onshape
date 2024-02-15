import * as GetCompanyReleaseWorkflow from './getCompanyReleaseWorkflow';
import * as CreateObsoletionPackage from './createObsoletionPackage';
import * as CreateReleasePackage from './createReleasePackage';
import * as GetReleasePackage from './getReleasePackage';
import * as UpdateReleasePackage from './updateReleasePackage';

import { INodeProperties } from 'n8n-workflow';

export {
	GetCompanyReleaseWorkflow,
	CreateObsoletionPackage,
	CreateReleasePackage,
	GetReleasePackage,
	UpdateReleasePackage,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ReleasePackage',
				],
			},
		},
		options: [
			{
				name: 'getCompanyReleaseWorkflow',
				value: 'GET /releasepackages/companyreleaseworkflow',
				description: 'Get information about the release/obsoletion workflow for a company-owned document. - get /releasepackages/companyreleaseworkflow',
			},
			{
				name: 'createObsoletionPackage',
				value: 'POST /releasepackages/obsoletion/{wfid}',
				description: 'Create an obsoletion package to make an existing revision obsolete. - post /releasepackages/obsoletion/{wfid}',
			},
			{
				name: 'createReleasePackage',
				value: 'POST /releasepackages/release/{wfid}',
				description: 'All revisionable items must be from the same document. Once a release package is successfully created, use `updateReleasePackage` to update all desired item/package properties, and transition it to the desired state. - post /releasepackages/release/{wfid}',
			},
			{
				name: 'getReleasePackage',
				value: 'GET /releasepackages/{rpid}',
				description: 'Get details about the specified release package. - get /releasepackages/{rpid}',
			},
			{
				name: 'updateReleasePackage',
				value: 'POST /releasepackages/{rpid}',
				description: 'Use the `wfaction` query param to also perform a workflow transition. - post /releasepackages/{rpid}',
			},
		],
		default: 'GET /releasepackages/companyreleaseworkflow',
		description: 'The operation to perform',
	},
	...GetCompanyReleaseWorkflow.description,
	...CreateObsoletionPackage.description,
	...CreateReleasePackage.description,
	...GetReleasePackage.description,
	...UpdateReleasePackage.description,
];

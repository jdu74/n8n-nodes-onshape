import * as CreateObsoletionPackage from './createObsoletionPackage';
import * as CreateReleasePackage from './createReleasePackage';
import * as GetCompanyReleaseWorkflow from './getCompanyReleaseWorkflow';
import * as GetReleasePackage from './getReleasePackage';
import * as UpdateReleasePackage from './updateReleasePackage';

import { INodeProperties } from 'n8n-workflow';

export {
	CreateObsoletionPackage,
	CreateReleasePackage,
	GetCompanyReleaseWorkflow,
	GetReleasePackage,
	UpdateReleasePackage,
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
					'ReleasePackage',
				],
			},
		},
		default: 'GET /releasepackages/companyreleaseworkflow',
		options: [
			{
				name: 'createObsoletionPackage',
				value: 'POST /releasepackages/obsoletion/{wfid}',
				description: 'Create an obsoletion package to make an existing revision obsolete. - post /releasepackages/obsoletion/{wfid}',
				action: 'Create Obsoletion Package',
			},
			{
				name: 'createReleasePackage',
				value: 'POST /releasepackages/release/{wfid}',
				description: 'Create a new release package for one or more items. - post /releasepackages/release/{wfid}',
				action: 'Create Release Package',
			},
			{
				name: 'getCompanyReleaseWorkflow',
				value: 'GET /releasepackages/companyreleaseworkflow',
				description: 'Get information about the release/obsoletion workflow for a company-owned document. - get /releasepackages/companyreleaseworkflow',
				action: 'Get Company Release Workflow',
			},
			{
				name: 'getReleasePackage',
				value: 'GET /releasepackages/{rpid}',
				description: 'Get details about the specified release package. - get /releasepackages/{rpid}',
				action: 'Get Release Package',
			},
			{
				name: 'updateReleasePackage',
				value: 'POST /releasepackages/{rpid}',
				description: 'Update the release/obsoletion package/item properties. - post /releasepackages/{rpid}',
				action: 'Update Release Package',
			},
		],
	},
	...CreateObsoletionPackage.description,
	...CreateReleasePackage.description,
	...GetCompanyReleaseWorkflow.description,
	...GetReleasePackage.description,
	...UpdateReleasePackage.description,
];

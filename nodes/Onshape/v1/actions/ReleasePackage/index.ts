import * as getCompanyReleaseWorkflow from './getCompanyReleaseWorkflow';
import * as createObsoletionPackage from './createObsoletionPackage';
import * as createReleasePackage from './createReleasePackage';
import * as getReleasePackage from './getReleasePackage';
import * as updateReleasePackage from './updateReleasePackage';

import { INodeProperties } from 'n8n-workflow';

export {
	getCompanyReleaseWorkflow,
	createObsoletionPackage,
	createReleasePackage,
	getReleasePackage,
	updateReleasePackage,
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
				description: 'get /releasepackages/companyreleaseworkflow',
			},
			{
				name: 'createObsoletionPackage',
				value: 'POST /releasepackages/obsoletion/{wfid}',
				description: 'post /releasepackages/obsoletion/{wfid}',
			},
			{
				name: 'createReleasePackage',
				value: 'POST /releasepackages/release/{wfid}',
				description: 'post /releasepackages/release/{wfid}',
			},
			{
				name: 'getReleasePackage',
				value: 'GET /releasepackages/{rpid}',
				description: 'get /releasepackages/{rpid}',
			},
			{
				name: 'updateReleasePackage',
				value: 'POST /releasepackages/{rpid}',
				description: 'post /releasepackages/{rpid}',
			},
		],
		default: 'GET /releasepackages/companyreleaseworkflow',
		description: 'The operation to perform',
	},
	...getCompanyReleaseWorkflow.description,
	...createObsoletionPackage.description,
	...createReleasePackage.description,
	...getReleasePackage.description,
	...updateReleasePackage.description,
];

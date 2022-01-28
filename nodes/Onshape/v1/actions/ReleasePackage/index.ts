import * as createObsoletionPackage from './createObsoletionPackage';
import * as createReleasePackage from './createReleasePackage';
import * as getReleasePackage from './getReleasePackage';
import * as updateReleasePackage from './updateReleasePackage';
import * as getCompanyReleaseWorkflow from './getCompanyReleaseWorkflow';

import { INodeProperties } from 'n8n-workflow';

export {
	createObsoletionPackage,
	createReleasePackage,
	getReleasePackage,
	updateReleasePackage,
	getCompanyReleaseWorkflow,
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
				name: 'createObsoletionPackage',
				value: 'POST /api/releasepackages/obsoletion/{wfid}',
				description: 'post /api/releasepackages/obsoletion/{wfid}',
			},
			{
				name: 'createReleasePackage',
				value: 'POST /api/releasepackages/release/{wfid}',
				description: 'post /api/releasepackages/release/{wfid}',
			},
			{
				name: 'getReleasePackage',
				value: 'GET /api/releasepackages/{rpid}',
				description: 'get /api/releasepackages/{rpid}',
			},
			{
				name: 'updateReleasePackage',
				value: 'POST /api/releasepackages/{rpid}',
				description: 'post /api/releasepackages/{rpid}',
			},
			{
				name: 'getCompanyReleaseWorkflow',
				value: 'GET /api/releasepackages/companyreleaseworkflow',
				description: 'get /api/releasepackages/companyreleaseworkflow',
			},
		],
		default: 'POST /api/releasepackages/obsoletion/{wfid}',
		description: 'The operation to perform',
	},
	...createObsoletionPackage.description,
	...createReleasePackage.description,
	...getReleasePackage.description,
	...updateReleasePackage.description,
	...getCompanyReleaseWorkflow.description,
];

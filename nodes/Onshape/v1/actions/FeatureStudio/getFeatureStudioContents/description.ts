import { INodeProperties } from "n8n-workflow";

export const getFeatureStudioContentsDescription: INodeProperties[] = [
	{
		name: 'did-string(path)',
		displayName: 'did',
		description: 'did - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'FeatureStudio',
				],
				operation: [
					'GET /api/featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}',
				],
			},
		},
	},
	{
		name: 'wvm-string(path)',
		displayName: 'wvm',
		description: 'wvm - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'FeatureStudio',
				],
				operation: [
					'GET /api/featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}',
				],
			},
		},
	},
	{
		name: 'wvmid-string(path)',
		displayName: 'wvmid',
		description: 'wvmid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'FeatureStudio',
				],
				operation: [
					'GET /api/featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}',
				],
			},
		},
	},
	{
		name: 'eid-string(path)',
		displayName: 'eid',
		description: 'eid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'FeatureStudio',
				],
				operation: [
					'GET /api/featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}',
				],
			},
		},
	},
];

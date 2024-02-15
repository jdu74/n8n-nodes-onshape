import { INodeProperties } from "n8n-workflow";

export const GetFeatureStudioContentsDescription: INodeProperties[] = [
	{
		displayName: 'did',
		name: 'did-string(path)',
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
					'GET /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}',
				],
			},
		},
	},
	{
		displayName: 'wvm',
		name: 'wvm-string(path)',
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
					'GET /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}',
				],
			},
		},
	},
	{
		displayName: 'wvmid',
		name: 'wvmid-string(path)',
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
					'GET /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}',
				],
			},
		},
	},
	{
		displayName: 'eid',
		name: 'eid-string(path)',
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
					'GET /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}',
				],
			},
		},
	},
];

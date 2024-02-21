import { INodeProperties } from "n8n-workflow";

export const PostAssociativeDataDescription: INodeProperties[] = [
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
					'AppAssociativeData',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
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
					'AppAssociativeData',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
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
					'AppAssociativeData',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
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
					'AppAssociativeData',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
				],
			},
		},
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		description: 'JSON Content-Type',
		type: 'hidden',
		default: 'application/json;charset=UTF-8; qs=0.09',
		displayOptions: {
			show: {
				resource: [
					'AppAssociativeData',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
				],
			},
		},
		options: [
			{
				name: 'application/json;charset=UTF-8; qs=0.09',
				value: 'application/json;charset=UTF-8; qs=0.09',
			},
		],
	},
	{
		displayName: 'JSON Object',
		name: 'jsonObject2-json(body)',
		description: 'jsonObject - json',
		type: 'json',
		default: '',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'AppAssociativeData',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
				],
				jsonContentType: [
					'application/json;charset=UTF-8; qs=0.09',
				],
			},
		},
	},
	{
		displayName: 'JSON Object',
		name: 'jsonObject2-json(body)',
		description: 'jsonObject - json',
		type: 'json',
		default: '',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'AppAssociativeData',
				],
				operation: [
					'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
				],
				jsonParameters: [
					true,
				],
				jsonContentType: [
					'application/json;charset=UTF-8; qs=0.09',
				],
			},
		},
	},
];

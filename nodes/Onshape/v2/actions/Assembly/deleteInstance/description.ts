import { INodeProperties } from "n8n-workflow";

export const deleteInstanceDescription: INodeProperties[] = [
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
					'Assembly',
				],
				operation: [
					'DELETE /assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid}',
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
					'Assembly',
				],
				operation: [
					'DELETE /assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid}',
				],
			},
		},
	},
	{
		displayName: 'wid',
		name: 'wid-string(path)',
		description: 'wid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Assembly',
				],
				operation: [
					'DELETE /assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid}',
				],
			},
		},
	},
	{
		displayName: 'nid',
		name: 'nid-string(path)',
		description: 'nid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Assembly',
				],
				operation: [
					'DELETE /assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid}',
				],
			},
		},
	},
];

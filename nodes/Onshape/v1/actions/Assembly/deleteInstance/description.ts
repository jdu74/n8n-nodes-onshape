import { INodeProperties } from "n8n-workflow";

export const deleteInstanceDescription: INodeProperties[] = [
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
					'Assembly',
				],
				operation: [
					'DELETE /api/assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid}',
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
					'Assembly',
				],
				operation: [
					'DELETE /api/assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid}',
				],
			},
		},
	},
	{
		name: 'wid-string(path)',
		displayName: 'wid',
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
					'DELETE /api/assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid}',
				],
			},
		},
	},
	{
		name: 'nid-string(path)',
		displayName: 'nid',
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
					'DELETE /api/assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid}',
				],
			},
		},
	},
];

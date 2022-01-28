import { INodeProperties } from "n8n-workflow";

export const deletePartStudioFeatureDescription: INodeProperties[] = [
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
					'PartStudio',
				],
				operation: [
					'DELETE /api/partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
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
					'PartStudio',
				],
				operation: [
					'DELETE /api/partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
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
					'PartStudio',
				],
				operation: [
					'DELETE /api/partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				],
			},
		},
	},
	{
		name: 'fid-string(path)',
		displayName: 'fid',
		description: 'fid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'PartStudio',
				],
				operation: [
					'DELETE /api/partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				],
			},
		},
	},
];

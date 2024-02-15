import { INodeProperties } from "n8n-workflow";

export const DeletePartStudioFeatureDescription: INodeProperties[] = [
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
					'PartStudio',
				],
				operation: [
					'DELETE /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
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
					'PartStudio',
				],
				operation: [
					'DELETE /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
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
					'PartStudio',
				],
				operation: [
					'DELETE /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				],
			},
		},
	},
	{
		displayName: 'fid',
		name: 'fid-string(path)',
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
					'DELETE /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}',
				],
			},
		},
	},
];

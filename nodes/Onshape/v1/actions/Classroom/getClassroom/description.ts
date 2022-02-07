import { INodeProperties } from "n8n-workflow";

export const getClassroomDescription: INodeProperties[] = [
	{
		name: 'cid-string(path)',
		displayName: 'cid',
		description: 'cid - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Classroom',
				],
				operation: [
					'GET /classrooms/{cid}',
				],
			},
		},
	},
];

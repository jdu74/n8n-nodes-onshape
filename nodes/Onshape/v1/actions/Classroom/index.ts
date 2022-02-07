import * as getClassroom from './getClassroom';
import * as getClassroomMembers from './getClassroomMembers';

import { INodeProperties } from 'n8n-workflow';

export {
	getClassroom,
	getClassroomMembers,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Classroom',
				],
			},
		},
		options: [
			{
				name: 'getClassroom',
				value: 'GET /classrooms/{cid}',
				description: 'get /classrooms/{cid}',
			},
			{
				name: 'getClassroomMembers',
				value: 'GET /classrooms/{cid}/members',
				description: 'get /classrooms/{cid}/members',
			},
		],
		default: 'GET /classrooms/{cid}',
		description: 'The operation to perform',
	},
	...getClassroom.description,
	...getClassroomMembers.description,
];

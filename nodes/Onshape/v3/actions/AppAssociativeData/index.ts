import * as CopyAssociativeData from './copyAssociativeData';
import * as DeleteAssociativeData from './deleteAssociativeData';
import * as GetAssociativeData from './getAssociativeData';
import * as PostAssociativeData from './postAssociativeData';

import { INodeProperties } from 'n8n-workflow';

export {
	CopyAssociativeData,
	DeleteAssociativeData,
	GetAssociativeData,
	PostAssociativeData,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'AppAssociativeData',
				],
			},
		},
		default: 'POST /appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
		options: [
			{
				name: 'copyAssociativeData',
				value: 'POST /appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
				description: 'Copy associative data from one view to another. - post /appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
				action: 'Copy Associative Data',
			},
			{
				name: 'deleteAssociativeData',
				value: 'DELETE /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
				description: 'Delete the associative data from the specified app element. - delete /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
				action: 'Delete Associative Data',
			},
			{
				name: 'getAssociativeData',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
				description: 'Get the associative data for the specified app element. - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
				action: 'Get Associative Data',
			},
			{
				name: 'postAssociativeData',
				value: 'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
				description: 'Set the associative data for the specified app element. - post /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
				action: 'Post Associative Data',
			},
		],
	},
	...CopyAssociativeData.description,
	...DeleteAssociativeData.description,
	...GetAssociativeData.description,
	...PostAssociativeData.description,
];

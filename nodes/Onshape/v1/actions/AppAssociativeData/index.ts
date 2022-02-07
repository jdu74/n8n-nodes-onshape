import * as copyAssociativeData from './copyAssociativeData';
import * as getAssociativeData from './getAssociativeData';
import * as postAssociativeData from './postAssociativeData';
import * as deleteAssociativeData from './deleteAssociativeData';

import { INodeProperties } from 'n8n-workflow';

export {
	copyAssociativeData,
	getAssociativeData,
	postAssociativeData,
	deleteAssociativeData,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'AppAssociativeData',
				],
			},
		},
		options: [
			{
				name: 'copyAssociativeData',
				value: 'POST /appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
				description: 'Copy associative data between sub-views inside this application tab. Useful if the application has multiple sub-components; for example, Drawing views. - post /appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
			},
			{
				name: 'getAssociativeData',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
				description: 'Retrieve associative data for this application tab - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
			},
			{
				name: 'postAssociativeData',
				value: 'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
				description: 'Create or update associative data for this application tab - post /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
			},
			{
				name: 'deleteAssociativeData',
				value: 'DELETE /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
				description: 'Delete associative data for this application tab - delete /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
			},
		],
		default: 'POST /appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
		description: 'The operation to perform',
	},
	...copyAssociativeData.description,
	...getAssociativeData.description,
	...postAssociativeData.description,
	...deleteAssociativeData.description,
];

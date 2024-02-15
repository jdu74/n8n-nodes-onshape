import * as CopyAssociativeData from './copyAssociativeData';
import * as GetAssociativeData from './getAssociativeData';
import * as PostAssociativeData from './postAssociativeData';
import * as DeleteAssociativeData from './deleteAssociativeData';

import { INodeProperties } from 'n8n-workflow';

export {
	CopyAssociativeData,
	GetAssociativeData,
	PostAssociativeData,
	DeleteAssociativeData,
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
				description: 'Can only be copied between tabs in the same document. You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds). - post /appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
			},
			{
				name: 'getAssociativeData',
				value: 'GET /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
				description: 'You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds). - get /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
			},
			{
				name: 'postAssociativeData',
				value: 'POST /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
				description: 'You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds). - post /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
			},
			{
				name: 'deleteAssociativeData',
				value: 'DELETE /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
				description: 'You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds). - delete /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata',
			},
		],
		default: 'POST /appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata',
		description: 'The operation to perform',
	},
	...CopyAssociativeData.description,
	...GetAssociativeData.description,
	...PostAssociativeData.description,
	...DeleteAssociativeData.description,
];

import * as setVariables from './setVariables';
import * as setVariableStudioReferences from './setVariableStudioReferences';
import * as setVariableStudioScope from './setVariableStudioScope';
import * as createVariableStudio from './createVariableStudio';
import * as getVariables from './getVariables';
import * as getVariableStudioReferences from './getVariableStudioReferences';
import * as getVariableStudioScope from './getVariableStudioScope';

import { INodeProperties } from 'n8n-workflow';

export {
	setVariables,
	setVariableStudioReferences,
	setVariableStudioScope,
	createVariableStudio,
	getVariables,
	getVariableStudioReferences,
	getVariableStudioScope,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'Variables',
				],
			},
		},
		options: [
			{
				name: 'setVariables',
				value: 'POST /variables/d/{did}/w/{wid}/e/{eid}/variables',
				description: 'Assign variables to a variable studio - post /variables/d/{did}/w/{wid}/e/{eid}/variables',
			},
			{
				name: 'setVariableStudioReferences',
				value: 'POST /variables/d/{did}/w/{wid}/e/{eid}/variablestudioreferences',
				description: "Set an element's variable studio references - post /variables/d/{did}/w/{wid}/e/{eid}/variablestudioreferences",
			},
			{
				name: 'setVariableStudioScope',
				value: 'POST /variables/d/{did}/w/{wid}/e/{eid}/variablestudioscope',
				description: 'Set the scope of a variable studio - post /variables/d/{did}/w/{wid}/e/{eid}/variablestudioscope',
			},
			{
				name: 'createVariableStudio',
				value: 'POST /variables/d/{did}/w/{wid}/variablestudio',
				description: 'Create a Variable studio - post /variables/d/{did}/w/{wid}/variablestudio',
			},
			{
				name: 'getVariables',
				value: 'GET /variables/d/{did}/{wv}/{wvid}/e/{eid}/variables',
				description: 'Gets contents of variable tables - get /variables/d/{did}/{wv}/{wvid}/e/{eid}/variables',
			},
			{
				name: 'getVariableStudioReferences',
				value: 'GET /variables/d/{did}/{wv}/{wvid}/e/{eid}/variablestudioreferences',
				description: "Get an element's variable studio references - get /variables/d/{did}/{wv}/{wvid}/e/{eid}/variablestudioreferences",
			},
			{
				name: 'getVariableStudioScope',
				value: 'GET /variables/d/{did}/{wv}/{wvid}/e/{eid}/variablestudioscope',
				description: 'Get the scope of a variable studio - get /variables/d/{did}/{wv}/{wvid}/e/{eid}/variablestudioscope',
			},
		],
		default: 'POST /variables/d/{did}/w/{wid}/e/{eid}/variables',
		description: 'The operation to perform',
	},
	...setVariables.description,
	...setVariableStudioReferences.description,
	...setVariableStudioScope.description,
	...createVariableStudio.description,
	...getVariables.description,
	...getVariableStudioReferences.description,
	...getVariableStudioScope.description,
];

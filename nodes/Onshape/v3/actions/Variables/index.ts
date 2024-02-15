import * as SetVariables from './setVariables';
import * as SetVariableStudioReferences from './setVariableStudioReferences';
import * as SetVariableStudioScope from './setVariableStudioScope';
import * as CreateVariableStudio from './createVariableStudio';
import * as GetVariables from './getVariables';
import * as GetVariableStudioReferences from './getVariableStudioReferences';
import * as GetVariableStudioScope from './getVariableStudioScope';

import { INodeProperties } from 'n8n-workflow';

export {
	SetVariables,
	SetVariableStudioReferences,
	SetVariableStudioScope,
	CreateVariableStudio,
	GetVariables,
	GetVariableStudioReferences,
	GetVariableStudioScope,
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
				description: 'Assign variables to a Variable Studio - post /variables/d/{did}/w/{wid}/e/{eid}/variables',
			},
			{
				name: 'setVariableStudioReferences',
				value: 'POST /variables/d/{did}/w/{wid}/e/{eid}/variablestudioreferences',
				description: 'Set the Variable Studio references for an element. - post /variables/d/{did}/w/{wid}/e/{eid}/variablestudioreferences',
			},
			{
				name: 'setVariableStudioScope',
				value: 'POST /variables/d/{did}/w/{wid}/e/{eid}/variablestudioscope',
				description: 'Set the scope the Variable Studio. - post /variables/d/{did}/w/{wid}/e/{eid}/variablestudioscope',
			},
			{
				name: 'createVariableStudio',
				value: 'POST /variables/d/{did}/w/{wid}/variablestudio',
				description: 'Create a new Variable Studio in a document and workspace. - post /variables/d/{did}/w/{wid}/variablestudio',
			},
			{
				name: 'getVariables',
				value: 'GET /variables/d/{did}/{wv}/{wvid}/e/{eid}/variables',
				description: 'Get the contents of all variable tables in an element. - get /variables/d/{did}/{wv}/{wvid}/e/{eid}/variables',
			},
			{
				name: 'getVariableStudioReferences',
				value: 'GET /variables/d/{did}/{wv}/{wvid}/e/{eid}/variablestudioreferences',
				description: 'Get the Variable Studio references for an element. - get /variables/d/{did}/{wv}/{wvid}/e/{eid}/variablestudioreferences',
			},
			{
				name: 'getVariableStudioScope',
				value: 'GET /variables/d/{did}/{wv}/{wvid}/e/{eid}/variablestudioscope',
				description: 'Get the scope of a Variable Studio. - get /variables/d/{did}/{wv}/{wvid}/e/{eid}/variablestudioscope',
			},
		],
		default: 'POST /variables/d/{did}/w/{wid}/e/{eid}/variables',
		description: 'The operation to perform',
	},
	...SetVariables.description,
	...SetVariableStudioReferences.description,
	...SetVariableStudioScope.description,
	...CreateVariableStudio.description,
	...GetVariables.description,
	...GetVariableStudioReferences.description,
	...GetVariableStudioScope.description,
];

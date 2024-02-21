import * as CreateVariableStudio from './createVariableStudio';
import * as GetVariables from './getVariables';
import * as GetVariableStudioReferences from './getVariableStudioReferences';
import * as GetVariableStudioScope from './getVariableStudioScope';
import * as SetVariables from './setVariables';
import * as SetVariableStudioReferences from './setVariableStudioReferences';
import * as SetVariableStudioScope from './setVariableStudioScope';

import { INodeProperties } from 'n8n-workflow';

export {
	CreateVariableStudio,
	GetVariables,
	GetVariableStudioReferences,
	GetVariableStudioScope,
	SetVariables,
	SetVariableStudioReferences,
	SetVariableStudioScope,
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
					'Variables',
				],
			},
		},
		default: 'POST /variables/d/{did}/w/{wid}/e/{eid}/variables',
		options: [
			{
				name: 'createVariableStudio',
				value: 'POST /variables/d/{did}/w/{wid}/variablestudio',
				description: 'Create a new Variable Studio in a document and workspace. - post /variables/d/{did}/w/{wid}/variablestudio',
				action: 'Create Variable Studio',
			},
			{
				name: 'getVariables',
				value: 'GET /variables/d/{did}/{wv}/{wvid}/e/{eid}/variables',
				description: 'Get the contents of all variable tables in an element. - get /variables/d/{did}/{wv}/{wvid}/e/{eid}/variables',
				action: 'Get Variables',
			},
			{
				name: 'getVariableStudioReferences',
				value: 'GET /variables/d/{did}/{wv}/{wvid}/e/{eid}/variablestudioreferences',
				description: 'Get the Variable Studio references for an element. - get /variables/d/{did}/{wv}/{wvid}/e/{eid}/variablestudioreferences',
				action: 'Get Variable Studio References',
			},
			{
				name: 'getVariableStudioScope',
				value: 'GET /variables/d/{did}/{wv}/{wvid}/e/{eid}/variablestudioscope',
				description: 'Get the scope of a Variable Studio. - get /variables/d/{did}/{wv}/{wvid}/e/{eid}/variablestudioscope',
				action: 'Get Variable Studio Scope',
			},
			{
				name: 'setVariables',
				value: 'POST /variables/d/{did}/w/{wid}/e/{eid}/variables',
				description: 'Assign variables to a Variable Studio - post /variables/d/{did}/w/{wid}/e/{eid}/variables',
				action: 'Set Variables',
			},
			{
				name: 'setVariableStudioReferences',
				value: 'POST /variables/d/{did}/w/{wid}/e/{eid}/variablestudioreferences',
				description: 'Set the Variable Studio references for an element. - post /variables/d/{did}/w/{wid}/e/{eid}/variablestudioreferences',
				action: 'Set Variable Studio References',
			},
			{
				name: 'setVariableStudioScope',
				value: 'POST /variables/d/{did}/w/{wid}/e/{eid}/variablestudioscope',
				description: 'Set the scope the Variable Studio. - post /variables/d/{did}/w/{wid}/e/{eid}/variablestudioscope',
				action: 'Set Variable Studio Scope',
			},
		],
	},
	...CreateVariableStudio.description,
	...GetVariables.description,
	...GetVariableStudioReferences.description,
	...GetVariableStudioScope.description,
	...SetVariables.description,
	...SetVariableStudioReferences.description,
	...SetVariableStudioScope.description,
];

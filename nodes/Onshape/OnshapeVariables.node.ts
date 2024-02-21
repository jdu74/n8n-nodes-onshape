import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeVariablesV1 } from './v1/OnshapeVariablesV1node';
import { OnshapeVariablesV2 } from './v2/OnshapeVariablesV2node';
import { OnshapeVariables as OnshapeVariablesV3 } from './v3/OnshapeVariablesnode';

export class OnshapeVariables extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeVariables',
			name: 'onshapevariables',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeVariablesV1(baseDescription),
			2: new OnshapeVariablesV2(baseDescription),
			3: new OnshapeVariablesV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

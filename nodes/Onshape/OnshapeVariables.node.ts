import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeVariablesV1 } from './v1/OnshapeVariablesV1node';
import { OnshapeVariablesV2 } from './v2/OnshapeVariablesV2node';

export class OnshapeVariables extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeVariables',
			name: 'onshapevariables',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Variables REST API',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeVariablesV1(baseDescription),
			2: new OnshapeVariablesV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

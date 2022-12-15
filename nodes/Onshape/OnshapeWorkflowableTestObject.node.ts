import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeWorkflowableTestObjectV1 } from './v1/OnshapeWorkflowableTestObjectV1node';
import { OnshapeWorkflowableTestObjectV2 } from './v2/OnshapeWorkflowableTestObjectV2node';

export class OnshapeWorkflowableTestObject extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeWorkflowableTestObject',
			name: 'onshapeworkflowabletestobject',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'WorkflowableTestObject',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeWorkflowableTestObjectV1(baseDescription),
			2: new OnshapeWorkflowableTestObjectV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

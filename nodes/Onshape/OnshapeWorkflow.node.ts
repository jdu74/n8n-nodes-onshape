import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeWorkflowV1 } from './v1/OnshapeWorkflowV1node';
import { OnshapeWorkflowV2 } from './v2/OnshapeWorkflowV2node';

export class OnshapeWorkflow extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeWorkflow',
			name: 'onshapeworkflow',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Access Release Management workflows.',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeWorkflowV1(baseDescription),
			2: new OnshapeWorkflowV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

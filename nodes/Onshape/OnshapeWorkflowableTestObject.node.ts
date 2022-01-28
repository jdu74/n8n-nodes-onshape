import {
	INodeTypeDescription,
	INodeVersionedType,
} from 'n8n-workflow';

import { NodeVersionedType } from '../../src/NodeVersionedType';
import { OnshapeWorkflowableTestObjectV1 } from './v1/OnshapeWorkflowableTestObjectV1node';

export class OnshapeWorkflowableTestObject extends NodeVersionedType {
	constructor() {
		const baseDescription: INodeTypeDescription = {
			displayName: 'OnshapeWorkflowableTestObject',
			name: 'onshapeworkflowabletestobject',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'WorkflowableTestObject',
			defaultVersion: 1,
			properties: [],
			version: 0,
			defaults: {},
			inputs: [],
			outputs: []
		};

		const nodeVersions: INodeVersionedType['nodeVersions'] = {
			1: new OnshapeWorkflowableTestObjectV1(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

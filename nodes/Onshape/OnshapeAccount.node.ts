import {
	INodeTypeDescription,
	INodeVersionedType,
} from 'n8n-workflow';

import { NodeVersionedType } from '../../src/NodeVersionedType';
import { OnshapeAccountV1 } from './v1/OnshapeAccountV1node';

export class OnshapeAccount extends NodeVersionedType {
	constructor() {
		const baseDescription: INodeTypeDescription = {
			displayName: 'OnshapeAccount',
			name: 'onshapeaccount',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Modify and access user account information, such as plan subscription and App Store purchases. Cancel recurring subscriptions. Mark purchases consumed by the user.',
			defaultVersion: 1,
			properties: [],
			version: 0,
			defaults: {},
			inputs: [],
			outputs: []
		};

		const nodeVersions: INodeVersionedType['nodeVersions'] = {
			1: new OnshapeAccountV1(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

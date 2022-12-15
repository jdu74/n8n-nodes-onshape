import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeAccountV1 } from './v1/OnshapeAccountV1node';
import { OnshapeAccountV2 } from './v2/OnshapeAccountV2node';

export class OnshapeAccount extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeAccount',
			name: 'onshapeaccount',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Modify and access user account information, such as plan subscription and App Store purchases. Cancel recurring subscriptions. Mark purchases consumed by the user.',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeAccountV1(baseDescription),
			2: new OnshapeAccountV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

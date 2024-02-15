import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeAccountV1 } from './v1/OnshapeAccountV1node';
import { OnshapeAccountV2 } from './v2/OnshapeAccountV2node';
import { OnshapeAccountV3 } from './v3/OnshapeAccountV3node';

export class OnshapeAccount extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeAccount',
			name: 'onshapeaccount',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Manage user purchases, subscriptions, and consumables.',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeAccountV1(baseDescription),
			2: new OnshapeAccountV2(baseDescription),
			3: new OnshapeAccountV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

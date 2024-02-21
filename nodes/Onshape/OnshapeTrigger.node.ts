import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeTrigger as OnshapeTriggerV1 } from './v1/OnshapeTrigger.node';
import { OnshapeTrigger as OnshapeTriggerV2 } from './v2/OnshapeTrigger.node';
import { OnshapeTrigger as OnshapeTriggerV3 } from './v3/OnshapeTrigger.node';

export class OnshapeTrigger extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Onshape Trigger',
			name: 'onshapeTrigger',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeTriggerV1(baseDescription),
			2: new OnshapeTriggerV2(baseDescription),
			3: new OnshapeTriggerV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

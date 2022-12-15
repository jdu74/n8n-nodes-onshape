import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeAppElementV1 } from './v1/OnshapeAppElementV1node';
import { OnshapeAppElementV2 } from './v2/OnshapeAppElementV2node';

export class OnshapeAppElement extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeAppElement',
			name: 'onshapeappelement',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Modify and access application elements.',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeAppElementV1(baseDescription),
			2: new OnshapeAppElementV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

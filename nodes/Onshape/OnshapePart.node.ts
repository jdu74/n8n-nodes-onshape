import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapePartV1 } from './v1/OnshapePartV1node';
import { OnshapePartV2 } from './v2/OnshapePartV2node';
import { OnshapePart as OnshapePartV3 } from './v3/OnshapePartnode';

export class OnshapePart extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapePart',
			name: 'onshapepart',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapePartV1(baseDescription),
			2: new OnshapePartV2(baseDescription),
			3: new OnshapePartV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeVersionV1 } from './v1/OnshapeVersionV1node';
import { OnshapeVersionV2 } from './v2/OnshapeVersionV2node';
import { OnshapeVersion as OnshapeVersionV3 } from './v3/OnshapeVersionnode';

export class OnshapeVersion extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeVersion',
			name: 'onshapeversion',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeVersionV1(baseDescription),
			2: new OnshapeVersionV2(baseDescription),
			3: new OnshapeVersionV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

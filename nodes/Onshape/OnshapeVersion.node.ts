import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeVersionV1 } from './v1/OnshapeVersionV1node';
import { OnshapeVersionV2 } from './v2/OnshapeVersionV2node';

export class OnshapeVersion extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeVersion',
			name: 'onshapeversion',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Example of API version management.',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeVersionV1(baseDescription),
			2: new OnshapeVersionV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeElementV1 } from './v1/OnshapeElementV1node';
import { OnshapeElementV2 } from './v2/OnshapeElementV2node';
import { OnshapeElement as OnshapeElementV3 } from './v3/OnshapeElementnode';

export class OnshapeElement extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeElement',
			name: 'onshapeelement',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeElementV1(baseDescription),
			2: new OnshapeElementV2(baseDescription),
			3: new OnshapeElementV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeBlobElementV1 } from './v1/OnshapeBlobElementV1node';
import { OnshapeBlobElementV2 } from './v2/OnshapeBlobElementV2node';
import { OnshapeBlobElement as OnshapeBlobElementV3 } from './v3/OnshapeBlobElementnode';

export class OnshapeBlobElement extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeBlobElement',
			name: 'onshapeblobelement',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeBlobElementV1(baseDescription),
			2: new OnshapeBlobElementV2(baseDescription),
			3: new OnshapeBlobElementV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

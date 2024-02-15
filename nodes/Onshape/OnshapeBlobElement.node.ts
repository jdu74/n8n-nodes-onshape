import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeBlobElementV1 } from './v1/OnshapeBlobElementV1node';
import { OnshapeBlobElementV2 } from './v2/OnshapeBlobElementV2node';
import { OnshapeBlobElementV3 } from './v3/OnshapeBlobElementV3node';

export class OnshapeBlobElement extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeBlobElement',
			name: 'onshapeblobelement',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Create, modify, and translate blob elements.',
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

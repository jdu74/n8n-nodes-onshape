import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeBlobElementV1 } from './v1/OnshapeBlobElementV1node';
import { OnshapeBlobElementV2 } from './v2/OnshapeBlobElementV2node';

export class OnshapeBlobElement extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeBlobElement',
			name: 'onshapeblobelement',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Save and access Blob Elements.',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeBlobElementV1(baseDescription),
			2: new OnshapeBlobElementV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

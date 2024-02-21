import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeThumbnailV1 } from './v1/OnshapeThumbnailV1node';
import { OnshapeThumbnailV2 } from './v2/OnshapeThumbnailV2node';
import { OnshapeThumbnail as OnshapeThumbnailV3 } from './v3/OnshapeThumbnailnode';

export class OnshapeThumbnail extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeThumbnail',
			name: 'onshapethumbnail',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeThumbnailV1(baseDescription),
			2: new OnshapeThumbnailV2(baseDescription),
			3: new OnshapeThumbnailV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

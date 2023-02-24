import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeThumbnailV1 } from './v1/OnshapeThumbnailV1node';
import { OnshapeThumbnailV2 } from './v2/OnshapeThumbnailV2node';

export class OnshapeThumbnail extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeThumbnail',
			name: 'onshapethumbnail',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Get Thumbnails.',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeThumbnailV1(baseDescription),
			2: new OnshapeThumbnailV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

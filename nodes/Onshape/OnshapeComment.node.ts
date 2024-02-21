import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeCommentV1 } from './v1/OnshapeCommentV1node';
import { OnshapeCommentV2 } from './v2/OnshapeCommentV2node';
import { OnshapeComment as OnshapeCommentV3 } from './v3/OnshapeCommentnode';

export class OnshapeComment extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeComment',
			name: 'onshapecomment',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeCommentV1(baseDescription),
			2: new OnshapeCommentV2(baseDescription),
			3: new OnshapeCommentV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

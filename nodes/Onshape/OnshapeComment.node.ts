import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeCommentV1 } from './v1/OnshapeCommentV1node';
import { OnshapeCommentV2 } from './v2/OnshapeCommentV2node';

export class OnshapeComment extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeComment',
			name: 'onshapecomment',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'CRUD for comments.',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeCommentV1(baseDescription),
			2: new OnshapeCommentV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

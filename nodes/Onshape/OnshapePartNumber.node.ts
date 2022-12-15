import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapePartNumberV1 } from './v1/OnshapePartNumberV1node';
import { OnshapePartNumberV2 } from './v2/OnshapePartNumberV2node';

export class OnshapePartNumber extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapePartNumber',
			name: 'onshapepartnumber',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'PartNumber',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapePartNumberV1(baseDescription),
			2: new OnshapePartNumberV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

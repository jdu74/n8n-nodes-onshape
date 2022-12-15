import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeDocumentV1 } from './v1/OnshapeDocumentV1node';
import { OnshapeDocumentV2 } from './v2/OnshapeDocumentV2node';

export class OnshapeDocument extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeDocument',
			name: 'onshapedocument',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Manage documents.',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeDocumentV1(baseDescription),
			2: new OnshapeDocumentV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

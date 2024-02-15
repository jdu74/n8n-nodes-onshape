import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeDocumentV1 } from './v1/OnshapeDocumentV1node';
import { OnshapeDocumentV2 } from './v2/OnshapeDocumentV2node';
import { OnshapeDocumentV3 } from './v3/OnshapeDocumentV3node';

export class OnshapeDocument extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeDocument',
			name: 'onshapedocument',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Create and manage documents.',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeDocumentV1(baseDescription),
			2: new OnshapeDocumentV2(baseDescription),
			3: new OnshapeDocumentV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

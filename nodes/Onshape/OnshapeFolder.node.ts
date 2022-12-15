import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeFolderV1 } from './v1/OnshapeFolderV1node';
import { OnshapeFolderV2 } from './v2/OnshapeFolderV2node';

export class OnshapeFolder extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeFolder',
			name: 'onshapefolder',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Access Folders.',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeFolderV1(baseDescription),
			2: new OnshapeFolderV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

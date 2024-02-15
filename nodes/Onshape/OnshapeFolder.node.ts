import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeFolderV1 } from './v1/OnshapeFolderV1node';
import { OnshapeFolderV2 } from './v2/OnshapeFolderV2node';
import { OnshapeFolderV3 } from './v3/OnshapeFolderV3node';

export class OnshapeFolder extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeFolder',
			name: 'onshapefolder',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Access and modify folder sharing permissions.',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeFolderV1(baseDescription),
			2: new OnshapeFolderV2(baseDescription),
			3: new OnshapeFolderV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

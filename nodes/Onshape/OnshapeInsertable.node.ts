import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeInsertableV1 } from './v1/OnshapeInsertableV1node';
import { OnshapeInsertableV2 } from './v2/OnshapeInsertableV2node';
import { OnshapeInsertableV3 } from './v3/OnshapeInsertableV3node';

export class OnshapeInsertable extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeInsertable',
			name: 'onshapeinsertable',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Access the list of things that can be inserted into a document.',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeInsertableV1(baseDescription),
			2: new OnshapeInsertableV2(baseDescription),
			3: new OnshapeInsertableV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

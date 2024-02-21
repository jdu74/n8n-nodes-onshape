import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeInsertableV1 } from './v1/OnshapeInsertableV1node';
import { OnshapeInsertableV2 } from './v2/OnshapeInsertableV2node';
import { OnshapeInsertable as OnshapeInsertableV3 } from './v3/OnshapeInsertablenode';

export class OnshapeInsertable extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeInsertable',
			name: 'onshapeinsertable',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
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

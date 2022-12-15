import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeInsertableV1 } from './v1/OnshapeInsertableV1node';
import { OnshapeInsertableV2 } from './v2/OnshapeInsertableV2node';

export class OnshapeInsertable extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeInsertable',
			name: 'onshapeinsertable',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Insertable',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeInsertableV1(baseDescription),
			2: new OnshapeInsertableV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

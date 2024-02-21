import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeAliasV1 } from './v1/OnshapeAliasV1node';
import { OnshapeAliasV2 } from './v2/OnshapeAliasV2node';
import { OnshapeAlias as OnshapeAliasV3 } from './v3/OnshapeAliasnode';

export class OnshapeAlias extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeAlias',
			name: 'onshapealias',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeAliasV1(baseDescription),
			2: new OnshapeAliasV2(baseDescription),
			3: new OnshapeAliasV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

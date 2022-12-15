import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeAliasV1 } from './v1/OnshapeAliasV1node';
import { OnshapeAliasV2 } from './v2/OnshapeAliasV2node';

export class OnshapeAlias extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeAlias',
			name: 'onshapealias',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Create and manage enterprise aliases. Aliases are distribution lists for the Release management workflow. They are defined and managed by administrators at the enterprise level only. Users and Teams can be assigned to an alias.',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeAliasV1(baseDescription),
			2: new OnshapeAliasV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

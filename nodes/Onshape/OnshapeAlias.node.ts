import {
	INodeTypeDescription,
	INodeVersionedType,
} from 'n8n-workflow';

import { NodeVersionedType } from '../../src/NodeVersionedType';
import { OnshapeAliasV1 } from './v1/OnshapeAliasV1node';

export class OnshapeAlias extends NodeVersionedType {
	constructor() {
		const baseDescription: INodeTypeDescription = {
			displayName: 'OnshapeAlias',
			name: 'onshapealias',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Create and manage enterprise aliases. Aliases are distribution lists for the Release management workflow. They are defined and managed by administrators at the enterprise level only. Users and Teams can be assigned to an alias.',
			defaultVersion: 1,
			properties: [],
			version: 0,
			defaults: {},
			inputs: [],
			outputs: []
		};

		const nodeVersions: INodeVersionedType['nodeVersions'] = {
			1: new OnshapeAliasV1(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

import {
	INodeTypeDescription,
	INodeVersionedType,
} from 'n8n-workflow';

import { NodeVersionedType } from '../../src/NodeVersionedType';
import { OnshapeVersionV1 } from './v1/OnshapeVersionV1node';

export class OnshapeVersion extends NodeVersionedType {
	constructor() {
		const baseDescription: INodeTypeDescription = {
			displayName: 'OnshapeVersion',
			name: 'onshapeversion',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Example of API version management.',
			defaultVersion: 1,
			properties: [],
			version: 0,
			defaults: {},
			inputs: [],
			outputs: []
		};

		const nodeVersions: INodeVersionedType['nodeVersions'] = {
			1: new OnshapeVersionV1(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

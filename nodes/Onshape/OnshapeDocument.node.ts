import {
	INodeTypeDescription,
	INodeVersionedType,
} from 'n8n-workflow';

import { NodeVersionedType } from '../../src/NodeVersionedType';
import { OnshapeDocumentV1 } from './v1/OnshapeDocumentV1node';

export class OnshapeDocument extends NodeVersionedType {
	constructor() {
		const baseDescription: INodeTypeDescription = {
			displayName: 'OnshapeDocument',
			name: 'onshapedocument',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Manage documents.',
			defaultVersion: 1,
			properties: [],
			version: 0,
			defaults: {},
			inputs: [],
			outputs: []
		};

		const nodeVersions: INodeVersionedType['nodeVersions'] = {
			1: new OnshapeDocumentV1(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

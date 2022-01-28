import {
	INodeTypeDescription,
	INodeVersionedType,
} from 'n8n-workflow';

import { NodeVersionedType } from '../../src/NodeVersionedType';
import { OnshapeBlobElementV1 } from './v1/OnshapeBlobElementV1node';

export class OnshapeBlobElement extends NodeVersionedType {
	constructor() {
		const baseDescription: INodeTypeDescription = {
			displayName: 'OnshapeBlobElement',
			name: 'onshapeblobelement',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Save and access Blob Elements.',
			defaultVersion: 1,
			properties: [],
			version: 0,
			defaults: {},
			inputs: [],
			outputs: []
		};

		const nodeVersions: INodeVersionedType['nodeVersions'] = {
			1: new OnshapeBlobElementV1(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

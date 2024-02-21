import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeAPIApplicationV1 } from './v1/OnshapeAPIApplicationV1node';
import { OnshapeAPIApplicationV2 } from './v2/OnshapeAPIApplicationV2node';
import { OnshapeAPIApplication as OnshapeAPIApplicationV3 } from './v3/OnshapeAPIApplicationnode';

export class OnshapeAPIApplication extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeAPIApplication',
			name: 'onshapeapiapplication',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeAPIApplicationV1(baseDescription),
			2: new OnshapeAPIApplicationV2(baseDescription),
			3: new OnshapeAPIApplicationV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

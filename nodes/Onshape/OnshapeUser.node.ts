import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeUserV1 } from './v1/OnshapeUserV1node';
import { OnshapeUserV2 } from './v2/OnshapeUserV2node';
import { OnshapeUserV3 } from './v3/OnshapeUserV3node';

export class OnshapeUser extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeUser',
			name: 'onshapeuser',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Access user information.',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeUserV1(baseDescription),
			2: new OnshapeUserV2(baseDescription),
			3: new OnshapeUserV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

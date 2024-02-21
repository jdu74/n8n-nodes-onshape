import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapePartStudioV1 } from './v1/OnshapePartStudioV1node';
import { OnshapePartStudioV2 } from './v2/OnshapePartStudioV2node';
import { OnshapePartStudio as OnshapePartStudioV3 } from './v3/OnshapePartStudionode';

export class OnshapePartStudio extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapePartStudio',
			name: 'onshapepartstudio',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapePartStudioV1(baseDescription),
			2: new OnshapePartStudioV2(baseDescription),
			3: new OnshapePartStudioV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

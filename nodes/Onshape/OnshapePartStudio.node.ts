import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapePartStudioV1 } from './v1/OnshapePartStudioV1node';
import { OnshapePartStudioV2 } from './v2/OnshapePartStudioV2node';
import { OnshapePartStudioV3 } from './v3/OnshapePartStudioV3node';

export class OnshapePartStudio extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapePartStudio',
			name: 'onshapepartstudio',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Access and modify Part Studios.',
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

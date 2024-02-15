import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeFeatureStudioV1 } from './v1/OnshapeFeatureStudioV1node';
import { OnshapeFeatureStudioV2 } from './v2/OnshapeFeatureStudioV2node';
import { OnshapeFeatureStudioV3 } from './v3/OnshapeFeatureStudioV3node';

export class OnshapeFeatureStudio extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeFeatureStudio',
			name: 'onshapefeaturestudio',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Access and manage Feature Studio Elements.',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeFeatureStudioV1(baseDescription),
			2: new OnshapeFeatureStudioV2(baseDescription),
			3: new OnshapeFeatureStudioV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

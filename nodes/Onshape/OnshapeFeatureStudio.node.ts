import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeFeatureStudioV1 } from './v1/OnshapeFeatureStudioV1node';
import { OnshapeFeatureStudioV2 } from './v2/OnshapeFeatureStudioV2node';

export class OnshapeFeatureStudio extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeFeatureStudio',
			name: 'onshapefeaturestudio',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Access and write to Feature Studio Elements.',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeFeatureStudioV1(baseDescription),
			2: new OnshapeFeatureStudioV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

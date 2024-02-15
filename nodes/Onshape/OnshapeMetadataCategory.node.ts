import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeMetadataCategoryV1 } from './v1/OnshapeMetadataCategoryV1node';
import { OnshapeMetadataCategoryV2 } from './v2/OnshapeMetadataCategoryV2node';
import { OnshapeMetadataCategoryV3 } from './v3/OnshapeMetadataCategoryV3node';

export class OnshapeMetadataCategory extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeMetadataCategory',
			name: 'onshapemetadatacategory',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Access properties associated with metadata categories.',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeMetadataCategoryV1(baseDescription),
			2: new OnshapeMetadataCategoryV2(baseDescription),
			3: new OnshapeMetadataCategoryV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

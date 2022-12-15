import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeMetadataCategoryV1 } from './v1/OnshapeMetadataCategoryV1node';
import { OnshapeMetadataCategoryV2 } from './v2/OnshapeMetadataCategoryV2node';

export class OnshapeMetadataCategory extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeMetadataCategory',
			name: 'onshapemetadatacategory',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'MetadataCategory',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeMetadataCategoryV1(baseDescription),
			2: new OnshapeMetadataCategoryV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

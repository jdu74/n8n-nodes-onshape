import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeMetadataV1 } from './v1/OnshapeMetadataV1node';
import { OnshapeMetadataV2 } from './v2/OnshapeMetadataV2node';
import { OnshapeMetadataV3 } from './v3/OnshapeMetadataV3node';

export class OnshapeMetadata extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeMetadata',
			name: 'onshapemetadata',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Access and modify metadata.',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeMetadataV1(baseDescription),
			2: new OnshapeMetadataV2(baseDescription),
			3: new OnshapeMetadataV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

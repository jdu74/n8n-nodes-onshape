import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapePublicationV1 } from './v1/OnshapePublicationV1node';
import { OnshapePublicationV2 } from './v2/OnshapePublicationV2node';
import { OnshapePublication as OnshapePublicationV3 } from './v3/OnshapePublicationnode';

export class OnshapePublication extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapePublication',
			name: 'onshapepublication',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapePublicationV1(baseDescription),
			2: new OnshapePublicationV2(baseDescription),
			3: new OnshapePublicationV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

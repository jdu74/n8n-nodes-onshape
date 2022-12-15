import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapePublicationV1 } from './v1/OnshapePublicationV1node';
import { OnshapePublicationV2 } from './v2/OnshapePublicationV2node';

export class OnshapePublication extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapePublication',
			name: 'onshapepublication',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Modify and access publication information.',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapePublicationV1(baseDescription),
			2: new OnshapePublicationV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

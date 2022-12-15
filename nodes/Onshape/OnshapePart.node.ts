import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapePartV1 } from './v1/OnshapePartV1node';
import { OnshapePartV2 } from './v2/OnshapePartV2node';

export class OnshapePart extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapePart',
			name: 'onshapepart',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Get details about specific parts.',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapePartV1(baseDescription),
			2: new OnshapePartV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

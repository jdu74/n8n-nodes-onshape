import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeRevisionV1 } from './v1/OnshapeRevisionV1node';
import { OnshapeRevisionV2 } from './v2/OnshapeRevisionV2node';
import { OnshapeRevision as OnshapeRevisionV3 } from './v3/OnshapeRevisionnode';

export class OnshapeRevision extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeRevision',
			name: 'onshaperevision',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeRevisionV1(baseDescription),
			2: new OnshapeRevisionV2(baseDescription),
			3: new OnshapeRevisionV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

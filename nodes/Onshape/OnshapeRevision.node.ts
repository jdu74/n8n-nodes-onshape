import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeRevisionV1 } from './v1/OnshapeRevisionV1node';
import { OnshapeRevisionV2 } from './v2/OnshapeRevisionV2node';

export class OnshapeRevision extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeRevision',
			name: 'onshaperevision',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Access revisions.',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeRevisionV1(baseDescription),
			2: new OnshapeRevisionV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

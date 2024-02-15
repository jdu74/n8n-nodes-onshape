import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeRevisionV1 } from './v1/OnshapeRevisionV1node';
import { OnshapeRevisionV2 } from './v2/OnshapeRevisionV2node';
import { OnshapeRevisionV3 } from './v3/OnshapeRevisionV3node';

export class OnshapeRevision extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeRevision',
			name: 'onshaperevision',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Access, delete, and enumerate revisions.',
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

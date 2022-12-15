import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeCompanyV1 } from './v1/OnshapeCompanyV1node';
import { OnshapeCompanyV2 } from './v2/OnshapeCompanyV2node';

export class OnshapeCompany extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeCompany',
			name: 'onshapecompany',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Access company information.',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeCompanyV1(baseDescription),
			2: new OnshapeCompanyV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

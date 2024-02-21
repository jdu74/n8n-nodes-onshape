import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeCompanyV1 } from './v1/OnshapeCompanyV1node';
import { OnshapeCompanyV2 } from './v2/OnshapeCompanyV2node';
import { OnshapeCompany as OnshapeCompanyV3 } from './v3/OnshapeCompanynode';

export class OnshapeCompany extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeCompany',
			name: 'onshapecompany',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeCompanyV1(baseDescription),
			2: new OnshapeCompanyV2(baseDescription),
			3: new OnshapeCompanyV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

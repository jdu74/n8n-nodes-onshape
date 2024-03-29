import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeAppAssociativeDataV1 } from './v1/OnshapeAppAssociativeDataV1node';
import { OnshapeAppAssociativeDataV2 } from './v2/OnshapeAppAssociativeDataV2node';
import { OnshapeAppAssociativeData as OnshapeAppAssociativeDataV3 } from './v3/OnshapeAppAssociativeDatanode';

export class OnshapeAppAssociativeData extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeAppAssociativeData',
			name: 'onshapeappassociativedata',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeAppAssociativeDataV1(baseDescription),
			2: new OnshapeAppAssociativeDataV2(baseDescription),
			3: new OnshapeAppAssociativeDataV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

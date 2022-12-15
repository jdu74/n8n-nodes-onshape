import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeAppAssociativeDataV1 } from './v1/OnshapeAppAssociativeDataV1node';
import { OnshapeAppAssociativeDataV2 } from './v2/OnshapeAppAssociativeDataV2node';

export class OnshapeAppAssociativeData extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeAppAssociativeData',
			name: 'onshapeappassociativedata',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Manage application-specific metadata that is used to associate application data to Onshape data',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeAppAssociativeDataV1(baseDescription),
			2: new OnshapeAppAssociativeDataV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

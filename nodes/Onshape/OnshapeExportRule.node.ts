import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeExportRuleV1 } from './v1/OnshapeExportRuleV1node';
import { OnshapeExportRuleV2 } from './v2/OnshapeExportRuleV2node';
import { OnshapeExportRule as OnshapeExportRuleV3 } from './v3/OnshapeExportRulenode';

export class OnshapeExportRule extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeExportRule',
			name: 'onshapeexportrule',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeExportRuleV1(baseDescription),
			2: new OnshapeExportRuleV2(baseDescription),
			3: new OnshapeExportRuleV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

import {
	INodeTypeDescription,
	INodeVersionedType,
} from 'n8n-workflow';

import { NodeVersionedType } from '../../src/NodeVersionedType';
import { OnshapeExportRuleV1 } from './v1/OnshapeExportRuleV1node';

export class OnshapeExportRule extends NodeVersionedType {
	constructor() {
		const baseDescription: INodeTypeDescription = {
			displayName: 'OnshapeExportRule',
			name: 'onshapeexportrule',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'ExportRule',
			defaultVersion: 1,
			properties: [],
			version: 0,
			defaults: {},
			inputs: [],
			outputs: []
		};

		const nodeVersions: INodeVersionedType['nodeVersions'] = {
			1: new OnshapeExportRuleV1(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeWebhookV1 } from './v1/OnshapeWebhookV1node';
import { OnshapeWebhookV2 } from './v2/OnshapeWebhookV2node';

export class OnshapeWebhook extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeWebhook',
			name: 'onshapewebhook',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Create and manage webhooks.',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeWebhookV1(baseDescription),
			2: new OnshapeWebhookV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

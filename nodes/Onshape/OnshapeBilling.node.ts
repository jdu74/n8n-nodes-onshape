import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeBillingV1 } from './v1/OnshapeBillingV1node';
import { OnshapeBillingV2 } from './v2/OnshapeBillingV2node';
import { OnshapeBillingV3 } from './v3/OnshapeBillingV3node';

export class OnshapeBilling extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeBilling',
			name: 'onshapebilling',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Get billing plan data for applications.',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeBillingV1(baseDescription),
			2: new OnshapeBillingV2(baseDescription),
			3: new OnshapeBillingV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

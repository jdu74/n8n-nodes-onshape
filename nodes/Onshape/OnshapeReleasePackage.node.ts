import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeReleasePackageV1 } from './v1/OnshapeReleasePackageV1node';
import { OnshapeReleasePackageV2 } from './v2/OnshapeReleasePackageV2node';

export class OnshapeReleasePackage extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeReleasePackage',
			name: 'onshapereleasepackage',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Manage Release Management workflows.',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeReleasePackageV1(baseDescription),
			2: new OnshapeReleasePackageV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

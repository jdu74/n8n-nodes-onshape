import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeReleasePackageV1 } from './v1/OnshapeReleasePackageV1node';
import { OnshapeReleasePackageV2 } from './v2/OnshapeReleasePackageV2node';
import { OnshapeReleasePackage as OnshapeReleasePackageV3 } from './v3/OnshapeReleasePackagenode';

export class OnshapeReleasePackage extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeReleasePackage',
			name: 'onshapereleasepackage',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeReleasePackageV1(baseDescription),
			2: new OnshapeReleasePackageV2(baseDescription),
			3: new OnshapeReleasePackageV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

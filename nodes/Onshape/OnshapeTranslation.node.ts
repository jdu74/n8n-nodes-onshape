import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeTranslationV1 } from './v1/OnshapeTranslationV1node';
import { OnshapeTranslationV2 } from './v2/OnshapeTranslationV2node';
import { OnshapeTranslation as OnshapeTranslationV3 } from './v3/OnshapeTranslationnode';

export class OnshapeTranslation extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeTranslation',
			name: 'onshapetranslation',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeTranslationV1(baseDescription),
			2: new OnshapeTranslationV2(baseDescription),
			3: new OnshapeTranslationV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

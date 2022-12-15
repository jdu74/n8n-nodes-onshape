import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeTranslationV1 } from './v1/OnshapeTranslationV1node';
import { OnshapeTranslationV2 } from './v2/OnshapeTranslationV2node';

export class OnshapeTranslation extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeTranslation',
			name: 'onshapetranslation',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Export an Onshape surface, part, Part Studio, Assembly, or subassembly to a supported file format, such as STL, PARASOLID, or SOLIDWORKS',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeTranslationV1(baseDescription),
			2: new OnshapeTranslationV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

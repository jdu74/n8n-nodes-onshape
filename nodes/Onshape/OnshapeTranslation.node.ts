import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeTranslationV1 } from './v1/OnshapeTranslationV1node';
import { OnshapeTranslationV2 } from './v2/OnshapeTranslationV2node';
import { OnshapeTranslationV3 } from './v3/OnshapeTranslationV3node';

export class OnshapeTranslation extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeTranslation',
			name: 'onshapetranslation',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Import and export Onshape surfaces, parts, Part Studios, Assemblies, and subassemblies to/from other file formats (STL, PARASOLID, SOLIDWORKS, etc).',
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

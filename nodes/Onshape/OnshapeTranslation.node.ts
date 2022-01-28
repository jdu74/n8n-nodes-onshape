import {
	INodeTypeDescription,
	INodeVersionedType,
} from 'n8n-workflow';

import { NodeVersionedType } from '../../src/NodeVersionedType';
import { OnshapeTranslationV1 } from './v1/OnshapeTranslationV1node';

export class OnshapeTranslation extends NodeVersionedType {
	constructor() {
		const baseDescription: INodeTypeDescription = {
			displayName: 'OnshapeTranslation',
			name: 'onshapetranslation',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Export an Onshape surface, part, Part Studio, Assembly, or subassembly to a supported file format, such as STL, PARASOLID, or SOLIDWORKS',
			defaultVersion: 1,
			properties: [],
			version: 0,
			defaults: {},
			inputs: [],
			outputs: []
		};

		const nodeVersions: INodeVersionedType['nodeVersions'] = {
			1: new OnshapeTranslationV1(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

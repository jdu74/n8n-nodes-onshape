import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeSketchV1 } from './v1/OnshapeSketchV1node';
import { OnshapeSketchV2 } from './v2/OnshapeSketchV2node';

export class OnshapeSketch extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeSketch',
			name: 'onshapesketch',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Sketch',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeSketchV1(baseDescription),
			2: new OnshapeSketchV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

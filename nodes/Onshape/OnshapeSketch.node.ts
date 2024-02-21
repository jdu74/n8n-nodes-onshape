import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeSketchV1 } from './v1/OnshapeSketchV1node';
import { OnshapeSketchV2 } from './v2/OnshapeSketchV2node';
import { OnshapeSketch as OnshapeSketchV3 } from './v3/OnshapeSketchnode';

export class OnshapeSketch extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeSketch',
			name: 'onshapesketch',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeSketchV1(baseDescription),
			2: new OnshapeSketchV2(baseDescription),
			3: new OnshapeSketchV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

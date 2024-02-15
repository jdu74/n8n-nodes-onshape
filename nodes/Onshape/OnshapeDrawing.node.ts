import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeDrawingV1 } from './v1/OnshapeDrawingV1node';
import { OnshapeDrawingV2 } from './v2/OnshapeDrawingV2node';
import { OnshapeDrawingV3 } from './v3/OnshapeDrawingV3node';

export class OnshapeDrawing extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeDrawing',
			name: 'onshapedrawing',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Access, create, and translate drawings.',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeDrawingV1(baseDescription),
			2: new OnshapeDrawingV2(baseDescription),
			3: new OnshapeDrawingV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

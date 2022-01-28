import {
	INodeTypeDescription,
	INodeVersionedType,
} from 'n8n-workflow';

import { NodeVersionedType } from '../../src/NodeVersionedType';
import { OnshapePartStudioV1 } from './v1/OnshapePartStudioV1node';

export class OnshapePartStudio extends NodeVersionedType {
	constructor() {
		const baseDescription: INodeTypeDescription = {
			displayName: 'OnshapePartStudio',
			name: 'onshapepartstudio',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Modify, change, and get PartStudios.',
			defaultVersion: 1,
			properties: [],
			version: 0,
			defaults: {},
			inputs: [],
			outputs: []
		};

		const nodeVersions: INodeVersionedType['nodeVersions'] = {
			1: new OnshapePartStudioV1(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

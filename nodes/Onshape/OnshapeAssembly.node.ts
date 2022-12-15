import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeAssemblyV1 } from './v1/OnshapeAssemblyV1node';
import { OnshapeAssemblyV2 } from './v2/OnshapeAssemblyV2node';

export class OnshapeAssembly extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeAssembly',
			name: 'onshapeassembly',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Access and manipulate assembly elements.',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeAssemblyV1(baseDescription),
			2: new OnshapeAssemblyV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeAssemblyV1 } from './v1/OnshapeAssemblyV1node';
import { OnshapeAssemblyV2 } from './v2/OnshapeAssemblyV2node';
import { OnshapeAssemblyV3 } from './v3/OnshapeAssemblyV3node';

export class OnshapeAssembly extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeAssembly',
			name: 'onshapeassembly',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Create and manage assemblies.',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeAssemblyV1(baseDescription),
			2: new OnshapeAssemblyV2(baseDescription),
			3: new OnshapeAssemblyV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

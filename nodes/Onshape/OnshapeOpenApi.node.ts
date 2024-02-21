import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeOpenApiV1 } from './v1/OnshapeOpenApiV1node';
import { OnshapeOpenApiV2 } from './v2/OnshapeOpenApiV2node';
import { OnshapeOpenApi as OnshapeOpenApiV3 } from './v3/OnshapeOpenApinode';

export class OnshapeOpenApi extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeOpenApi',
			name: 'onshapeopenapi',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeOpenApiV1(baseDescription),
			2: new OnshapeOpenApiV2(baseDescription),
			3: new OnshapeOpenApiV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeOpenApiV1 } from './v1/OnshapeOpenApiV1node';
import { OnshapeOpenApiV2 } from './v2/OnshapeOpenApiV2node';

export class OnshapeOpenApi extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeOpenApi',
			name: 'onshapeopenapi',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Endpoints for getting the OpenAPI specification for the Onshape API.',
			defaultVersion: 2
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeOpenApiV1(baseDescription),
			2: new OnshapeOpenApiV2(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

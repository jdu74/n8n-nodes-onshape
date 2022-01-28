import {
	INodeTypeDescription,
	INodeVersionedType,
} from 'n8n-workflow';

import { NodeVersionedType } from '../../src/NodeVersionedType';
import { OnshapeOpenApiV1 } from './v1/OnshapeOpenApiV1node';

export class OnshapeOpenApi extends NodeVersionedType {
	constructor() {
		const baseDescription: INodeTypeDescription = {
			displayName: 'OnshapeOpenApi',
			name: 'onshapeopenapi',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Endpoints for getting the OpenAPI specification for the Onshape API.',
			defaultVersion: 1,
			properties: [],
			version: 0,
			defaults: {},
			inputs: [],
			outputs: []
		};

		const nodeVersions: INodeVersionedType['nodeVersions'] = {
			1: new OnshapeOpenApiV1(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

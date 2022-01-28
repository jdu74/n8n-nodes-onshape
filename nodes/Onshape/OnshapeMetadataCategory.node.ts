import {
	INodeTypeDescription,
	INodeVersionedType,
} from 'n8n-workflow';

import { NodeVersionedType } from '../../src/NodeVersionedType';
import { OnshapeMetadataCategoryV1 } from './v1/OnshapeMetadataCategoryV1node';

export class OnshapeMetadataCategory extends NodeVersionedType {
	constructor() {
		const baseDescription: INodeTypeDescription = {
			displayName: 'OnshapeMetadataCategory',
			name: 'onshapemetadatacategory',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'MetadataCategory',
			defaultVersion: 1,
			properties: [],
			version: 0,
			defaults: {},
			inputs: [],
			outputs: []
		};

		const nodeVersions: INodeVersionedType['nodeVersions'] = {
			1: new OnshapeMetadataCategoryV1(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

import {
	INodeTypeDescription,
	INodeVersionedType,
} from 'n8n-workflow';

import { NodeVersionedType } from '../../src/NodeVersionedType';
import { OnshapeAppAssociativeDataV1 } from './v1/OnshapeAppAssociativeDataV1node';

export class OnshapeAppAssociativeData extends NodeVersionedType {
	constructor() {
		const baseDescription: INodeTypeDescription = {
			displayName: 'OnshapeAppAssociativeData',
			name: 'onshapeappassociativedata',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Manage application-specific metadata that is used to associate application data to Onshape data',
			defaultVersion: 1,
			properties: [],
			version: 0,
			defaults: {},
			inputs: [],
			outputs: []
		};

		const nodeVersions: INodeVersionedType['nodeVersions'] = {
			1: new OnshapeAppAssociativeDataV1(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

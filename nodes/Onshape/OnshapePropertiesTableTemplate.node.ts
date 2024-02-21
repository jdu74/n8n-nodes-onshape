import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapePropertiesTableTemplate as OnshapePropertiesTableTemplateV3 } from './v3/OnshapePropertiesTableTemplatenode';

export class OnshapePropertiesTableTemplate extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapePropertiesTableTemplate',
			name: 'onshapepropertiestabletemplate',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			3: new OnshapePropertiesTableTemplateV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

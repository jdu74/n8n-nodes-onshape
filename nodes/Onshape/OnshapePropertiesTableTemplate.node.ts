import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapePropertiesTableTemplateV3 } from './v3/OnshapePropertiesTableTemplateV3node';

export class OnshapePropertiesTableTemplate extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapePropertiesTableTemplate',
			name: 'onshapepropertiestabletemplate',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Create, access, and delete templates for properties tables.',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			3: new OnshapePropertiesTableTemplateV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}

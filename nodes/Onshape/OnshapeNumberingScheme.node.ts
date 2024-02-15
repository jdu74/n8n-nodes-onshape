import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeNumberingSchemeV3 } from './v3/OnshapeNumberingSchemeV3node';

export class OnshapeNumberingScheme extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeNumberingScheme',
			name: 'onshapenumberingscheme',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Manage the set of valid Part numbers.',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			3: new OnshapeNumberingSchemeV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}
